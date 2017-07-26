import React, { Component } from 'react';

export default class CategoriesBar extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const categories = ['All', 'Hikes', 'Restaurants', 'Events', 'Destinations']
    return (
      <ul className="categoriesBar">
        {categories.map((cat) => 
          <li
            style={cat === this.props.selectedCategory ? {color: '#93D156'} : null}
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