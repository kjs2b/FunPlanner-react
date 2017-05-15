import React from 'react';

export default function ListItem (props) {
  return (
    <div
      className='listItem'
      onClick={props.onSelect.bind(null, props.item)}
    >
      <h3>{props.item.title}</h3>
      <p>{props.item.location}</p>
    </div>
  );
}