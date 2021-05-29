import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import Resume from '../pages/Resume'
import styled from "styled-components";


export default class Layout extends Component {
    static propTypes = {
      
    }

    render() {
        return (
            <Container>
                <BrowserRouter>
                <Route exact path='/' component={Resume} />
                </BrowserRouter>
            </Container>
        )
    }
}

//############## Styles#################


const Container = styled.div `
    overflow: hidden;
    height: 100%;
    z-index: 999;
    position: relative;
    margin: 15px;
`;
