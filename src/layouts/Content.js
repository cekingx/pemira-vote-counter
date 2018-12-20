import React, { Component } from "react";
import { Box, Flex } from "../style/Container";
import Cards from "../components/Cards";
import { Title } from "../style/Text";

const data = [
  { nama: "Prastha Nugraha", img: "./asset/1.jpg" },
  { nama: "Yonatan Adiwinata", img: "./asset/2.jpg" },
  { nama: "Trio Putra", img: "./asset/3.jpg" },
  { nama: "Mahardika Adiningrat", img: "./asset/4.jpg" }
];

class Content extends Component {
  render() {
    return (
      <Flex flexDirection="column" flexWrap="wrap">
        <Flex
          flexDirection="row"
          flex="1 1 auto"
          p={1}
          mb={1}
          justifyContent="center"
        >
          <Box justifyContent="center">
            <Title fontFamily="Viga" fontSize="3em">
              PEMIRA HMTI 2018
            </Title>
            <Title>Bersinergi Membangun TI Berkarakter</Title>
          </Box>
        </Flex>
        <Flex flexDirection="row" b flex="1 1 auto" p={1} mt={1}>
          {data.map((item, index) => (
            <Box flex="1 1 auto" py={1} m="1em" key={index}>
              <Cards nama={item.nama} src={item.img} />
            </Box>
          ))}
        </Flex>
      </Flex>
    );
  }
}

export default Content;
