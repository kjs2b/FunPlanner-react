import React, { Component } from 'react';
import './App.css';

import CategoriesBar from './components/CategoriesBar';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <CategoriesBar />
      </div>
    );
  }
}

export default App;
