import React from 'react';
import RoomTypesHolder from './RoomTypesHolder';
const refocus = require('../../helpers/refocus');
const token = require('../../env.json').TOKEN;
const api = refocus.api(token);

const Connector = Holder =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { roomTypeList: '' };
    }

    componentDidMount() {
      api.getRoomTypes()
      .then((data) => {
        this.setState({roomTypeList: data.body});
      })
    }

    render() {
      return <Holder {...this.props} roomTypeList={this.state.roomTypeList} />;
    }
  };

const RoomTypes = Connector(RoomTypesHolder);

export default RoomTypes;