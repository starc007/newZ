//import liraries
import React, { Component } from "react";

import { Text } from "native-base";
import moment from "moment";

// create a component
class Time extends Component {
  constructor(props) {
    super(props);
    this.date = props.time;
  }
  render() {
    const time = moment(this.date || moment.now()).fromNow();
    return <Text note>{time}</Text>;
  }
}

export default Time;
