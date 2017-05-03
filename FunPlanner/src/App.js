import React, { Component } from 'react';
import './App.css';

import ListContainer from './components/ListContainer';
import CategoriesBar from './components/CategoriesBar';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <CategoriesBar />
        <ListContainer />
      </div>
    );
  }
}

export default App;
