const database = require("../../data/dbConfig");

function find() {
  return database("users");
}

function findBy(filter) {
  return database("users")
    .where(filter);
}

function findById(user_id) {
  return database("users as u")
    .where("u.id", user_id)
    .first();
}

async function add(user) {
    const [id] = await database("users")
        .insert(user)

    return findById(id);
}

module.exports = {
  add,
  find,
  findBy,
  findById,
};