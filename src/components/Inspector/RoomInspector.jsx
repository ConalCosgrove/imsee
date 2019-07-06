import React from 'react';
import './Inspector.css';

const Row = ({name, value}) => {
  return (
  <tr className="Row">
    <td className="Name">{name}</td>
    <td className="Value">{JSON.stringify(value)}</td>
    <td><input></input></td>
  </tr>
  );
}

const Table = ({data}) => {
  return (
  <table className="Table">
    <tr className="Row">
      <th>Parameter</th>
      <th>Value</th>
      <th>Update</th>
    </tr>
    {
      Object.keys(data).map((key) => {
        return <Row name={key} value={data[key]}/>
      })
    }
  </table>
  );
}

const buildTable = (data) => {
  return <Table data={data}/>;
}

const RoomInspector = ({data}) => {
  return (
  <div>
    <h1>Room: {data.name}</h1>
    {buildTable(data)}
  </div>
  );
}



export default RoomInspector;