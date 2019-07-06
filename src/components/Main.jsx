import React from 'react';
import RoomTypes from './RoomTypes/index.js';
import Rooms from './Rooms/index.js';
import Inspector from './Inspector/index.js';
const refocus = require('../helpers/refocus');
const token = require('../env.json').TOKEN;
const api = refocus.api(token);

class Main extends React.Component {
  constructor() {
    super();
    this.state = { displayData: null, displayType: null};
    this.openRoom = this.openRoom.bind(this);
    this.openRoomType = this.openRoomType.bind(this);
  }
  openRoom = (id) => async () => {
    const roomData = await api.getRoom(id);
    console.log(roomData.body.name);
    this.setState({displayType: 'room', displayData: roomData.body});
  };
  
  openRoomType = (id) => async () => {
    const roomTypeData = await api.getRoomType(id);
    console.log(roomTypeData.body.name);
    this.setState({displayType: 'roomType', displayData: roomTypeData.body});
  };

  render() {
    return (
      <div className="Main">
          <h3>RoomTypes:</h3>
          <RoomTypes openRoomType={this.openRoomType}/>
          <h3>Rooms:</h3>
          <Rooms openRoom={this.openRoom}/>
          <Inspector type={this.state.displayType} data={this.state.displayData}/>
      </div>
    );
  }
}


export default Main;
