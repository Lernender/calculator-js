class Calculator {
  constructor(numbers, operators, output, history) {
    this._numbers = numbers;
    this._operators = operators;
    this._output = output;
    this._history = history;

    this.addEventListeners();
  }

  get numbers() {
    return this._numbers;
  }

  get operators() {
    return this._operators;
  }

  get output() {
    return this._output;
  }

  get history() {
    return this._history;
  }

  addEventListeners() {
    this.numbers.forEach(number => number.addEventListener('click', this.clickHandler.bind(this), false));
    this.operators.forEach(operator => operator.addEventListener('click', this.clickHandler.bind(this), false));
  }

  clickHandler({ target }) {
    const value = target.id;

    if (Utils.isNumeric(value)) {
      // Number
      console.log(Utils.isNumeric(value));
    } else {
      // Operator
    }
  }
}

class Utils {
  static isNumeric(value) {
    return !isNaN(value);
  }
}

const calculator = new Calculator (
  document.querySelectorAll('.number'),
  document.querySelectorAll('.operator'),
  document.getElementById('output-value'),
  document.getElementById('history-value')
);