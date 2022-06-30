import { useState } from 'react';
import calculate from './logic/calculate';

export default function Calculator() {
  const [calcObj, setCalcObj] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handleClick = (e) => {
    const buttonName = e.target.name;
    setCalcObj((prevState) => ({
      ...calculate(prevState, buttonName),
    }));
  };

  const { total, next, operation } = calcObj;
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
            onClick={handleClick}
          >
            +
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            name="-"
            value="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            name="x"
            value="x"
            onClick={handleClick}
          >
            &times;
          </button>
          <button
            type="button"
            className="operator btn btn-info orange"
            value="/"
            onClick={handleClick}
            name="/"
          >
            &divide;
          </button>

          <button
            type="button"
            value="7"
            className="btn btn-light waves-effect"
            name="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            type="button"
            value="8"
            className="btn btn-light waves-effect"
            name="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            type="button"
            value="9"
            className="btn btn-light waves-effect"
            name="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            type="button"
            className="operator btn btn-info orange"
            value="%"
            name="%"
            onClick={handleClick}
          >
            %
          </button>

          <button
            type="button"
            value="5"
            className="btn btn-light waves-effect"
            name="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            type="button"
            value="6"
            className="btn btn-light waves-effect"
            name="6"
            onClick={handleClick}
          >
            6
          </button>

          <button
            type="button"
            value="4"
            className="btn btn-light waves-effect"
            name="4"
            onClick={handleClick}
          >
            4
          </button>

          <button
            type="button"
            className="operator btn btn-info orange"
            value="+/-"
            name="+/-"
            onClick={handleClick}
          >
            +/-
          </button>

          <button
            type="button"
            value="3"
            className="btn btn-light waves-effect"
            name="3"
            onClick={handleClick}
          >
            3
          </button>

          <button
            type="button"
            value="2"
            className="btn btn-light waves-effect"
            name="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            type="button"
            className="decimal function btn btn-secondary"
            value="1"
            name="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            type="button"
            className="all-clear function btn btn-danger btn-sm"
            value="AC"
            name="AC"
            onClick={handleClick}
          >
            AC
          </button>

          <button
            type="button"
            className="equal-sign operator btn btn-default"
            value="="
            name="="
            onClick={handleClick}
          >
            =
          </button>

          <button
            type="button"
            value="."
            className="btn btn-light waves-effect"
            name="."
            onClick={handleClick}
          >
            .
          </button>

          <button
            type="button"
            value="0"
            className="btn btn-light waves-effect"
            name="0"
            onClick={handleClick}
          >
            0
          </button>
        </div>
      </div>
    </div>
  );
}
