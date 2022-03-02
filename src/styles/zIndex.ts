export const Z_INDEX_BASE = 10000;

const map = ["null", "default", "chat-window", "chat-header"];

export const zIndex = (indexPosition: string): number =>
  map.findIndex((position) => position === indexPosition) + Z_INDEX_BASE;
