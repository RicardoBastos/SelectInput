import React from "react";
import { ContainerInput } from "./styles";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export default function Input({
  label,
  name,
  required,
  handleChange,
  handleClick,
  value,
  isVisbile
}) {
  return (
    <ContainerInput>
      <input
        type="text"
        required={required}
        readOnly
        name={name}
        placeholder=" "
        value={value}
        onClick={handleClick}
        onChange={(e) => handleChange(e.target.value)}
      />
      <label htmlFor={name}>{label}</label>
      {isVisbile ? (
        <button onClick={handleClick}>
          <MdArrowDropUp size={18} />
        </button>
      ) : (
        <button onClick={handleClick}>
          <MdArrowDropDown size={18} />
        </button>
      )}
    </ContainerInput>
  );
}
