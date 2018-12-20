import styled from "styled-components";
import {
  space,
  width,
  height,
  color,
  flex,
  flexWrap,
  flexDirection,
  alignContent,
  justifyContent,
  justifyItems,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  borders,
  borderColor,
  borderRadius,
  boxShadow
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

export const Card = styled(Box)(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat
);

Card.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes
};

Card.displayName = "Card";

export const Image = styled(Box)(
  {
    maxWidth: "100%",
    height: "auto"
  },
  height,
  borderRadius
);

Image.propTypes = {
  ...height.propTypes,
  ...borderRadius.propTypes
};

Image.defaultProps = {
  as: "img",
  m: 0
};
