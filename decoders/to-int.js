function Decoder(bytes, port) {

  function to_int(buffer, offset) {
    return buffer[offset + 3] | buffer[offset + 2] << 8 | buffer[offset + 1] << 16 | buffer[offset] << 24;
  }

  var humidity = to_int(bytes, 0);
  var temperature = to_int(bytes, 4);

  return {
      humidity: humidity,
      temperature: temperature
  };
}
