import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";

const Title = styled.h1`
  font-size: 1.5em;
  font-family: "Fira Code";
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
      <Flex>
        <Box width={1 / 2} px={2}>
          <Wrapper>
            <Title>Half Width</Title>
          </Wrapper>
        </Box>
        <Box width={1 / 2} px={2}>
          <Title>Half Width</Title>
        </Box>
      </Flex>
    );
  }
}

export default Container;
