export const isIsogram = ( string ) => {
  string = string.toLowerCase().replace(/[\s-]/g , '')
  return new Set( string ).size === string.length
};
