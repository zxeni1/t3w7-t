import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleButtonClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <>
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => this.handleButtonClick}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </>
        )
    }
}