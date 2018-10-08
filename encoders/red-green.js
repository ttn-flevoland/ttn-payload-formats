function Encoder(object, port) {
  if (object.color === 'red') {
    return [1];
  } else if (object.color === 'green') {
    return [2];
  }
  return [0];
}
