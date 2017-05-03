import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //Test data******
    const items = ['Restaurant 1', 'Hike 1', 'Adventure 3', 'Destination 2'];
    //******Test data
    return (
      <div>
        {items.map((item) =>
          <ListItem item={item} key={item} />
        )}
      </div>
    );
  }
}