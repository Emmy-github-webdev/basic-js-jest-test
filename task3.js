class calculator {
  add(a, b){
    const total = a+b;
    return total;
  }

  sub(a, b){
    const total = a-b;
    return total;
  }

  div(a, b){
    const total = a/b;
    return total;
  }

  mul(a, b){
    const total = a*b;
    return total;
  }
}

module.exports = calculator;