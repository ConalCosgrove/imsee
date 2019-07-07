import React from 'react';
import './Inspector.css';
const settings = require('../../env.json');
const exclude = new Map();
exclude.set('settings');
if (settings && settings.toExclude) {
  const { toExclude } = settings;
  toExclude.forEach((item) => exclude.set(item, true));
}
const tracking = {};
const update = (e, name) => {
  tracking[name] = e.target.value;
};
const Row = ({name, value, updateRoomValue}) => {
  return (
  <tr className="Row">
    <td className="Name">{name}</td>
    <td className="Value">{JSON.stringify(value)}</td>
    <td><input className={`${name}-index`} onChange={(e)=>update(e, name)}></input><button onClick={()=>updateRoomValue(tracking[name])}>Update</button></td>
  </tr>
  );
}

const Table = ({data, updateRoomValue}) => {
  return (
  <div className="TableContainer">
    <table className="Table">
      <tr className="Row">
        <th>Parameter</th>
        <th>Value</th>
        <th>Update</th>
      </tr>
      <tbody>
      {
        Object.keys(data).map((key) => {
          return !exclude.has(key) ? <Row name={key} value={data[key]} updateRoomValue={updateRoomValue(key)}/> : null;
        })
      }
      </tbody>
    </table>
    <textarea className="SettingsInput" defaultValue={JSON.stringify(data.settings)}/>
    <div className="UpdateSettingsButton">Update Settings</div>
  </div>
  );
}

const buildTable = (data, updateRoomValue) => {
  return <Table data={data} updateRoomValue={updateRoomValue}/>;
}

const RoomInspector = ({data, updateRoomValue}) => {
  return (
  <div>
    <h1>Room: {data.name}</h1>
    {buildTable(data, updateRoomValue)}
  </div>
  );
}



export default RoomInspector;