import React, { Component } from "react";
import styled from "styled-components";

const Judul = styled.p`
  font-size: 1 rem;
  font-family: "Viga", sans-serif;
  text-align: center;
  color: palevioletred;
`;

class Title extends Component {
  render() {
    return <Judul>{this.props.text}</Judul>;
  }
}

export default Title;
