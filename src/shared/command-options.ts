import { InvalidArgumentError, Option } from 'commander';

import {
  COLOR_GREEN_BRIGHT,
  COLOR_RED_BRIGHT,
  COLOR_OFF,
  COLOR_WHITE_DIM,
  COLOR_WHITE_MEDIUM,
  COLOR_WHITE_BRIGHT,
  COLOR_RED_DIM,
  COLOR_RED_MEDIUM,
  COLOR_GREEN_DIM,
  COLOR_GREEN_MEDIUM,
  COLOR_BLUE_DIM,
  COLOR_BLUE_MEDIUM,
  COLOR_BLUE_BRIGHT,
  COLOR_YELLOW_DIM,
  COLOR_YELLOW_MEDIUM,
  COLOR_YELLOW_BRIGHT,
  COLOR_MAGENTA_DIM,
  COLOR_MAGENTA_MEDIUM,
  COLOR_MAGENTA_BRIGHT,
  COLOR_CYAN_DIM,
  COLOR_CYAN_MEDIUM,
  COLOR_CYAN_BRIGHT,
} from './led-colors';

const colorMap = {
  ['off']: COLOR_OFF,
  ['white-dim']: COLOR_WHITE_DIM,
  ['white-medium']: COLOR_WHITE_MEDIUM,
  ['white-bright']: COLOR_WHITE_BRIGHT,
  ['white']: COLOR_WHITE_BRIGHT,
  ['red-dim']: COLOR_RED_DIM,
  ['red-medium']: COLOR_RED_MEDIUM,
  ['red-bright']: COLOR_RED_BRIGHT,
  ['red']: COLOR_RED_BRIGHT,
  ['green-dim']: COLOR_GREEN_DIM,
  ['green-medium']: COLOR_GREEN_MEDIUM,
  ['green-bright']: COLOR_GREEN_BRIGHT,
  ['green']: COLOR_GREEN_BRIGHT,
  ['blue-dim']: COLOR_BLUE_DIM,
  ['blue-medium']: COLOR_BLUE_MEDIUM,
  ['blue-bright']: COLOR_BLUE_BRIGHT,
  ['blue']: COLOR_BLUE_BRIGHT,
  ['yellow-dim']: COLOR_YELLOW_DIM,
  ['yellow-medium']: COLOR_YELLOW_MEDIUM,
  ['yellow-bright']: COLOR_YELLOW_BRIGHT,
  ['yellow']: COLOR_YELLOW_BRIGHT,
  ['magenta-dim']: COLOR_MAGENTA_DIM,
  ['magenta-medium']: COLOR_MAGENTA_MEDIUM,
  ['magenta-bright']: COLOR_MAGENTA_BRIGHT,
  ['magenta']: COLOR_MAGENTA_BRIGHT,
  ['cyan-dim']: COLOR_CYAN_DIM,
  ['cyan-medium']: COLOR_CYAN_MEDIUM,
  ['cyan-bright']: COLOR_CYAN_BRIGHT,
  ['cyan']: COLOR_CYAN_BRIGHT,
};

const parseButtonColorPairsFromArgs = (value: string, previousValue: Array<Array<number>> = []) => {
  const [buttonId, friendlyColor] = value.split('=');
  const buttonIdInt = parseInt(buttonId);
  const color = colorMap[friendlyColor as keyof typeof colorMap] as number | undefined;

  if (isNaN(buttonIdInt) || !color) {
    throw new InvalidArgumentError(
      'Please specify a valid set of button_id=color pairs. Example: 1=blue 2=red 3=yellow'
    );
  }

  return [...previousValue, [buttonIdInt, color]];
};

const parseHexValue = (argValue: string) => {
  const integer = parseInt(argValue, 16);

  if (isNaN(integer)) {
    throw new InvalidArgumentError('Please specify a valid hexadecimal number.');
  }

  return integer;
};

export const deviceVidOption = new Option('-v, --device-vid <number>', 'specify device vid')
  .makeOptionMandatory()
  .argParser(parseHexValue);
export const devicePidOption = new Option('-p, --device-pid <number>', 'specify device pid')
  .makeOptionMandatory()
  .argParser(parseHexValue);
export const buttonColorsOption = new Option(
  '-b, --button-colors <button_id=color...>',
  'specify button_id=color pairs'
)
  .makeOptionMandatory()
  .argParser(parseButtonColorPairsFromArgs);
