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
        <div className="text-content">
          <h2>Add an exercise</h2>
          <p>
            Enter the exercise name, number of reps, and the amount of weight
            for the reps performed. Select unit option: pounds (lbs), kilograms
            (kg), miles, meters (m), and kilometers (km). And finally, select
            the date the exercise was performed. All fields must be entered.
          </p>
        </div>
        <form
          className="form-input"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="name" className="form-label">
            Exercise name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="reps" className="form-label">
            Number of reps
          </label>
          <input
            type="number"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            required
          />
          <label htmlFor="weight" className="form-label">
            Amount of weight
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <label htmlFor="unit" className="form-label">
            Select unit
          </label>
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
          <label htmlFor="date" className="form-label">
            Date of exercise performed
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button onClick={createExercise} id="submit">
            Save
          </button>
        </form>
      </article>
    </>
  );
};

export default CreatePage;
