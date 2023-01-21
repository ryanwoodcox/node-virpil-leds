#! /usr/bin/env node

import { Command } from 'commander';
import { version } from '../package.json';
import { setAddOnGripLedsCommand } from './set-add-on-grip-leds-command';
import { setDefaultLedsCommand } from './set-default-leds-command';
import { setExtraLedsCommand } from './set-extra-leds-command';
import { setOnBoardLedsCommand } from './set-on-board-leds-command';
import { setSlaveBoardLedsCommand } from './set-slave-board-leds-command';

const program = new Command();
program.description('A CLI tool for setting LEDs on Virpil devices');
program.version(version);

program.addCommand(setDefaultLedsCommand);
program.addCommand(setAddOnGripLedsCommand);
program.addCommand(setOnBoardLedsCommand);
program.addCommand(setSlaveBoardLedsCommand);
program.addCommand(setExtraLedsCommand);

const main = async () => {
  await program.parseAsync();
};

main();
