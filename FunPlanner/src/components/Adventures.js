import React, { Component } from 'react';
import CategoriesBar from './CategoriesBar';
import ListContainer from './ListContainer';
import api from '../utils/api';
import adventureData from '../data/adventureData';

export default class Adventures extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedCategory: 'All',
      adventures: adventureData,
      currentAdventure: null
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.changeAdventure = this.changeAdventure.bind(this);
  }

  componentDidMount () {
    api.fetchAdventures();
  }

  changeCategory(cat) {
    this.setState({ selectedCategory: cat });
  }

  changeAdventure(adv) {
    this.setState({ currentAdventure: adv });
  }

  render() {
    return (
      <div className='categoriesContainer'>
        <CategoriesBar
          onSelect={this.changeCategory}
          selectedCategory={this.state.selectedCategory}
        />
        <ListContainer
          adventures={this.state.adventures}
          category={this.state.selectedCategory}
          changeAdventure={this.changeAdventure}
        />
      </div>
    );
  }
}