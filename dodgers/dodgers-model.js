const db = require("../data/dbConfig");

module.exports = {
  getAll,
  insert
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
