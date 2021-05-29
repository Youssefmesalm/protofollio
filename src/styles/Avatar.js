import styled from "styled-components";

const Avatar = styled.div`
  width: ${({ width }) => (width ? width : "90px")};
  height: ${({ width }) => (width ? width : "90px")};
  position: ${({ pos }) => (pos ? pos : "relative")};
  margin: 0 auto;
  border-radius: 50%;
  img {
    width: 100%;
    border-radius: 50%;
    z-index: 9999;
  }
`;

export default Avatar;