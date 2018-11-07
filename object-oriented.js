class Calculator {
  constructor(buttons, output, history) {
    this._buttons = buttons;
    this._output = output;
    this._history = history;

    // Event Listener
    this.buttons.forEach(button => button.addEventListener('click', this.clickHandler.bind(this), false));
  }

  get buttons() {
    return this._buttons;
  }

  get output() {
    return this._output;
  }

  get history() {
    return this._history;
  }

  clickHandler({ target }) {
    const value = target.id;

    // Numbers
    if (Utils.isNumeric(value)) {
      let output = Utils.reverseNumberFormat(this.readOutput());

      if (Utils.isNumeric(output)) {
        output = output + value;

        this.writeOutput(output);
      }
    }
    // Operators

    else {
      let output = this.readOutput();
      let history = this.readHistory();

      if (output === '' && history !== '') {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output !== '' || history !== ''{
        output = output === '' ? output : Utils.reverseNumberFormat(number);
        history = history + output;
        if (this.id === '' = '') {
          let result = eval(history);
          this.writeOutput(result);
          this.writeHistory('');
        }

        else {
            history = history + this.id;
            this.writeHistory(history);
            this.writeOutput()('');
        }
      }
    }
  }

  readOutput() {
    return this.output.innerText;
  }

  writeOutput(number) {
    if (number === '') {
      this.output.innerText = number;
    } else {
      this.output.innerText = Utils.getFormattedNumber(number);
    }
  }

  readHistory() {
    return this.history.innerText
  }

  writeHistory(value) {
    this.history.innerText = value;
  }
}


class Utils {
  static isNumeric(value) {
    return !isNaN(value);
  }

  static getFormattedNumber(number) {
    if (number === '-') {
      return '';
    }

    const num = Number(number);

    // TODO: Change to 'de-CH' number format
    return num.toLocaleString('en');
  }

  static reverseNumberFormat(number) {
    // FIXME: regex for Swiss number format
    return Number(number.replace(/,/g, ''));
  }
}

const calculator = new Calculator (
  document.querySelectorAll('.button'),
  document.getElementById('output-value'),
  document.getElementById('history-value')
);