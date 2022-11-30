import mongoose from "mongoose";
import "dotenv/config";

// imports the mongoose package, connects to the MongoDB server and database
// specified in MONGODB_CONNECT_STRING
mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });
const db = mongoose.connection;

// Schema definition
const exerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
  },
  weight: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
  },
  unit: {
    type: String,
    required: true,
    default: "lbs",
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

db.once("open", (err) => {
  if (err) {
    res.status(500).json({ error: "500:Connection to the server failed." });
  } else {
    console.log(
      "Successfully connected to MongoDB Movies collection using Mongoose."
    );
  }
});
