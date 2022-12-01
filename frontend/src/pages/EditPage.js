import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditPage = ({ exercise }) => {
  const [name, setName] = useState(exercise.name);
  const [reps, setReps] = useState(exercise.reps);
  const [weight, setWeight] = useState(exercise.weight);
  const [unit, setUnit] = useState(exercise.unit);
  const [date, setDate] = useState(
    exercise.date.toLocaleString("en-US").slice(0, 10)
  );

  const unitList = ["lbs", "lbs", "miles", "m", "km"];

  const navigate = useNavigate();

  const editExercise = async () => {
    const response = await fetch(`/exercises/${exercise._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date: date,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Exercise edited successfully!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to edit exercise. Status ${response.status}. ${errMessage.Error}`
      );
    }
    navigate("/");
  };

  return (
    <>
      <article>
        <h2>Edit an exercise in the database</h2>
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
            />
            <label htmlFor="reps">Number of reps</label>
            <input
              type="number"
              id="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
            <label htmlFor="weight">Amount of weight</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <label htmlFor="unit">Select unit</label>
            <select
              onChange={(e) => setUnit(e.target.value)}
              value={unit}
              id={unit}
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
            />
          </fieldset>
          <button onClick={editExercise} id="submit">
            Save
          </button>
        </form>
      </article>
    </>
  );
};

export default EditPage;
