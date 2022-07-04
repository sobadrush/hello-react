import './Welcome.css';
import logo from '../../logo.svg';
// import React from 'react';

function template() {
    return (
        <header className="App-header">
            <div className="myTitle">
                <h1>我是 Welcome 元件</h1>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 style={{ color: 'red' }}>Author: Roger</h1>
            <p>
                Edit <code style={{ color: 'orange' }}>src/App.js</code> &nbsp;
                save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
        </header>
    );
}

export default template;
