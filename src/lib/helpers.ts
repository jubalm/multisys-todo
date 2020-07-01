// simple string generator to make unique ids (set to 6 digits)
export const makeId = () => (+new Date).toString(36).slice(-6);
