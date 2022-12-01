import React from "react";
import TableHead from "../components/TableHead";
import Row from "../components/Row";

const Table = ({ exercises }) => {
  return (
    <table>
      <TableHead />
      <tbody>
        {exercises.map((exercise, i) => (
          <Row key={i} exercise={exercise} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
