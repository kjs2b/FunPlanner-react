import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const listedAdventures = this.props.category === 'All' ?
      this.props.adventures : this.props.adventures.filter((adv) =>
        adv.category === this.props.category);
    return (
      <div className='listContainer'>
        {listedAdventures.map((adv) =>
            <ListItem
              item={adv}
              key={adv.id}
              onSelect={this.props.changeAdventure}
              isSelected={this.props.selectedAdventureID === adv.id}
            />
        )}
      </div>
    );
  }
}