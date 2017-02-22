/* eslint-disable */
import React, {Component} from 'react';

export default class FruitInfo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Hello from FruitInfo</h3>
        {this.props.params.fruit}
      </div>
    );
  }
}
