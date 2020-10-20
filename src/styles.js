import styled from "styled-components/macro";

export const ContainerSelect = styled.div`
  visibility: ${({ isVisible }) =>
    isVisible ? "show !important" : "hidden !important"};

  ul {
    padding: 0;
    margin: 0;

    li {
      text-decoration: none;
      padding: 5px 10px;
      list-style: none;
      min-height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-top: 0;
      cursor: pointer;

      :hover {
        background-color: #e1e3e5;
        border-color: #d3d5d7;
      }
    }
  }
`;

export const ContainerInput = styled.div`
  outline: none;
  border: 0;
  border: 1px solid #ccc;
  font-size: 14px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  position: relative;

  label {
    pointer-events: none;
    position: absolute;
    top: -20px;
    margin-left: -10px;
    transition: all 0.3s ease-out;
  }

  input {
    flex: 1;
    color: #333;
    outline: none;
    border: 0;
    font-size: 12px;
    cursor: pointer;
  }

  button {
    background: transparent;
    border: 0;
    color: #999;
    outline: none;
    cursor: pointer;
  }
`;
