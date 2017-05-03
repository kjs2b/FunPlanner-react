import React from 'react';

export default function ListItem (props) {
  return (
    <div className='listItem'>
      <p>{props.item}</p>
    </div>
  );
}