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

export const COLOR_MAGENTA_DIM = 0b10010001;
export const COLOR_MAGENTA_MEDIUM = 0b10100010;
export const COLOR_MAGENTA_BRIGHT = 0b10110011;

export const COLOR_CYAN_DIM = 0b10010100;
export const COLOR_CYAN_MEDIUM = 0b10101000;
export const COLOR_CYAN_BRIGHT = 0b10111100;
