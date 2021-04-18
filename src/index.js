const messages = ["diego", "paula", "jose", "mario", "oscar", "juan", "laura"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = {
  randomMsg,
};
