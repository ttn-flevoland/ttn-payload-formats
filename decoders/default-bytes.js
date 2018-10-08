function Decoder(bytes, port) {
  var pressure = (bytes[0] << 8) | bytes[1];
  var temperature = (bytes[2] << 8) | bytes[3];

  return {
    pressure: pressure,
    temperature: temperature
  };
}
