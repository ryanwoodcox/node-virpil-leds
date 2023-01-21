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
// Applications used: https://freeusbanalyzer.com,  http://www.usblyzer.com
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
export const COMMAND_SET_DEFAULT_LEDS = 0x64; // 100 - set to default colors
export const COMMAND_SET_ADD_ON_GRIPS_LEDS = 0x65; // 101 - add-on grips (1-4)
export const COMMAND_SET_ON_BOARD_LEDS = 0x66; // 102 - on-board LEDs (1-20)
export const COMMAND_SET_SLAVE_BOARD_LEDS = 0x67; // 103 - slave-device LEDs (1-20)
export const COMMAND_SET_EXTRA_LEDS = 0x68; // 104 - extra LEDs (alpha prime 1-9)
const COMMAND_SECONDARY = 0x0; // unnecessary? // 0x25; // Set Slave-board LED 13
const BLANK = 0x00;
const END_REPORT = 0xf0; // Not sure?

export const getVirpilDeviceCommands = (deviceVid: number, devicePid: number) => {
  // Note 2 devices are found one with usage == 4, and the other usage == 1
  const DEVICE_USAGE_POINTER = 1;
  const devices = hid.devices();
  // console.log('devices', devices);

  const virpilDevices = devices.filter(
    (device) => device.vendorId == deviceVid && device.productId == devicePid && device.usage === DEVICE_USAGE_POINTER
  );
  if (!virpilDevices || !virpilDevices.length || !virpilDevices[0].path) {
    throw new Error('Virpil device not found!');
  }

  const virpilDevice = new hid.HID(virpilDevices[0].path);
  // var deviceInfo = virpilDevice.getDeviceInfo();
  // console.log('virpilDevice', virpilDevice);
  // console.log('deviceInfo', deviceInfo);

  const sendVirpilDeviceCommand = (command: number, ledNumberColorPairs: Array<Array<number>>) => {
    const buffer = new Uint8Array(32).fill(0); // TODO: make this a normal array

    ledNumberColorPairs.forEach((numberColorPair) => {
      const [ledNumber, color] = numberColorPair;
      const ledIndex = ledNumber - 1;
      buffer[ledIndex] = color;
    });

    const featureReport = [REPORT_ID, command, COMMAND_SECONDARY, BLANK, BLANK, ...buffer, END_REPORT];

    const featureReportBuffer = Buffer.from(featureReport); // TODO: eliminate this

    try {
      var rc = virpilDevice.sendFeatureReport(featureReportBuffer);
    } catch (e) {
      console.log(e);
    }
  };

  const setDefaultLeds = () => {
    sendVirpilDeviceCommand(COMMAND_SET_DEFAULT_LEDS, []);
  };

  const setAddOnGripLeds = (ledNumberColorPairs: Array<Array<number>>) => {
    sendVirpilDeviceCommand(COMMAND_SET_ADD_ON_GRIPS_LEDS, ledNumberColorPairs);
  };

  const setOnboardLeds = (ledNumberColorPairs: Array<Array<number>>) => {
    sendVirpilDeviceCommand(COMMAND_SET_ON_BOARD_LEDS, ledNumberColorPairs);
  };

  const setSlaveBoardLeds = (ledNumberColorPairs: Array<Array<number>>) => {
    sendVirpilDeviceCommand(COMMAND_SET_SLAVE_BOARD_LEDS, ledNumberColorPairs);
  };

  const setExtraLeds = (ledNumberColorPairs: Array<Array<number>>) => {
    sendVirpilDeviceCommand(COMMAND_SET_EXTRA_LEDS, ledNumberColorPairs);
  };

  return { setDefaultLeds, setAddOnGripLeds, setOnboardLeds, setSlaveBoardLeds, setExtraLeds };
};
