import React, { Component } from 'react';

export default class CategoriesBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedCategory: 'All'
    };

    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(cat) {
    this.setState({ selectedCategory: cat });
  }

  render() {
    const categories = ['All', 'Hikes', 'Restaurants', 'Attractions', 'Destinations']
    return (
      <ul className="categories">
        {categories.map((cat) => 
          <li
            style={cat === this.state.selectedCategory ? {color: 'red'} : null}
            key={cat}
            onClick={this.changeCategory.bind(null, cat)}
          >
            {cat}
          </li>
          )}
      </ul>
    );
  }
}