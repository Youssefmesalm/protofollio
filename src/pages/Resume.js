import React, { Component } from 'react'
//import PropTypes from 'prop-types';
// images
import Banner from '../components/banner/Banner';
import avater from '../Images/avater.jpeg';
import styled from 'styled-components'

export default class Resume extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <Container>
                
                <div className="side">
                    <div className="side__header">
                        <div className="side__header__avater">
                            <img src={avater} alt="" />
                        </div>
                        <div className="side__header__name">Yousuf Mesalm</div>
                        <div className="side__header__jobtitle">Full Stack Web Developer,<br/>
                            UI/UX Desginer,<br/> Dentist           
                        </div>
                    </div>
                
                </div>
                <div className="content">
                    <div className="content__bg">
                        <div className="content__bg__overly"></div>
                    </div>
                    <div className="content__header content__row">
                        <Banner/>
                    </div>                
                </div>
            </Container>
        )
    }
}


//####################### Style #################

const Container = styled.div `
    grid-template-columns: 290px ;
    max-width: 1440px;
    width: 100%;
    height: calc(100vh-30px);
    background-color: ${({theme})=> theme.colors.background};
    
    `
const Sidebar= styled.div `
    
`