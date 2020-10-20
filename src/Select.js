import React, { useState } from "react";
import Input from "./Input";
import { ContainerSelect } from "./styles";

const Select = ({ data, onSelect }) => {
  const [isVisbile, setVisiblity] = useState(false);
  const [search, setSearch] = useState("Todos");

  const handleClick = () => {
    setVisiblity(!isVisbile);
  };

  const hideSuggestion = () => setVisiblity(false);

  return (
    <div>
      <Input
        name="search"
        label="Nome"
        type="text"
        isVisbile={isVisbile}
        autoComplete="off"
        value={search}
        handleClick={handleClick}
        handleChange={setSearch}
        handleCloseOption={() => setSearch("")}
        required
      />

      <ContainerSelect isVisible={isVisbile}>
        <ul>
          {data.map((item) => (
            <li
              onClick={() => {
                hideSuggestion();
                setSearch(item.name);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </ContainerSelect>
    </div>
  );
};

export default Select;
