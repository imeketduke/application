const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();

// BodyParser middleware
app.use(express.json());

// DB config
const db = config.get("mongoURI");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Routes
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));

// BodyParser
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
