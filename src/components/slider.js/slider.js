import React, { Component } from "react";
import SliderItem from "./SliderItem";
import styled from "styled-components";
export class Slider extends Component {
  render() {
    return (
      <Container>
        <SliderItem plus content="Years Experience" number="100"></SliderItem>
        <SliderItem plus content="Years Experience" number="100"></SliderItem>
        <SliderItem plus content="Years Experience" number="100"></SliderItem>
        <SliderItem plus content="Years Experience" number="100"></SliderItem>
        <SliderItem plus content="Years Experience" number="100"></SliderItem>
      </Container>
    );
  }
}

//############## Styles ###################
const Container = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;

`;

export default Slider;
