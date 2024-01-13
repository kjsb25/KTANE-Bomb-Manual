import React from 'react'
import logo from './assets/img/logo-transparent.png'
import './App.css'
import BombSolver from './components/BombSolver'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Bomb Manual</h1>
            </header>
            <BombSolver />
        </div>
    )
}

export default App
