import React, { Component } from "react";
import styled from "styled-components";
import Text from "../../styles/Text";
export class Service extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <Container>
        <Title size="large">{title}</Title>
        <Description size="mini" color="secondary">
          {" "}
          {description}
        </Description>
      </Container>
    );
  }
}

export default Service;

//######## styles ################
const Container = styled.div`
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  display: flex;
  flex: 0 0 30%;
  margin: 0 10px;
  flex-direction: column;
  padding: 30px;
  margin-bottom: 15px;
  min-height: 220px;
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.3);
`;
const Title = styled(Text)`
  margin-bottom: 15px;
`;
const Description = styled(Text)`
  margin-bottom: 15px;
`;
