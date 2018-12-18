import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";
import { flex, space, color, justifySelf } from "styled-system";

import { Button } from "../styled/Button";
import Title from "../components/Title";

// const Title = styled.h1`
//   font-size: 1 rem;
//   font-family: sans-serif;
//   text-align: center;
//   color: palevioletred;
// `;

// Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;
const Box = styled.div`
  ${color}
  ${flex}
  ${space}
  ${justifySelf}
`;

class Container extends Component {
  render() {
    return (
      // <Flex>
      //   <Box width={1 / 2} px={2}>
      //     <Wrapper>
      //       <Title>Half Width</Title>
      //     </Wrapper>
      //   </Box>
      //   <Box width={1 / 2} px={2}>
      //     <Title>Half Width</Title>
      //   </Box>
      // </Flex>
      <div>
        <Flex>
          <Box flex="3 1 500px" p={2} bg="magenta">
            <Button>Tombol</Button>
          </Box>
          <Box flex="1 3 500px" p={2} bg="green">
            <Button primary>Primary</Button>
          </Box>
        </Flex>
        <Flex>
          <Box flex="0 0 500px" p={2} bg="black" />
          <Box flex="0 0 500px" p={2} bg="blue" />
        </Flex>
        <Flex justifyContent="center">
          <Box flex="0 0 700px" my={2} p={2} bg="red" />
        </Flex>
      </div>
    );
  }
}

export default Container;
