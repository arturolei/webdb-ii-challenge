
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {"VIN": "OHMSS007", "make": "Aston Martin", "model":7, "mileage": 25, "transmission": "MI6", "title":"licensed to kill"},
        {"VIN": "FAKE1234", "make": "Firebird Delorean", "model":2, "mileage": 1232, "transmission": "manual", "title":"stolen"},
        {"VIN": "ACD221", "make": "Hansom Cab", "model":1854,"mileage": 1854, "transmission": "manual horses", "title":"commissioned"}
      ]);
    });
};
