const db = require("../models");

module.exports = function(app) {
  app.get("/api/tables", function(req, res) {
    db.Reservation.findAll({
      where: {
        isOnWaitlist: false
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/waitlist", function(req, res) {
    db.Reservation.findAll({
      where: {
        isOnWaitlist: true
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/tables", function(req, res) {
    db.Reservation.findAll({
      where: {
        isOnWaitlist: false
      }
    }).then(function(currentTables) {
      const newReservation = req.body;

      if (currentTables.length < 5) {
        newReservation.isOnWaitlist = false;
      }

      db.Reservation.create(newReservation).then(function() {
        if (newReservation.isOnWaitlist === false) {
          res.json(false);
        } else {
          res.json(true);
        }
      })//;
      .catch(function (err) {
          res.json(err);
      });
    });
  });
};
