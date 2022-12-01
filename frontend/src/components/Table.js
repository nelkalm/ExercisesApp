import React from "react";
import TableHead from "../components/TableHead";
import Row from "../components/Row";

const Table = ({ exercises, handleEdit, handleDelete }) => {
  return (
    <table>
      <TableHead />
      <tbody>
        {exercises.map((exercise, i) => (
          <Row
            key={i}
            exercise={exercise}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
