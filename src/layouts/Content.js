import React, { Component } from "react";
import { Container, Flex, Box } from "../style/Container";

class Content extends Component {
  render() {
    return (
      <Container display="flex" flexWrap="wrap" flexDirection="row">
        <Flex p={2} m={2} justifyContent="center">
          <Box p={2} m={2} flex="1 1 auto" color="white" bg="black">
            Dirga
          </Box>
          <Box p={2} m={2} flex="1 1 auto" color="white" bg="black">
            Dirga
          </Box>
          <Box p={2} m={2} flex="1 1 auto" color="white" bg="black">
            Dirga
          </Box>
          <Box p={2} m={2} flex="1 1 auto" color="white" bg="black">
            Dirga
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default Content;
