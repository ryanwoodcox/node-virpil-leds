// Color Format (in binary 0b10000011)
//    val= ??BB GGRR // ?? blue green red
//    83 = 1000 0011 // red full bright
//    82 = 1000 0010 // red half bright
//    81 = 1000 0001 // red dim bright
//    80 = 1000 0000 // black / off

export const COLOR_OFF = 0b10000000;

export const COLOR_WHITE_DIM = 0b10010101;
export const COLOR_WHITE_MEDIUM = 0b10101010;
export const COLOR_WHITE_BRIGHT = 0b10111111;

export const COLOR_RED_DIM = 0b10000001;
export const COLOR_RED_MEDIUM = 0b10000010;
export const COLOR_RED_BRIGHT = 0b10000011;

export const COLOR_GREEN_DIM = 0b10000100;
export const COLOR_GREEN_MEDIUM = 0b10001000;
export const COLOR_GREEN_BRIGHT = 0b10001100;

export const COLOR_BLUE_DIM = 0b10010000;
export const COLOR_BLUE_MEDIUM = 0b10100000;
export const COLOR_BLUE_BRIGHT = 0b10110000;

export const COLOR_YELLOW_DIM = 0b10000101;
export const COLOR_YELLOW_MEDIUM = 0b10001010;
export const COLOR_YELLOW_BRIGHT = 0b10001111;

export const COLOR_CYAN_DIM = 0b10010100;
export const COLOR_CYAN_MEDIUM = 0b10101000;
export const COLOR_CYAN_BRIGHT = 0b10111100;

export const COLOR_MAGENTA_DIM = 0b10010001;
export const COLOR_MAGENTA_MEDIUM = 0b10100010;
export const COLOR_MAGENTA_BRIGHT = 0b10110011;

// Red/Green
export const COLOR_ORANGE = 0b10001011;
export const COLOR_SALMON = 0b10011011; // 1x blue
export const COLOR_RED_ORANGE = 0b10000111;
export const COLOR_DEEP_SALMON = 0b10000110; // Red dialed back

// Green/Red
export const COLOR_LIME_GREEN = 0b10001110;
export const COLOR_OLIVE_GREEN = 0b10011110; // 1x blue
export const COLOR_FORREST_GREEN = 0b10001101;
export const COLOR_SWAMP_GREEN = 0b10001001; // Green dialed back

// Red/Blue
export const COLOR_FUCHSIA = 0b10100011;
export const COLOR_PINK = 0b10100111; // 1x Green
export const COLOR_LIGHT_PINK = 0b10101011; // 2x Green
export const COLOR_RED_PINK = 0b10010011;
export const COLOR_DEEP_PINK = 0b10010010; // Red dialed back

// Blue/Red
export const COLOR_PURPLE = 0b10110010;
export const COLOR_LIGHT_PURPLE = 0b10111010; // 2x green
export const COLOR_BLUE_PINK = 0b10110001;
export const COLOR_INDIGO = 0b10100001; // Blue dialed back

// Green/Blue
export const COLOR_GREEN_CYAN = 0b10101100;
export const COLOR_LIGHT_GREEN_CYAN = 0b10101110; // 2x red
export const COLOR_AQUA_GREEN = 0b10011100;
export const COLOR_BABY_BLUE = 0b10011000; // Green dialed back

// Blue/Green
export const COLOR_LIGHT_BLUE = 0b10111000;
export const COLOR_BLUE_GREEN = 0b10110100;
export const COLOR_CORNFLOWER_BLUE = 0b10100100; // Blue dialed back
