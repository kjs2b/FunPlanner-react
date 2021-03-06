import React, { Component } from 'react';
import CategoriesBar from './CategoriesBar';
import ListContainer from './ListContainer';
import axios from 'axios';
import AdventureInfo from './AdventureInfo';
import Modal from 'react-modal';
import CreateEditModal from './CreateEditModal';
const styles = {
  modalStyle: {
    overlay:{
    },
    content: {
      position: 'absolute',
      top: '10%',
      left: '25%',
      maxWidth: '50%',
      minWidth: '300px',
      maxHeight: '400px'
    }
  }
};

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
    this.editAdventure = this.editAdventure.bind(this);
    this.createAdventure = this.createAdventure.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openAddAdventureModal = this.openAddAdventureModal.bind(this);
  }

  componentDidMount () {
    this.getAdventures();
  }

  getAdventures(currAdvID) {
    axios.get('/api/adventures').then((res) => {
      this.setState({ adventures: res.data });
      if(currAdvID !== undefined) {
        //Trying to keep the current (displayed) adventure the same after editing!!
        //currAdv = this.state.adventures.filter(adv => adv.id === currAdvID);
        // this.setState({ currentAdventure: currAdvArray[0] });
      }
    });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  openAddAdventureModal() {
    this.setState({ currentAdventure: null });
    this.openModal();
  }

  changeCategory(cat) {
    this.setState({ selectedCategory: cat });
  }

  changeAdventure(adv) {
    this.setState({ currentAdventure: adv });
  }

  deleteAdventure() {
    axios.delete('/api/adventures/' + this.state.currentAdventure.id).then(res => {
      //this.setState({ currentAdventure: null })
      this.getAdventures();
    });
  }

  createAdventure(adventureData) {
    axios.post('/api/adventures', adventureData).then(res => {
      //this.getAdventures();
    });
  }

  editAdventure(adventureUpdates) {
    axios.post('/api/adventures/' + this.state.currentAdventure.id, adventureUpdates).then(res => {
      console.log('AdventureUpdates: ', adventureUpdates.id);
      //this.getAdventures(adventureUpdates.id);
    });
  }

  render() {
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
            selectedAdventureID={this.state.currentAdventure ? this.state.currentAdventure.id : -1}
            changeAdventure={this.changeAdventure}
          />
        </div>
        <div className='adventureInfo'>
          <button
            type='button'
            className='addAdventureButton'
            onClick={this.openAddAdventureModal}
          >
            Add a new adventure!
          </button>
          <AdventureInfo
            adventure={this.state.currentAdventure}
            deleteAdventure={this.deleteAdventure}
            openModal={this.openModal}
          />
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel='Create & Edit Modal'
          style={styles.modalStyle}
        >
          <center><h2>{this.state.currentAdventure ? 'Edit Adventure' : 'Add New Adventure'}</h2></center>
          <CreateEditModal 
            adventure={this.state.currentAdventure}
            submitChanges={this.editAdventure}
            createAdventure={this.createAdventure}
            closeModal={this.closeModal}
            formType={this.state.currentAdventure ? 'edit' : 'new'}
          />
        </Modal>
      </div>
    );
  }
}