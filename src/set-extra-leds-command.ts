import { Command } from 'commander';
import { deviceVidOption, devicePidOption, buttonColorsOption } from './shared/command-options';
import { getVirpilDeviceCommands } from './shared/get-virpil-device-commands';

export const setExtraLedsCommand = new Command('set-extra-leds');

setExtraLedsCommand.addOption(deviceVidOption).addOption(devicePidOption).addOption(buttonColorsOption);

setExtraLedsCommand.action((options) => {
  const { deviceVid, devicePid, buttonColors } = options;
  const { setExtraLeds } = getVirpilDeviceCommands(deviceVid, devicePid);

  setExtraLeds(buttonColors);
});
