import React, { Component } from 'react';
import AddAdventureForm from './AddAdventureForm';

export default class AddAdventureContainer extends Component {
  render() {
    return (
      <div className='addAdventureContainer'>
        <h1> Add an Adventure!</h1>
        <AddAdventureForm />
      </div>
    );
  }
}