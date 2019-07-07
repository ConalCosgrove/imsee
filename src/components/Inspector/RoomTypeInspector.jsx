import React from 'react';


const exclude = new Map();
exclude.set('settings');

const tracking = {};
const update = (e, name) => {
  tracking[name] = e.target.value;
};
const Row = ({name, value, updateRoomTypeValue}) => {
  return (
  <tr className="Row">
    <td className="Name">{name}</td>
    <td className="Value">{JSON.stringify(value)}</td>
    <td><input className={`${name}-index`} onChange={(e)=>update(e, name)}></input><button onClick={()=>updateRoomTypeValue(tracking[name])}>Update</button></td>
  </tr>
  );
}

const Table = ({data, updateRoomTypeValue}) => {
  return (
  <div className="TableContainer">
    <table className="Table">
      <tr className="Row">
        <th>Parameter</th>
        <th>Value</th>
        <th>Update</th>
      </tr>
      {
        Object.keys(data).map((key) => {
          return !exclude.has(key) ? <Row name={key} value={data[key]} updateRoomTypeValue={updateRoomTypeValue(key)}/> : null;
        })
      }
    </table>
    <textarea className="SettingsInput" defaultValue={JSON.stringify(data.settings)}/>
    <div className="UpdateSettingsButton">Update Settings</div>
  </div>
  );
}

const buildTable = (data, updateRoomTypeValue) => {
  return <Table data={data} updateRoomTypeValue={updateRoomTypeValue}/>;
}

const RoomTypeInspector = ({data, updateRoomTypeValue}) => {
  return (
  <div>
    <h1>RoomType: {data.name}</h1>
    {buildTable(data, updateRoomTypeValue)}
  </div>
  );
}

export default RoomTypeInspector;