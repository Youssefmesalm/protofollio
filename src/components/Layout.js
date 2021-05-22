import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import Resume from '../pages/Resume'
import "./layout.scss"
export default class Layout extends Component {
    static propTypes = {
      
    }

    render() {
        return (
            <div className="wrapper">
                <BrowserRouter>
                <Route exact path='/' component={Resume} />
                </BrowserRouter>
            </div>
        )
    }
}
