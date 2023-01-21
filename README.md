# node-virpil-leds

- A package for communicating with the LEDs on Virpil devices

## Installation

- Install `node-virpil-leds` globally or use npx
  - `npm i -g node-virpil-leds`
  - `npx node-virpil-leds {command}`

## Commands and Usage

- You CAN set multiple button LEDs in a single command execution.
- You CANNOT combine commands in a single execution (Cannot set on-board and slave-board button at the same time).

- set-default-leds

  - Sets all device LEDs to default color
  - Example: `node-virpil-leds set-default-leds -v 1234 -p 4567`

- set-add-on-grip-leds

  - Sets add-on grip LEDs 1-4
  - Example: `node-virpil-leds set-add-on-grip-leds -v 1234 -p 4567 -b 1=red 2=white 3=blue`

- set-on-board-leds

  - Set on-board LEDs 1-20
  - Example: `node-virpil-leds set-on-board-leds -v 1234 -p 4567 -b 1=red 2=white 3=blue`

- set-slave-board-leds

  - Set slave-board LEDs 1-20
  - Example: `node-virpil-leds set-slave-board-leds -v 1234 -p 4567 -b 1=red 2=white 3=blue`

- set-extra-leds
  - Set extra LEDs 1-10
  - Example: `node-virpil-leds set-extra-leds -v 1234 -p 4567 -b 1=red 2=white 3=blue`
