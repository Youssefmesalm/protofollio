
import styled from "styled-components";
const Text = styled.div`
  font-size: ${({ theme, size }) =>
    size ? theme.fonts.sizes[size] : theme.fonts.sizes.base};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.fonts.weights[weight] : theme.fonts.weights.base};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.Text};
`;

export default Text