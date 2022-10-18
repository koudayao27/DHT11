DHT11.queryData(DigitalPin.P15)
if (DHT11.readDataSuccessful()) {
    basic.showString("T: " + ("" + DHT11.readData(dataType.temperature)).substr(0, 2))
    basic.showString("H: " + ("" + DHT11.readData(dataType.humidity)).substr(0, 2))
}
