import React from 'react';
import Table from './Table';

const settings = require('../../env.json');
const exclude = new Map();
if (settings && settings.toExclude) {
  const { toExclude } = settings;
  toExclude.forEach((item) => exclude.set(item, true));
}

const buildTable = (data, updateValue) => {
  return <Table data={data} updateValue={updateValue} exclude={exclude}/>;
}

const pickTable = (data, updateRoomTypeValue, toShow) => {
  switch (toShow) {
    case 0:
      return buildTable(data, updateRoomTypeValue);
    case 1:
      return buildTable(data.settings, updateRoomTypeValue);
    case 2:
        return data.settings ? buildTable(data.settings.sharedContext, updateRoomTypeValue) : null;
    default:
        return buildTable(data, updateRoomTypeValue , exclude)
  }
};

const RoomTypeInspector = ({data, updateRoomTypeValue, toShow}) => {
  return (
  <div>
    <h1>RoomType: {data.name}</h1>
    {pickTable(data, updateRoomTypeValue, toShow)}
  </div>
  );
}

export default RoomTypeInspector;