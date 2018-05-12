import React, { Component } from 'react'
import logo from './logo.svg';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top App-logo" alt="logo" />
                    { this.props.title }
                    <span className="badge badge-pill badge-primary ml-2">{ this.props.count }</span>
                </a>
            </nav>
        )
    }
}

export default Navigation