import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [exercises, setExercises] = useState([]);

  const retrieveExercises = async () => {
    const response = await fetch("/exercises");
    const exercises = await response.json();
    setExercises(exercises);
  };

  useEffect(() => {
    retrieveExercises();
  }, []);

  // console.log(exercises);

  return (
    <>
      <Table exercises={exercises} />
    </>
  );
};

export default HomePage;
