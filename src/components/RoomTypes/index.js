import React from 'react';
import RoomTypesHolder from './RoomTypesHolder';
const refocus = require('../../helpers/refocus');
const { token } = require('../../env.json');
const settings = require('../../env.json');
const { resultLimit } = settings || 0;
const api = refocus.api(token);

const Connector = Holder =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { roomTypeList: '' };
    }

    componentDidMount() {
      api.getRoomTypes(resultLimit)
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