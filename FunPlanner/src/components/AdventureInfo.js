import React, { Component } from 'react';
//const icon = require('../../public/icons/Hikes.png');

export default class AdventureInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  findIcon() {
    try {
      return require('../../public/icons/' + this.props.adventure.category + '.png');
    }
    catch (err) {
      return require('../../public/icons/Unknown.png');
    }
  }


  render() {
    return (
      <div>
        <h2>{this.props.adventure.title}</h2>
        <h4>{this.props.adventure.location}</h4>
        <h6>{this.props.adventure.category}</h6>
        <img
          src={this.findIcon()}
          className='adventureIcon'
        />
      </div>
    );
  }
}