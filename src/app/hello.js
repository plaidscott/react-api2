import React, {Component} from 'react';

import Yoda from './components/Yoda';

export class Hello extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <h2>Hi there from Hello</h2>
          </div>
        </div>
        <Yoda/>
      </div>
    );
  }
}
