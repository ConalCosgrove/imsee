import React from 'react';
import RoomTypes from './RoomTypes/index.js';
import Rooms from './Rooms/index.js';
import Inspector from './Inspector/index.js';
import './Main.css';
const refocus = require('../helpers/refocus');
const { token } = require('../env.json');
const api = refocus.api(token);

class Main extends React.Component {
  constructor() {
    super();
    this.state = { displayData: null, displayType: null};
    this.openRoom = this.openRoom.bind(this);
    this.openRoomType = this.openRoomType.bind(this);
    this.updateRoomValue = this.updateRoomValue.bind(this);
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

  updateRoomValue = (id) => (settingName) => async (value) => {
    const updateObject = {};
    try{
      updateObject[settingName] = JSON.parse(value);
    } catch(error) {
      updateObject[settingName] = value;
    }
    const roomSettingData = await api.updateRoom(id,updateObject);
    this.setState({displayType: 'room', displayData: roomSettingData.body});
  }

  updateRoomTypeValue = (id) => (settingName) => async (value) => {
    const updateObject = {};
    try{
      updateObject[settingName] = JSON.parse(value);
    } catch(error) {
      updateObject[settingName] = value;
    }
    const roomSettingData = await api.updateRoomType(id,updateObject);
    this.setState({displayType: 'roomType', displayData: roomSettingData.body});
  }

  render() {
    return (
      <div className="Main">
          <h3>RoomTypes:</h3>
          <RoomTypes openRoomType={this.openRoomType}/>
          <h3>Rooms:</h3>
          <Rooms openRoom={this.openRoom} updateRoomValue={this.updateRoomValue}/>
          <Inspector type={this.state.displayType} data={this.state.displayData} updateRoomValue={this.updateRoomValue} updateRoomTypeValue={this.updateRoomTypeValue}/>
      </div>
    );
  }
}


export default Main;
