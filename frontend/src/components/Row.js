import React from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

const Row = ({ exercise, handleEdit, handleDelete }) => {
  const { name, reps, weight, unit, date, _id } = exercise;
  return (
    <tr>
      <td>{name}</td>
      <td>{reps}</td>
      <td>{weight}</td>
      <td>{unit}</td>
      <td>{date.toLocaleString("en-US").slice(0, 10)}</td>
      <td>
        <FaPencilAlt
          onClick={() => {
            handleEdit(exercise);
          }}
        />
      </td>
      <td>
        <FaTrash
          onClick={() => {
            handleDelete(_id);
          }}
        />
      </td>
    </tr>
  );
};

export default Row;
