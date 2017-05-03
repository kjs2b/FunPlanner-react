import React, { Component } from 'react';

export default class CategoriesBar extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const categories = ['All', 'Hikes', 'Restaurants', 'Attractions', 'Destinations']
    return (
      <ul className="categories">
        {categories.map((cat) => 
          <li
            style={cat === this.props.selectedCategory ? {color: 'red'} : null}
            key={cat}
            onClick={this.props.onSelect.bind(null, cat)}
          >
            {cat}
          </li>
          )}
      </ul>
    );
  }
}