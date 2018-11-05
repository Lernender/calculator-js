class Math {
  constructor(operator, number, empty, clear) {
    this.operator = new operator;
    this.number = new number;
    this.empty = new empty;
    this.clear = new clear;

  //arrow
  for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
    if (id == "clear") {

      printHistory("");
      printOutput("");

    }
  window.addEventListener('click', this.keyboard.bind(this));


      keyboard() {
        this.operator.keyboard();
        this.number.keyboard();
        this.empty.keyboard();
        this.clear.keyboard();
      }


        class Result {
  constructor(history, output, number,value) {
    this.history = new history;
    this.output = new output;
    this.number = new number;
    this.value = new value;
  }

  get _History() {
    return this.history;
  }

  get _Output() {
    return this.output;
  }

  printHistory(num) {
    this._History.innerText = num;
  }

  printOutput(num) {
    if (num == "") {
      this._History.innerText = num;
    }
    else (this._Output.innerText = getFormattedNumber(num);
  }
}

// Zahl aus String ausgeben
function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  const n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

// ersetzen
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ''));
}




new Math(document.getElementById('keyboard'), {
  operator: document.getElementsByClassName('operator'),
  number: document.getElementsByClassName('number'),
  empty: document.getElementsByClassName('empty'),
  clear: document.getElementById('clear')
});

new Result(document.getElementById('result'), {
  history: document.getElementById('history-value'),
  output: document.getElementById('output-value'),
});