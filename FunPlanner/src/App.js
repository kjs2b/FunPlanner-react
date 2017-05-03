import React, { Component } from 'react';
import './App.css';

import CategoriesContainer from './components/CategoriesContainer';
import adventures from './data/adventures';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <CategoriesContainer adventures={adventures} />
      </div>
    );
  }
}

export default App;
