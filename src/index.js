import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Hello} from './app/hello';
import FruitInfo from './app/components/FruitInfo';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Hello}/>
    <Route path="/fruitinfo/:fruit" component={FruitInfo}/>
  </Router>,
  document.getElementById('root')
);
