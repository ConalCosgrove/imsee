import React from 'react';
import RoomInspector from './RoomInspector';
import RoomTypeInspector from './RoomTypeInspector';
const GENERAL = 0;
const SETTINGS = 1;
const SHAREDCONTEXT = 2;

class Inspector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tableToDisplay: GENERAL }
  }

  changeTable(newTableIndex) {
    if (newTableIndex >= 0 && newTableIndex < 3) {
      this.setState({ tableToDisplay: newTableIndex});
    }
  }

  render() {
    const { type, data, updateRoomValue, updateRoomTypeValue } = this.props;
    if (data && type) {
      return (
        <div className='Inspector'>
          <div className='TablePickButtonsHolder'>
          <div className='TablePickButton' onClick={()=>this.changeTable(GENERAL)}>Room</div>
          <div className='TablePickButton' onClick={()=>this.changeTable(SETTINGS)}>Settings</div>
          <div className='TablePickButton' onClick={()=>this.changeTable(SHAREDCONTEXT)}>Shared Context</div>
        </div>
        { 
          type === 'room' ?
          <RoomInspector
            data={data}
            updateRoomValue={updateRoomValue(data.id)}
            toShow={this.state.tableToDisplay}/> :
          <RoomTypeInspector
            data={data}
            updateRoomTypeValue={updateRoomTypeValue(data.id)}
            toShow={this.state.tableToDisplay}/> 
        }
        </div>
        )
    }
    return null;
  }
}

export default Inspector;