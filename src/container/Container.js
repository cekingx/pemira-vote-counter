import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class Container extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    );
  }
}

export default Container;
