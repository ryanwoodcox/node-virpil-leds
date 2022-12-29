#! /usr/bin/env node

import { Command } from 'commander';
import { setOnBoardLedsCommand } from './set-on-board-leds-command';
import { version } from '../package.json';
import { setSlaveBoardLedsCommand } from './set-slave-board-leds-command';

const program = new Command();
program.description('A CLI tool for setting LEDs on Virpil devices');
program.version(version);

program.addCommand(setOnBoardLedsCommand);
program.addCommand(setSlaveBoardLedsCommand);

const main = async () => {
  await program.parseAsync();
};

main();
