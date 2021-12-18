
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Tanjiro", password: "demonSlayer1" },
        { username: "Zenitsu", password: "demonSlayer2" },
        { username: "Inosuke", password: "demonSlayer3" }
      ]);
    });
};
