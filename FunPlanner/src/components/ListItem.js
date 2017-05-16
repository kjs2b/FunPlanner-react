import React from 'react';

export default function ListItem (props) {
  return (
    <div
      className='listItem'
      onClick={props.onSelect.bind(null, props.item)}
    >
      <h5>{props.item.title}</h5>
      <h6>{props.item.location}</h6>
    </div>
  );
}