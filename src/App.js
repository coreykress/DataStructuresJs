import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BinarySearchTree from './Util/Tree/BinarySearchTree';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.tree = new BinarySearchTree();
        let values = [
            10,
            4,
            6,
            13,
            12,
            7,
            88,
            23,
            8
        ];
        values.forEach(function (value) {
            this.tree.insert(value);
        }.bind(this));
        console.log(this.tree.printTree());
        console.log(this.tree.search(4));
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
