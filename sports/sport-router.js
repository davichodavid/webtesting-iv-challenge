const router = require("express").Router();
const sportsModel = require("./sportsModel");

router.get("/", (req, res) => {
  sportsModel
    .find()
    .then(sports => {
      res.status(200).json(sports);
      console.log(sports);
    })
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
  sportsModel
    .destroy(req.params.id)
    .then(deletedSport => {
      if (deletedSport > 0) {
        res.status(200).json(deletedSport);
      } else {
        res.status(404).json({ error: "not found" });
      }
    })
    .catch(err => res.status(500).json({ success: false, err }));
});

router.post("/", (req, res) => {
  sportsModel
    .add(req.body)
    .then(sportAdded => res.status(200).json(sportAdded))
    .catch(err => {
      res.status(500).json({ success: false, err });
      console.log(err);
    });
});

module.exports = router;
