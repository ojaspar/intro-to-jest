const functions = {
  add: (num1, num2) => num1 + num2,
  addMultipleNum: (...args) => {
    return args.reduce((previus, current) => {
      return previus + current;
    });
  },
  falsyValue: () => false,
  creatUser: (name, lastname) => {
    const user = { name, lastname };
    return user;
  }
};

module.exports = functions;
