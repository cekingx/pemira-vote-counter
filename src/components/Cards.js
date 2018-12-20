import React, { Component } from "react";
import { Flex, Box, Card, Image } from "../style/Container";
import { Button } from "../style/Button";
import { Title } from "../style/Text";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  DecrementItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  render() {
    return (
      <Flex flexDirection="column">
        <Card
          bg="#f6f6ff"
          borderRadius="10px"
          boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
        >
          <Box p={2} m={2} flex="1 1 auto">
            <Title fontWeight="bold">{this.props.nama}</Title>
          </Box>
          <Box p={2} m={2} flex="1 1 auto">
            <Image src={this.props.src} borderRadius="10px" />
          </Box>
          <Box justifyContent="center">
            <Title>{this.state.clicks}</Title>
          </Box>
          <Flex flexDirection="row" flexWrap="wrap" m={2} p={2}>
            <Box flex="1 1 auto" mr="0.25rem">
              <Button onClick={this.IncrementItem}> + </Button>
            </Box>
            <Box flex="1 1 auto" ml="0.25rem">
              <Button onClick={this.DecrementItem}> - </Button>
            </Box>
          </Flex>
        </Card>
      </Flex>
    );
  }
}

export default Cards;
