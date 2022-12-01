import "dotenv/config";
import express from "express";
import * as exercises from "./model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

/**
 * Create an exercise with a POST request
 */
app.post("/exercises", (req, res) => {
  exercises
    .createExercise(
      req.body.name,
      req.body.reps,
      req.body.weight,
      req.body.unit,
      req.body.date
    )
    .then((exercise) => {
      res.status(201).json(exercise);
    })
    .catch((error) => {
      console.error(error);
      // Send a message if the request had an error.
      res.status(400).json({
        Error: "Data is invalid or data is missing for required fields.",
      });
    });
  // res.send("Create using POST /exercises");
});

/**
 * Retrieve all exercises or a subset of exercises with a GET request
 */
app.get("/exercises", (req, res) => {
  let filter = {};
  // Set more filter options here
  if (req.query.date !== undefined) {
    filter = { date: req.query.date };
  }
  exercises
    .findExercises(filter, "", 0)
    .then((exercises) => {
      res.send(exercises);
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Something's wrong with fetching all exercises." });
    });
  // res.send("Read using GET /exercises");
});

/**
 * Retrieve a single exercise based on ID with a GET request
 */
app.get("/exercises/:_id", (req, res) => {
  const exerciseId = req.params._id;
  exercises
    .findExerciseById(exerciseId)
    .then((exercise) => {
      if (exercise !== null) {
        res.json(exercise);
      } else {
        res.status(404).json({ Error: "Exercise not found" });
      }
    })
    .catch((error) => {
      res
        .status(400)
        .json({ Error: "Something's wrong with finding the exercise." });
    });
  // res.send("GET using GET /exercises/:id");
});

/**
 * Update an exercise based on ID with a PUT request
 */
app.put("/exercises/:_id", (req, res) => {
  exercises
    .updateExercise(
      req.params._id,
      req.body.name,
      req.body.reps,
      req.body.weight,
      req.body.unit,
      req.body.date
    )
    .then((modifiedCount) => {
      // Validation
      if (
        !req.body.name ||
        !req.body.reps ||
        !req.body.weight ||
        !req.body.unit ||
        !req.body.date
      ) {
        res
          .status(404)
          .json({ Error: "At least one required field is missing." });
      }
      if (req.body.name.length < 1) {
        res.status(404).json({ Error: "Invalid name field." });
      }
      // Update document
      if (modifiedCount === 1) {
        res.json({
          _id: req.params._id,
          name: req.body.name,
          reps: req.body.reps,
          weight: req.body.weight,
          unit: req.body.unit,
          date: req.body.date,
        });
      } else {
        res.status(404).json({ Error: "Exercise not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res
        .status(400)
        .json({ Error: "Something's wrong with updating an exercise." });
    });
  // res.send("PUT using GET /exercises/:id");
});

/**
 * Delete an exercise based on ID with a DELETE request
 */
app.delete("/exercises/:_id", (req, res) => {
  exercises
    .deleteExercise(req.params._id)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        res.status(204).send();
      } else {
        res.status(404).json({ Error: "Exercise not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.send({ error: "Something's wrong with deleting an exercise." });
    });
  // res.send("DELETE using GET /exercises/:id");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
