import React from "react";
import Select from "./Select";

export default function App() {
  const options = [
    { id: -1, name: "Todos" },
    { id: 1, name: "Ativos" },
    { id: 0, name: "Inativos" }
  ];

  return (
    <div>
      <br />
      <Select data={options} />
    </div>
  );
}
