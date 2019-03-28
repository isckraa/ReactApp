import React, { Component } from 'react';
import udemy from '../../udemy.png';
import './Image.css';

class Image extends Component {
    render(){
        return (
            <div className="Image">
                <header className="Image-header">
                    <img src={udemy} className="Image-logo" alt="logo"/>
                    <p>Learn React with <a className="App-link" href="https://www.udemy.com/react-le-guide-complet/learn/v4/t/lecture/12210290?start=0" target="_blank" rel="noopener noreferrer">Udemy</a>
                    </p>
                </header>
            </div>
        )
    }
}

export default Image;
