import styled, { css } from "styled-components";

const GridItem = styled.div`
  grid-column: ${({ gridCol }) => gridCol};
  position: ${({ pos }) => (pos ? pos : "relative")};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
`;

export default GridItem