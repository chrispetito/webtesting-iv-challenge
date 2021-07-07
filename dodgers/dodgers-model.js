const db = require("../data/dbConfig");

module.exports = {
  getAll,
  insert,
  remove,
  findById
};

function getAll() {
  return db("players");
}

function insert(player) {
  return db("players")
    .insert(player, "id")
    .then(ids => {
      return db("players")
        .where({ id: ids[0] })
        .first();
    });
}

function remove(id) {
  return db("players")
    .where("id", id)
    .delete();
}

function findById(id) {
  return db("players")
    .where({ id })
    .first();
}
