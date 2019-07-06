import React from 'react';
import RoomType from './RoomType';
import './RoomType.css';
const RoomTypesHolder = ({roomTypeList, openRoomType}) => {
  if (roomTypeList) {
    return <div className={'Holder'}>{ renderRoomTypes(roomTypeList, openRoomType) }</div>
  } else {
    return <div><h1>Loading RoomTypes</h1></div>
  }
};

const renderRoomTypes = (roomTypeList, openRoomType) => {
  return roomTypeList.map((roomType) => {
    return <RoomType name={roomType.name} openRoomType={openRoomType(roomType.id)} />
  })
}

export default RoomTypesHolder;