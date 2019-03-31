import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Membre from '../Membre/Membre';

const famille = {
    membre1 : {
        nom : 'nelu',
        age : 21
    },
    membre2 : {
        nom : 'gabriela',
        age : 8
    }
}

class App extends Component {
    
    state = { famille }

    render() {

        const { famille } = this.state

        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <Membre nom={ famille.membre1.nom } age={ famille.membre1.age }/>
                    <Membre nom={ famille.membre2.nom } age={ famille.membre2.age }>
                        Je suis la soeur de Nelu
                    </Membre>
                </header>
            </div>
        )
    }
}

export default App;
