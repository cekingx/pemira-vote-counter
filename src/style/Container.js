import styled from "styled-components";
import {
  space,
  width,
  color,
  flex,
  flexWrap,
  flexDirection,
  alignContent,
  justifyContent,
  justifyItems,
  backgroundImage,
  backgroundSize
} from "styled-system";

export const Box = styled.div`
  box-sizing: border-box;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${backgroundImage}
  ${backgroundSize}
  ${justifyContent}
  ${justifyItems}
`;

Box.propsTypes = {
  ...space.propsTypes,
  ...width.propsTypes,
  ...color.propsTypes,
  ...flex.propsTypes,
  ...justifyContent,
  ...justifyItems,
  ...backgroundImage,
  ...backgroundSize
};

Box.displayName = "Box";

export const Flex = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${justifyContent}
  ${alignContent}
`;

Flex.propsTypes = {
  ...flexWrap.propsTypes,
  ...flexDirection.propsTypes,
  ...justifyContent.propsTypes,
  ...alignContent.propsTypes
};

Flex.displayName = "Flex";
