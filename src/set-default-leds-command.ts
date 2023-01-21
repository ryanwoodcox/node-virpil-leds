import { Command } from 'commander';
import { deviceVidOption, devicePidOption, buttonColorsOption } from './shared/command-options';
import { getVirpilDeviceCommands } from './shared/get-virpil-device-commands';

export const setDefaultLedsCommand = new Command('set-default-leds');

setDefaultLedsCommand.addOption(deviceVidOption).addOption(devicePidOption);

setDefaultLedsCommand.action((options) => {
  const { deviceVid, devicePid } = options;
  const { setDefaultLeds } = getVirpilDeviceCommands(deviceVid, devicePid);

  setDefaultLeds();
});
