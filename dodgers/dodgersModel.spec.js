const db = require('../data/dbConfig')
const server = require('../api/server')
const supertest = require('supertest')
const { insert } = require('./dodgers-model')

describe('dodgers model', () => {
    beforeEach(async () => {
        await db('players').truncate()
    })

    it('should be on the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('GET /', () => {
        it('should respond with a 200 status code', () => {
            return supertest(server).get('/').expect(200)
        })
        it('should return JSON', () => {
            return supertest(server).get('/').expect('Content-type', /json/i)
        })
    })
    describe('getAll()', () => {
        it('should return with a 200 when pulling players', () => {
            return supertest(server).get('/api/dodgers').expect(200)
        })
        it('should return JSON when pulling players', () => {
            return supertest(server).get('/api/dodgers').expect('content-type', /json/i)
        })
    })
    describe('insert()', () => {
        it('should insert players', async () => {
            await insert({ name: 'Joc Pederson', jersey_number: 31, position: 'OF'})
            await insert({ name: 'Chris Taylor', jersey_number: 31, position: 'IF/OF'})
            const players = await db('players') 

            expect(players).toHaveLength(2);
        })
        it('should respond with a 201 status code', async () => {
            const player = { name: 'David Freese', jersey_number: 25, position: 'IF'}

            const res = await supertest(server).post('/api/dodgers').send(player)

            expect(res.status).toBe(201)
        })
    })
})
