import styled from "styled-components";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1rem;
  font-family: "Fira Code";
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 10px;
`;
