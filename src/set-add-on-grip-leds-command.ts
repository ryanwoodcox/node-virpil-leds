import { Command } from 'commander';
import { deviceVidOption, devicePidOption, buttonColorsOption } from './shared/command-options';
import { getVirpilDeviceCommands } from './shared/get-virpil-device-commands';

export const setAddOnGripLedsCommand = new Command('set-add-on-grip-leds');

setAddOnGripLedsCommand.addOption(deviceVidOption).addOption(devicePidOption).addOption(buttonColorsOption);

setAddOnGripLedsCommand.action((options) => {
  const { deviceVid, devicePid, buttonColors } = options;
  const { setAddOnGripLeds } = getVirpilDeviceCommands(deviceVid, devicePid);

  setAddOnGripLeds(buttonColors);
});
