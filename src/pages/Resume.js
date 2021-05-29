import React, { Component } from "react";
//import PropTypes from 'prop-types';
// images
import Banner from "../components/banner/Banner";
import avater from "../Images/avater.jpeg";
import bg from "../Images/bg.jpg";
import styled from "styled-components";
import Avatar from "../styles/Avatar";
import Text from "../styles/Text";
import GridItem from "../styles/GridItem";
import Slider from "../components/slider.js/slider";
import Service from "../components/Service/Service";


export default class Resume extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <GridItem gridCol="1/2" width="290px">
          <Header>
            <Avatar>
              <img src={avater} alt="Yousuf Mesalm" />
            </Avatar>
            <Name weight="base" size="xlarge">
              Yousuf Mesalm
            </Name>
            <Job size="mini">
              Full Stack Web Developer,
              <br />
              UI/UX Desginer,
              <br />
              Dentist
            </Job>
          </Header>
        </GridItem>
        <GridItem gridCol="2/3">
          <Background>
            <div className="overly"></div>
          </Background>
          <StyledContainer>
            <Banner />
          </StyledContainer>
          <StyledContainer>
            <Slider />
          </StyledContainer>
          <StyledContainer>
            <Text size="large">My Services</Text>
          </StyledContainer>
          <ServiceList>
            {Serviceslist.map(({ name, description }, i) => (
              <Service key={i} title={name} description={description}></Service>
            ))}
          </ServiceList>
        </GridItem>
      </Container>
    );
  }
}

const Serviceslist = [
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
  {
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
];
//####################### Style #################
const StyledContainer = styled.div`
  padding: 30px 30px 0;
  position: relative;
`;
const ServiceList = styled(StyledContainer)` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 -15px;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  overflow: hidden;
  background-position: center;
  background-image: url(${bg});
  height: 400px;
  .overly {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(30, 30, 40, 0.93)),
      color-stop(70%, rgba(30, 30, 40, 0.96)),
      color-stop(80%, rgba(30, 30, 40, 0.99)),
      to(#1e1e28)
    );
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 290px;
  max-width: 1440px;
  width: 100%;
  height: calc(100%-30px);
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.div`
  padding: 30px;
  height: 235px;
  width: 100%;
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  text-align: center;
`;

const Name = styled(Text)`
  transition: color 0.5s ease-in-out;
  padding-top: 10px;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
const Job = styled(Text)`
  padding-top: 10px;
  opacity: 0.65;
  letter-spacing: 1px;
`;
