const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url = "mongodb+srv://admin123:admin123@cluster0-yx6nh.gcp.mongodb.net/test?retryWrites=true&w=majority";

// const url = "mongodb://localhost:27017/graduation";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
