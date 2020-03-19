const functions = {
  add: (num1, num2) => num1 + num2,
  addMultipleNum: (...args) => {
    return args.reduce((previus, current) => {
      return previus + current;
    });
  }
};

module.exports = functions;
