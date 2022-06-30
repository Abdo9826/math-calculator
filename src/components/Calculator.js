import React, { Component } from 'react';
import calculate from './logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const buttonName = e.target.name;
    this.setState((prevState) => ({
      ...calculate(prevState, buttonName),
    }));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container my-4">
        <div className="calculator card">
          <div className="calculator-screen z-depth-1">
            <span>{next || operation || total || ''}</span>
          </div>

          <div className="calculator-keys">
            <button
              type="button"
              className="operator btn btn-info"
              name="+"
              value="+"
              onClick={this.handleClick}
            >
              +
            </button>
            <button
              type="button"
              className="operator btn btn-info"
              name="-"
              value="-"
              onClick={this.handleClick}
            >
              -
            </button>
            <button
              type="button"
              className="operator btn btn-info"
              name="x"
              value="x"
              onClick={this.handleClick}
            >
              &times;
            </button>
            <button
              type="button"
              className="operator btn btn-info orange"
              value="/"
              onClick={this.handleClick}
              name="/"
            >
              &divide;
            </button>

            <button
              type="button"
              value="7"
              className="btn btn-light waves-effect"
              name="7"
              onClick={this.handleClick}
            >
              7
            </button>
            <button
              type="button"
              value="8"
              className="btn btn-light waves-effect"
              name="8"
              onClick={this.handleClick}
            >
              8
            </button>
            <button
              type="button"
              value="9"
              className="btn btn-light waves-effect"
              name="9"
              onClick={this.handleClick}
            >
              9
            </button>
            <button
              type="button"
              className="operator btn btn-info orange"
              value="%"
              name="%"
              onClick={this.handleClick}
            >
              %
            </button>

            <button
              type="button"
              value="5"
              className="btn btn-light waves-effect"
              name="5"
              onClick={this.handleClick}
            >
              5
            </button>
            <button
              type="button"
              value="6"
              className="btn btn-light waves-effect"
              name="6"
              onClick={this.handleClick}
            >
              6
            </button>

            <button
              type="button"
              value="4"
              className="btn btn-light waves-effect"
              name="4"
              onClick={this.handleClick}
            >
              4
            </button>

            <button
              type="button"
              className="operator btn btn-info orange"
              value="+/-"
              name="+/-"
              onClick={this.handleClick}
            >
              +/-
            </button>

            <button
              type="button"
              value="3"
              className="btn btn-light waves-effect"
              name="3"
              onClick={this.handleClick}
            >
              3
            </button>

            <button
              type="button"
              value="2"
              className="btn btn-light waves-effect"
              name="2"
              onClick={this.handleClick}
            >
              2
            </button>
            <button
              type="button"
              className="decimal function btn btn-secondary"
              value="1"
              name="1"
              onClick={this.handleClick}
            >
              1
            </button>
            <button
              type="button"
              className="all-clear function btn btn-danger btn-sm"
              value="AC"
              name="AC"
              onClick={this.handleClick}
            >
              AC
            </button>

            <button
              type="button"
              className="equal-sign operator btn btn-default"
              value="="
              name="="
              onClick={this.handleClick}
            >
              =
            </button>

            <button
              type="button"
              value="."
              className="btn btn-light waves-effect"
              name="."
              onClick={this.handleClick}
            >
              .
            </button>

            <button
              type="button"
              value="0"
              className="btn btn-light waves-effect"
              name="0"
              onClick={this.handleClick}
            >
              0
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
