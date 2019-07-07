import React from 'react';
import RoomInspector from './RoomInspector';
import RoomTypeInspector from './RoomTypeInspector';

const Inspector = ({type, data, updateRoomValue, updateRoomTypeValue}) => {
  if (data && type) {
    return (
    <div className='Inspector'>
    { 
      type === 'room' ?
      <RoomInspector
        data={data}
        updateRoomValue={updateRoomValue(data.id)}/> :
      <RoomTypeInspector
        data={data}
        updateRoomTypeValue={updateRoomTypeValue(data.id)}/> 
    }
    </div>
    )
  }
  return null;
  

}

export default Inspector;