let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
let user = require("../models/user-schema");

router.route("/create").post((req, res, next) => {
  user.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
      console.log("User created successfully");
    }
  });
});

router.route("/").get((req, res) => {
  user.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route("/update/:id").put((req, res, next) => {
  user.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("User updated successfully !");
      }
    }
  );
});

router.route("/delete/:id").delete((req, res, next) => {
  user.findOneAndRemove({ _id: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
      console.log("User Deleted successfully !");
    }
  });
});

module.exports = router;
