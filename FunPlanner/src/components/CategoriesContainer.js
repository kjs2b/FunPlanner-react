import React, { Component } from 'react';
import CategoriesBar from './CategoriesBar';
import ListContainer from './ListContainer';
import api from '../utils/api';

export default class CategoriesContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedCategory: 'All',
      adventures: []
    };
    this.changeCategory = this.changeCategory.bind(this);
  }

  componentDidMount () {
    api.fetchAdventures();
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