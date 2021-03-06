let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
let category = require("../models/category-schema");

router.route("/create").post((req, res, next) => {
  category.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
      console.log("category created successfully");
    }
  });
});

router.route("/").get((req, res,next) => {
  category.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
      console.log("category found successfully");
    }
  });
});
// router.route("/update/:id").put((req, res, next) => {
//     user.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       (error, data) => {
//         if (error) {
//           return next(error);
//           console.log(error);
//         } else {
//           res.json(data);
//           console.log("category updated successfully !");
//         }
//       }
//     );
//   });
  
  router.route("/delete/:name").delete((req, res, next) => {
    category.findOneAndRemove({ name: req.params.name }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
        console.log("category Deleted successfully !");
      }
    });
  });

module.exports = router;
