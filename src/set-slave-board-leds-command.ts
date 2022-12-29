import { Command } from 'commander';
import { deviceVidOption, devicePidOption, buttonColorsOption } from './shared/command-options';
import { getVirpilDeviceCommands } from './shared/get-virpil-device-commands';

export const setSlaveBoardLedsCommand = new Command('set-slave-board-leds');

setSlaveBoardLedsCommand.addOption(deviceVidOption).addOption(devicePidOption).addOption(buttonColorsOption);

setSlaveBoardLedsCommand.action((options) => {
  const { deviceVid, devicePid, buttonColors } = options;
  const { setSlaveBoardLeds } = getVirpilDeviceCommands(deviceVid, devicePid);

  setSlaveBoardLeds(buttonColors);
});
