import React, { Component } from "react";
import { Flex, Box } from "../style/Container";
import { Button } from "../style/Button";
import { Title } from "../style/Text";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <Flex flexDirection="column">
        <Box p={2} m={2} flex="1 1 auto">
          <Title>{this.props.nama}</Title>
        </Box>
        <Box justifyContent="center">
          <Title>{this.state.clicks}</Title>
        </Box>
        <Flex flexDirection="row" flexWrap="wrap">
          <Box m={1} flex="1 1 auto">
            <Button onClick={this.IncrementItem}> + </Button>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default Card;
