const database = require("../data/databaseConfig");

module.exports = {
  add,
  findById,
  find,
  findBy,
  destroy
};

const table = database("sports");

function find() {
  return table.select("name", "players", "id");
}

function findBy(filter) {
  return table.where(filter);
}

function findById(id) {
  return table.where({ id });
}

function add(sport) {
  return table.insert(sport).then(ids => {
    const [id] = ids;
    return findById(id);
  });
}

function destroy(id) {
  return table.where(id).del();
}
