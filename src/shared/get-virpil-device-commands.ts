import * as hid from 'node-hid';

// typedef struct
// {
//     uint8_t report_id;   //always '2'
//     uint8_t command; //'100'-back to default colors; '101'-set colors on addon grips 1-4; '102'-set colors on board leds 1-20; '103'-set colors on slave leds 1-20;
//     uint16_t address; //do not used '0'
//     uint8_t length; // do not used '0'
//     uint8_t buffer[32]; // buffer index are led number, 0b11BBGGRR
// } HIDUSB_TranzitReport_t;

// ---------------- LIVE SNIFFED EXAMPLE ----------------
// Application used: http://www.usblyzer.com/
// Length: 38
// Values in hex
// 02 67 25 00
// 00 00 00 00 00 00 00 00
// 00 00 00 00 00 83 00 00
// 00 00 00 00 00 00 00 00
// 00 00 00 00 00 00 00 00
// 00 F0
// ------------------------------------------------------

// const REPORT_LENGTH = 38;
const REPORT_ID = 0x2;
const COMMAND_SET_DEFAULT_LEDS = 0x64; // 100
const COMMAND_SET_ADD_ON_GRIPS_LEDS = 0x65; // 101
export const COMMAND_SET_ON_BOARD_LEDS = 0x66; // 102 - on-board LEDs
export const COMMAND_SET_SLAVE_BOARD_LEDS = 0x67; // 103 - slave-device LEDs
const COMMAND_SECONDARY = 0x0; // unnecessary? // 0x25; // Set Slave-board LED 13
const BLANK = 0x00;
const END_REPORT = 0xf0; // Not sure?

export const getVirpilDeviceCommands = (deviceVid: number, devicePid: number) => {
  // Note 2 throttles are found one with usage == 4, and the other usage == 1
  const DEVICE_USAGE_POINTER = 1;
  const devices = hid.devices();
  // console.log('devices', devices);

  const virpilDevices = devices.filter(
    (device) => device.vendorId == deviceVid && device.productId == devicePid && device.usage === DEVICE_USAGE_POINTER
  );
  if (!virpilDevices || !virpilDevices.length || !virpilDevices[0].path) {
    throw new Error('Virpil device not found!');
  }
  // const throttleDevice = new hid.HID(
  //   DEVICE_VID_THROTTLE_DEC,
  //   DEVICE_PID_THROTTLE_DEC
  // );

  const throttleDevice = new hid.HID(virpilDevices[0].path);
  // var deviceInfo = throttleDevice.getDeviceInfo();
  // console.log('throttleDevice', throttleDevice);
  // console.log('deviceInfo', deviceInfo);

  const sendVirpilDeviceCommand = (command: number, ledIndexColorPairs: Array<Array<number>>) => {
    const buffer = new Uint8Array(32).fill(0); // TODO: make this a normal array

    ledIndexColorPairs.forEach((indexColorPair) => {
      const [index, color] = indexColorPair;
      buffer[index] = color;
    });

    const featureReport = [REPORT_ID, command, COMMAND_SECONDARY, BLANK, ...buffer, BLANK, END_REPORT];

    const featureReportBuffer = Buffer.from(featureReport); // TODO: eliminate this

    // console.log('report sent:', arrayToHexString(featureReportBuffer));
    try {
      var rc = throttleDevice.sendFeatureReport(featureReportBuffer);
      // console.log('sent size:', featureReport.length, ' actual size:', rc);
    } catch (e) {
      console.log(e);
    }
  };

  const setOnboardLeds = (ledIndexColorPairs: Array<Array<number>>) => {
    sendVirpilDeviceCommand(COMMAND_SET_ON_BOARD_LEDS, ledIndexColorPairs);
  };

  const setSlaveBoardLeds = (ledIndexColorPairs: Array<Array<number>>) => {
    sendVirpilDeviceCommand(COMMAND_SET_SLAVE_BOARD_LEDS, ledIndexColorPairs);
  };

  return { setOnboardLeds, setSlaveBoardLeds };
};
