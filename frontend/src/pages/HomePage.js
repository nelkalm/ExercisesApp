import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const HomePage = ({ setExercise }) => {
  const [exercises, setExercises] = useState([]);

  // Retrieve a list of exercises
  const retrieveExercises = async () => {
    const response = await fetch("/exercises");
    const exercises = await response.json();
    setExercises(exercises);
  };

  useEffect(() => {
    retrieveExercises();
  }, []);

  // Edit an exercise
  const navigate = useNavigate();

  const editExercise = async (exercise) => {
    setExercise(exercise);
    navigate("/edit");
  };

  // Delete an exercise
  const deleteExercise = async (_id) => {
    const response = await fetch(`/exercises/${_id}`, { method: "DELETE" });
    if (response.status === 204) {
      const getResponse = await fetch("/exercises");
      const exercises = await getResponse.json();
      setExercises(exercises);
    } else {
      console.error(
        `Failed to delete the exercise with _id = ${_id}, status code = ${response.status}`
      );
    }
  };

  return (
    <>
      <Table
        exercises={exercises}
        handleEdit={editExercise}
        handleDelete={deleteExercise}
      />
    </>
  );
};

export default HomePage;
