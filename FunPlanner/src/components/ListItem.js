import React from 'react';

export default function ListItem (props) {
  return (
    <div
      className={props.isSelected ? 'listItem activeListItem' : 'listItem'}
      onClick={props.onSelect.bind(null, props.item)}
    >
      <h5 className='listItemTitle'>{props.item.title}</h5>
      <h6 className='listItemLocation'>{props.item.location}</h6>
    </div>
  );
}