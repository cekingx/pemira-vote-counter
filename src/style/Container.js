import styled from "styled-components";
import {
  display,
  flexWrap,
  flexDirection,
  space,
  color,
  justifyContent,
  flex
} from "styled-system";

export const Container = styled.div`
  ${display}
  ${flexWrap}
  ${flexDirection}
  padding: 1em;
  margin: 1em;
`;

export const Flex = styled.div`
  ${space}
  ${justifyContent}
`;

export const Box = styled.div`
  ${color}
  ${flex}
  ${space}
`;
