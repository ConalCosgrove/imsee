import React from 'react';
import JSONPretty from 'react-json-pretty';
const tracking = {};

const update = (e, name) => {
  tracking[name] = e.target.value;
};

const Table = ({data, updateValue, exclude}) => {
  if (data) {
    return (
    <div className="TableContainer">
      <table className="Table">
      <tbody>
        <tr className="Row">
          <th className="Parameter">Parameter</th>
          <th>Value</th>
          <th className="Update">Update</th>
        </tr>
        
        {
          Object.keys(data).map((key) => {
            return !exclude.has(key) ? <Row name={key} value={data[key]} updateValue={updateValue(key)}/> : null;
          })
        }
        </tbody>
      </table>
    </div>
    );
  }
  return null;
}

const Row = ({name, value, updateValue}) => {
  return (
  <tr className="Row">
    <td className="Parameter"><div className="TableCell"><h5>{name}</h5></div></td>
    <td className="Value"><JSONPretty data={value}/></td>
    <td className="Update">
      <h3> {`Update ${name}`} </h3>
      <input className="UpdateInput" onChange={(e)=>update(e, name)}/>
      <button className="UpdateButton" onClick={()=>updateValue(tracking[name])}>Update</button>
    </td>
  </tr>
  );
}

export default Table;