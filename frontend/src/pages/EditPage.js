import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import FormSelect from "../components/FormSelect";

const EditPage = ({ exercise }) => {
  const [name, setName] = useState(exercise.name);
  const [reps, setReps] = useState(exercise.reps);
  const [weight, setWeight] = useState(exercise.weight);
  const [unit, setUnit] = useState(exercise.unit);
  const [date, setDate] = useState(exercise.date);

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
          <FormField
            label="Exercise name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormField
            label="Number of reps"
            type="number"
            name="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
          <FormField
            label="Weight"
            type="number"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <FormSelect
            label="Unit"
            name="unit"
            value={unit}
            list={unitList}
            onChange={(e) => setUnit(e.target.value)}
          />
          <FormField
            label="Date"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={editExercise} id="submit">
            Save
          </button>
        </form>
      </article>
    </>
  );
};

export default EditPage;
