import React from 'react';
import Table from './Table';
import './Inspector.css';
const settings = require('../../env.json');
const exclude = new Map();
exclude.set('settings');
if (settings && settings.toExclude) {
  const { toExclude } = settings;
  toExclude.forEach((item) => exclude.set(item, true));
}

const buildTable = (data, updateValue) => {
  return <Table data={data} updateValue={updateValue} exclude={ exclude }/>;
}

const pickTable = (data, updateRoomValue, toShow) => {
  switch (toShow) {
    case 0:
      return buildTable(data, updateRoomValue);
    case 1:
      return buildTable(data.settings, updateRoomValue);
    case 2:
        return data.settings ? buildTable(data.settings.sharedContext, updateRoomValue) : null;
    default:
        return buildTable(data, updateRoomValue , exclude)
  }
};

const RoomInspector = ({data, updateRoomValue, toShow}) => {
  return (
  <div>
    <h1>Room: {data.name}</h1>
      {
      pickTable(data,updateRoomValue, toShow)
      }

  </div>
  );
}



export default RoomInspector;