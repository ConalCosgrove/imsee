import React from 'react';
import RoomsHolder from './RoomsHolder.jsx';
const refocus = require('../../helpers/refocus');
const token = require('../../env.json').TOKEN;
const api = refocus.api(token);

const Connector = Holder =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { roomsList: '' };
    }

    componentDidMount() {
      api.getRooms()
      .then((data) => {
        this.setState({roomsList: data.body});
      })
    }

    render() {
      return <Holder {...this.props} roomsList={this.state.roomsList} />;
    }
  };

const Rooms = Connector(RoomsHolder);

export default Rooms;