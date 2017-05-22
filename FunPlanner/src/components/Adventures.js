import React, { Component } from 'react';
import CategoriesBar from './CategoriesBar';
import ListContainer from './ListContainer';
//import api from '../utils/api';
import axios from 'axios';
//import adventureData from '../data/adventureData';
import AdventureInfo from './AdventureInfo';
import Modal from 'react-modal';
import CreateEditModal from './CreateEditModal';

export default class Adventures extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedCategory: 'All',
      adventures: [],
      currentAdventure: null,
      modalIsOpen: false
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.changeAdventure = this.changeAdventure.bind(this);
    this.deleteAdventure = this.deleteAdventure.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount () {
    this.getAdventures();
  }

  getAdventures() {
    axios.get('/api/adventures').then((res) => {
      this.setState({ adventures: res.data });
    });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  changeCategory(cat) {
    this.setState({ selectedCategory: cat });
  }

  changeAdventure(adv) {
    this.setState({ currentAdventure: adv });
  }

  deleteAdventure() {
    axios.delete('/api/adventures/' + this.state.currentAdventure.id).then(res => {
      this.setState({ currentAdventure: null })
      this.getAdventures();
    });
  }

  render() {
    if (this.state.currentAdventure === null) {
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
    } else {
      return (
        <div className='adventures'>
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
          <div className='adventureInfo'>
            <AdventureInfo
              adventure={this.state.currentAdventure}
              deleteAdventure={this.deleteAdventure}
              openModal={this.openModal}
            />
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            contentLabel='Create & Edit Modal'
          >
            <center><h2>Edit Adventure</h2></center>
            <CreateEditModal adventure={this.state.currentAdventure}/>
          </Modal>
        </div>
      );
    }
  }
}