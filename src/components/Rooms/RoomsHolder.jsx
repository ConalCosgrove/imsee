import React from 'react';
import Room from './Room';
const RoomsHolder = ({roomsList, openRoom}) => {
  if (roomsList) {
    return <div className='Holder'>{ renderRooms(roomsList,openRoom) }</div>
  } else {
    return <div><h1>Loading Rooms</h1></div>
  }
};

const renderRooms = (roomsList, openRoom) => {
  const sorted = roomsList.sort((roomA, roomB) => roomA.id - roomB.id );
  return sorted.map((room) => {
    return <Room id={room.id} name={room.name} isActive={room.active} openRoom={openRoom(room.id)}/>
  })
}

export default RoomsHolder;