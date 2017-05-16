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
      <div className='adventureInfo'>
        <h2>{this.props.adventure.title}</h2>
        <h4>{this.props.adventure.location}</h4>
        <h6>Priority: {this.props.adventure.priority}</h6>
        <img
          src={this.findIcon()}
          className='adventureIcon'
        />
        <br />
        <a href={this.props.adventure.link}>
          {this.props.adventure.link}
        </a>
        <p>Notes: {this.props.adventure.notes}</p>
      </div>
    );
  }
}