import React, { Component } from 'react';
import { TestDemo } from '../../components';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TestDemo />
        <h1> content from container </h1>
      </div>
    );
  }
}

export default App;
