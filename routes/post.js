// const getPosts =
//   ("/",
//   (req, res) => {
//     res.send("<h1>Hello World updated!</h1>");
//   });

// module.exports = { getPosts };

// exports.getPosts = (req, res, next) => {
//   res.send("<h1>Hello World updated 4!</h1>");
//   next();
// };
const express = require("express");
const postController = require("../controllers/post");

const router = express.Router();

router.get("/", postController.getPosts);
router.get("/:postid", postController.getOne);
router.post("/post", postController.createPost);
router.put("/edit/:postid", postController.editPost);
router.delete("/delete/:postid", postController.deletePost);
module.exports = router;

// console.log(process);
