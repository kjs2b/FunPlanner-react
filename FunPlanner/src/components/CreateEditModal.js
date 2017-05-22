import React, { Component } from 'react';
import Modal from 'react-modal';

export default class CreateEditModal extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <form className='addAdventureForm'>
      <div className='formItem'>
        <label className='formHeader' htmlFor='title'>
          Title:
        </label>
        <input
          id='title'
          placeholder='Adventure Title'
          type='text'
          autoComplete='off'
          value={this.state.title}
          onChange={this.handleChange}
        />
      </div>
      <div className='formItem'>
        <label className='formHeader' htmlFor='category'>
          Category:
        </label>
        <select
          id='category'
          value={this.state.category}
          onChange={this.handleChange}
        >
          <option value='Hikes'>Hikes</option>
          <option value='Restaurants'>Restaurants</option>
          <option value='Events'>Events</option>
          <option value='Destinations'>Destinations</option>
          <option value='Other'>Other</option>
        </select>
      </div>
      <div className='formItem'>
        <label className='formHeader' htmlFor='location'>
          Location:
        </label>
        <input
          id='location'
          placeholder='e.g., Inner SE'
          type='text'
          autoComplete='off'
          value={this.state.location}
          onChange={this.handleChange}
        />
      </div>
      <div className='formItem'>
        <label className='formHeader' htmlFor='link'>
          Link:
        </label>
        <input
          id='link'
          placeholder='Link to site'
          type='text'
          autoComplete='off'
          value={this.state.link}
          onChange={this.handleChange}
        />
      </div>
      <div className='formItem'>
        <label className='formHeader' htmlFor='priority'>
          Priority:
        </label>
        <select
          id='priority'
          value={this.state.priority}
          onChange={this.handleChange}
        >
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
      </div>
      <div className='formItem'>
        <label className='formHeader' htmlFor='notes'>
          Notes:
        </label>
        <textarea
          rows='4'
          cols='60'
          id='notes'
          placeholder='Notes...'
          type='text'
          autoComplete='off'
          value={this.state.notes}
          onChange={this.handleChange}
        />
      </div>
      <button
        className='formItem'
        onClick={this.handleSubmit}
      >
        Add Adventure!
      </button>
    </form>
    );
  }

}