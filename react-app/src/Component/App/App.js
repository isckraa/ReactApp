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

    handleClick = () => {
        const famille = { ...this.state.famille }
        famille.membre1.age += 1
        famille.membre2.age += 1
        this.setState( { famille })
    }

    render() {

        const { famille } = this.state

        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <Membre nom={ famille.membre1.nom } age={ famille.membre1.age }/>
                    <Membre nom={ famille.membre2.nom } age={ famille.membre2.age }>
                        Je suis la soeur de Nelu
                    </Membre>
                    <button onClick = {this.handleClick}>
                        Vieillir
                    </button>
                </header>
            </div>
        )
    }
}

export default App;
