import React from 'react';

export default function ListItem (props) {
  return (
    <div className='listItem'>
      <h3>{props.item.title}</h3>
      <p>{props.item.location}</p>
    </div>
  );
}