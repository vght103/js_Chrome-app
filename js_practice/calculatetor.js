var calculator = {
  plus: function(a, b) {
    return (a + b);
  },

  minus: function(a, b) {
    return (a - b);
  },

  times: function(a, b) {
    return (a * b);
  },

  divied: function(a, b) {
    return (a / b);
  },

  powerOf: function(a, b) {
    return (a**b);
  },
};

var resultPlus = calculator.plus(5, 1);
var resultMinus = calculator.minus(5, 2);
var resultTimes = calculator.times(23, 12);
var resultDivied = calculator.divied(125, 15);
var resultPower = calculator.powerOf(43, 2);
