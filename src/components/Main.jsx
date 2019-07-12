import React from 'react';
import RoomTypes from './RoomTypes/index.js';
import Rooms from './Rooms/index.js';
import Inspector from './Inspector/index.js';
import './Main.css';
const refocus = require('../helpers/refocus');
const { token } = require('../env.json');
const api = refocus.api(token);
const ROOM = 'room';
const ROOM_TYPE = 'roomType';
const objectGetters = {};
objectGetters[ROOM] = api.getRoom;
objectGetters[ROOM_TYPE] = api.getRoomType;
class Main extends React.Component {
  constructor() {
    super();
    this.state = { displayData: null, displayType: null};
    this.openObject = this.openObject.bind(this);
    this.updateRoomValue = this.updateRoomValue.bind(this);
  }

  openObject = (type) => (id) => async () => {
    const data = await objectGetters[type](id);
    this.setState({displayType: type, displayData: data.body})
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

  updateSettings = (type) => (id) => (settingName) => async (value) => {
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
          <RoomTypes openRoomType={this.openObject('roomType')}/>
          <h3>Rooms:</h3>
          <Rooms openRoom={this.openObject('room')} updateRoomValue={this.updateRoomValue}/>
          <Inspector type={this.state.displayType} data={this.state.displayData} updateRoomValue={this.updateRoomValue} updateRoomTypeValue={this.updateRoomTypeValue}/>
      </div>
    );
  }
}


export default Main;
