import mongoose from "mongoose";
import "dotenv/config";

// imports the mongoose package, connects to the MongoDB server and database
// specified in MONGODB_CONNECT_STRING
mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", (err) => {
  if (err) {
    res.status(500).json({ error: "500:Connection to the server failed." });
  } else {
    console.log(
      "Successfully connected to MongoDB Movies collection using Mongoose."
    );
  }
});

// Schema definition
const exerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
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
    enum: ["lbs", "kg", "miles", "m", "km"],
    default: "lbs",
  },
  date: {
    type: Date,
    required: true,
    min: "011-21-2022",
    default: new Date(),
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

// Create an exercise
const createExercise = async (name, reps, weight, unit, date) => {
  const exercise = new Exercise({
    name: name,
    reps: reps,
    weight: weight,
    unit: unit,
    date: date,
  });
  return exercise.save();
};

// Retrieve
const findExercises = async (filter) => {
  const query = Exercise.find(filter);
  return query.exec();
};

const findExerciseById = async (_id) => {
  const query = Exercise.findById(_id);
  return query.exec();
};

// Update
const updateExercise = async (_id, name, reps, weight, unit, date) => {
  const result = await Exercise.replaceOne(
    { _id: _id },
    {
      name: name,
      reps: reps,
      weight: weight,
      unit: unit,
      date: date,
    }
  );
  return result.modifiedCount;
};

// Delete
const deleteExercise = async (_id) => {
  const result = await Exercise.deleteOne({ _id: _id });
  return result.deletedCount;
};

export {
  createExercise,
  findExerciseById,
  findExercises,
  updateExercise,
  deleteExercise,
};
