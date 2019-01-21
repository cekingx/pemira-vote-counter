import styled from "styled-components";
import { fontWeight, fontFamily, fontSize } from "styled-system";

export const Title = styled.div`
  text-align: center;
  ${fontFamily}
  ${fontWeight}
  ${fontSize}
`;

Title.propsTypes = {
  ...fontFamily.propsTypes,
  ...fontWeight.propsTypes,
  ...fontSize.propsTypes
};

Title.defaultProps = {
  fontFamily: "Open Sans",
  fontWeigt: "regular",
  fontSize: "1.5em"
};

Title.displayName = "Title";
