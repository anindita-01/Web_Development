function add(a, b) {
    return a + b;
  }
  
  function substract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    if (b == 0) throw new Error("Divide not possible");
    return a / b;
  }
  
  module.exports = {
    add,
    substract,
    divide,
  };