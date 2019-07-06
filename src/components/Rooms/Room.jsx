import React from 'react';
import './Room.css';

const Room = ({id, name, isActive, openRoom}) => {
  return <div className={`Room ${isActive ? 'Active': ''}`} onClick={()=> openRoom()}>{id}.</div>
};

export default Room;