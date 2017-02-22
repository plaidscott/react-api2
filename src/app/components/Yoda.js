import React, {Component} from 'react';
import {Link} from 'react-router';

import yodaHelper from '../utils/yodaHelper';

class Yoda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputToTranslate: '',
      translatedInput: '',
      selectedFruit: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTranslationRequest = this.handleTranslationRequest.bind(this);
    this.handleSelectedFruit = this.handleSelectedFruit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSelectedFruit(e) {
    this.setState({selectedFruit: e.target.value});
  }

  handleRequestMoreFruitInfo() {

  }

  handleTranslationRequest() {
    yodaHelper.requestYodaTranslation(this.state.inputToTranslate)
      .then(response => {
        this.setState({translatedInput: response.data});
      });
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="input-group">
            <input className="form-control" placeholder="Translate for you, yoda will, herh herh" name="inputToTranslate" onChange={this.handleChange}></input>
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={this.handleTranslationRequest}>Translate</button>
            </span>
          </div>
          <div>{this.state.inputToTranslate}</div>
          <div>{this.state.translatedInput}</div>
        </div>{/* end of jumbotron , input-group */}
        <div className="jumbotron">
          <p>This is the option jumbotron</p>
          <div className="input-group">
            <select className="form-control" onChange={this.handleSelectedFruit}>
              <option value=""></option>
              <option value="apple">Apple</option>
              <option value="orange">Orange</option>
              <option value="pineapple">PineApple</option>
            </select>
            <span className="input-group-btn">
              <Link to={`/fruitinfo/${this.state.selectedFruit}`}><button className="btn btn-primary">See More about this fruit</button></Link>
            </span>
          </div>
          <span>You selected a: </span>{this.state.selectedFruit}
        </div>
      </div>
    );
  }
}

export default Yoda;
