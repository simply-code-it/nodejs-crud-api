const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

dotenv.config();
// const postRoutes = require("./routes/post");

//connect to db
mongoose
  .connect(process.env.DATAURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!!"));
//   .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log("DB connection error : ", err.message);
});
//my middleware
// const midware = (req, res, next) => {
//   console.log("midware applied !!");
//   next();
// };
//use destructuring
// const { getPosts } = require("./routes/post");

//importing routes
const postRoutes = require("./routes/post");

app.use(morgan("dev"));
app.use(bodyParser.json());

// app.use(midware);

app.use("/", postRoutes);
app.listen(process.env.PORT, () => {
  console.log("listening at port 3000...");
});
