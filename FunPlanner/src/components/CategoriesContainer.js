import React, { Component } from 'react';
import CategoriesBar from './CategoriesBar';
import ListContainer from './ListContainer';

export default class CategoriesContainer extends Component {
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
    return (
      <div>
        <CategoriesBar
          onSelect={this.changeCategory}
          selectedCategory={this.state.selectedCategory}
        />
        <ListContainer
          adventures={this.props.adventures}
          category={this.state.selectedCategory}
        />
      </div>
    );
  }
}