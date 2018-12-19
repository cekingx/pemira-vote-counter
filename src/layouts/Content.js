import React, { Component } from "react";
import { Box, Flex } from "../style/Container";
import Card from "../components/Card";
import { Title } from "../style/Text";

const data = [
  "Prastha Nugraha",
  "Yonatan Adiwinata",
  "Trio Putra",
  "Mahardhika Adiningrat"
];

class Content extends Component {
  render() {
    return (
      <Flex flexDirection="column" flexWrap="wrap">
        <Flex
          flexDirection="row"
          flex="1 1 auto"
          p={3}
          m={2}
          justifyContent="center"
        >
          <Box justifyContent="center">
            <Title>PEMIRA HMTI 2018</Title>
            <Title>Besinergi Membangun TI Berintegritas</Title>
          </Box>
        </Flex>
        <Flex flexDirection="row" b flex="1 1 auto" p={3} m={2}>
          {data.map((item, index) => (
            <Box flex="1 1 auto" py={3} m="1em" key={index}>
              <Card nama={item} />
            </Box>
          ))}
        </Flex>
      </Flex>
    );
  }
}

export default Content;
