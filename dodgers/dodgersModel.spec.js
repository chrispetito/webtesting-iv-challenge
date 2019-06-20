const db = require('../data/dbConfig')

describe('dodgers model', () => {
    beforeEach(async () => {
        await db('players').truncate()
    })

    it('should be on the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})