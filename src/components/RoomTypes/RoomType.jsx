import React from 'react';
import './RoomType.css';

const RoomType = ({name, openRoomType}) => {
  return <div className='RoomType' onClick={()=>openRoomType()}>{name}</div>
};

export default RoomType;