import { Command } from 'commander';
import { deviceVidOption, devicePidOption, buttonColorsOption } from './shared/command-options';
import { getVirpilDeviceCommands } from './shared/get-virpil-device-commands';

export const setOnBoardLedsCommand = new Command('set-on-board-leds');

setOnBoardLedsCommand.addOption(deviceVidOption).addOption(devicePidOption).addOption(buttonColorsOption);

setOnBoardLedsCommand.action((options) => {
  const { deviceVid, devicePid, buttonColors } = options;
  const { setOnboardLeds } = getVirpilDeviceCommands(deviceVid, devicePid);

  setOnboardLeds(buttonColors);
});
