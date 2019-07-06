import React from 'react';
import RoomInspector from './RoomInspector';
import RoomTypeInspector from './RoomTypeInspector';

const Inspector = ({type, data}) => {
  if (data && type) {
    return type === 'room' ? <RoomInspector data={data}/> : <RoomTypeInspector data={data}/>
  }
  return <div></div>
  

}

export default Inspector;