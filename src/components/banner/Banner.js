import React, { Component } from "react";
//import PropTypes from "prop-types";
import bannerImg from "../../Images/banner.png";
import bg from "../../Images/bg.jpg";
import Typer from "../typer/Typer";
import styled from "styled-components";
import Text from '../../styles/Text'

class Banner extends Component {
  static propTypes = {};

  render() {
    return (
      <StyledBanner>
        <Overly>
          <div className="info">
            <Title size="larger" weight="bolder">
              Discover My Amazing <br /> Art Space !
            </Title>
            <div className="description">
              <Typer
                startTag={`I build `}
                dataText={[
                  "Amazing Web Interface",
                  "Creative Mobile Application",
                  "Stylish Animated Web App",
                ]}
                typeSpeed={100}
                deleteSpeed={50}
              />
            </div>
            <div className="btn">
              <Button>Explore Now</Button>
              <Button>Hire Me</Button>
            </div>
          </div>
          <Image>
            <img src={bannerImg} alt="banner" />
          </Image>
        </Overly>
      </StyledBanner>
    );
  }
}


//########### Style ################# 
const Button= styled.button ` 
  padding: 0 35px;
  margin-right: 20px;
  border: none;
  background-color: ${({theme})=>theme.colors.primary};
  color:${({theme})=>theme.colors.text};
  font-size: ${({theme})=>theme.fonts.sizes.base};
  border-radius: 3px;
  height: 45px;
  transition: 0.5s ease-in-out;
  &:hover{
    opacity: 0.5;
    background-color: darkgreen;
    transform: translateY(-4px);
    cursor: pointer;
  }
`
const Title = styled(Text) ` 
  margin-bottom: 15px;
`
const Image = styled.div`
  width: 320px;
  position: absolute;
  right: 30px;
  bottom: 0;
  
  img{
    width: 320px;
  }
`
const Overly = styled.div`
  background: linear-gradient(
    rgba(45, 45, 58, 0.9) 10%,
    rgba(45, 45, 58, 0.7) 50%,
    rgba(45, 45, 53, 0.7) 70%
  );
  position: relative;
  display: flex;
  padding: 60px;
  .description {
    margin-bottom: 25px;
  }
`;
const StyledBanner = styled.div ` 
    overflow:hidden;
    width: 100%;
    position: relative;
    top: 0;
    background: url(${bg});
    background-position: 30%;
`

export default Banner;
