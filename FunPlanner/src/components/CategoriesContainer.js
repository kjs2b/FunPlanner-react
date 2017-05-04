import React, { Component } from 'react';
import CategoriesBar from './CategoriesBar';
import ListContainer from './ListContainer';
//import api from '../utils/api';
import adventures from '../data/adventures';

export default class CategoriesContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedCategory: 'All',
      adventures: adventures
    };
    this.changeCategory = this.changeCategory.bind(this);
  }

  componentDidMount () {
    //Uncomment this when the CORS localhost issue is fixed or when the 
    //server is deployed (also uncomment import api:
    //api.fetchAdventures();
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
          adventures={this.state.adventures}
          category={this.state.selectedCategory}
        />
      </div>
    );
  }
}