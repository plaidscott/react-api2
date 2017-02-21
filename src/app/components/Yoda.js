import React, {Component} from 'react';

class Yoda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputToTranslate: ''
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div>
            <div className="input-group">
              <input className="form-control" placeholder="Translate for you, yoda will, ehr ehr" name="inputToTranslate" onChange={this.handleChange}></input>
              <span className="input-group-btn">
                <button className="btn btn-primary">Translate</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Yoda;
