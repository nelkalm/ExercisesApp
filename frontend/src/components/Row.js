import React from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

const Row = ({ exercise }) => {
  const { name, reps, weight, unit, date } = exercise;
  return (
    <tr>
      <td>{name}</td>
      <td>{reps}</td>
      <td>{weight}</td>
      <td>{unit}</td>
      <td>{date.toLocaleString("en-US").slice(0, 10)}</td>
      <td>
        <FaPencilAlt />
      </td>
      <td>
        <FaTrash />
      </td>
    </tr>
  );
};

export default Row;
