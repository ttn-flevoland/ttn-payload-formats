function Decoder(bytes, port) {

  function to_string(bytes) {
    return String.fromCharCode.apply(null, bytes);
  }

  return {
    message: to_string(bytes)
  };
}
