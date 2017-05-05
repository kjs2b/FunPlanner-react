import React, { Component } from 'react';

export default class AddAdventureForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      location: '',
      category: '',
      notes: '',
      priority: null,
      image: null,
      link: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const id = event.target.id;

    this.setState({
      [id]: value
    });
  }

  handleSubmit() {
    //this.setState
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
        <select>
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
        <select>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
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
      <input
        className='formItem'
        type='submit'
        value='Add Adventure!'
      />
    </form>
    );
  }
}