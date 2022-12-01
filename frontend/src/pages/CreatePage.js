import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("lbs");
  const [date, setDate] = useState(new Date());

  const unitList = ["lbs", "kg", "miles", "m", "km"];

  const navigate = useNavigate();

  const createExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };

    const response = await fetch("/exercises", {
      method: "POST",
      body: JSON.stringify(newExercise),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 201) {
      alert("Exercise added successfully!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to add exercise. Status ${response.status}. ${errMessage.Error}`
      );
    }
    navigate("/");
  };

  return (
    <>
      <article>
        <h2>Add an exercise in the database</h2>
        <p>Instructions go here</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="name">Exercise name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="reps">Number of reps</label>
            <input
              type="number"
              id="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              required
            />
            <label htmlFor="weight">Amount of weight</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <label htmlFor="unit">Select unit</label>
            <select
              onChange={(e) => setUnit(e.target.value)}
              value={unit}
              id={unit}
              required
            >
              {unitList.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <label htmlFor="date">Date of exercise performed</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </fieldset>
          <button onClick={createExercise} id="submit">
            Save
          </button>
        </form>
      </article>
    </>
  );
};

export default CreatePage;
