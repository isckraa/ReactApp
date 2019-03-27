import React, { Component } from 'react';
import logo from './logo.svg';
import './Image.css';

class Image extends Component {
    render(){
        return (
            <div className="Image">
                <header className="Image-header">
                    <img src={logo} className="Image-logo" alt="logo"/>
                </header>
            </div>
        )
    }
}

export default Image;
