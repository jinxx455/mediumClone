const mongoose = require("mongoose");

const url =
  "mongodb+srv://amritansh4945:1SpsGWQ0A2gMesoG@cluster0.ltrtb5z.mongodb.net/medium_clone";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
