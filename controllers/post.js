const Post = require("../models/post");
exports.getPosts = (req, res) => {
  const posts = Post.find()
    .select("_id title body")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  // console.log("creating post ::", req.body);
  post.save((err, result) => {
    if (err) {
      return res.json({
        error: err,
      });
    } else {
      res.json({
        post: result,
      });
    }
  });
};

exports.getOne = (req, res) => {
  Post.findById(req.params.postid, (err, data) => {
    if (err) console.log(err);
    else res.json(data);
  });
};

exports.editPost = (req, res) => {
  const _id = req.params.postid;
  Post.findByIdAndUpdate(
    _id,
    {
      $set: { body: req.body.body },
    },
    () => {
      res.json("updated");
    }
  );
};

exports.deletePost = (req, res) => {
  const _id = req.params.postid;
  Post.remove({ _id }, (err) => {
    if (err) console.log(err);
    res.json("removed");
  });
};
