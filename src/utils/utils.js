export function stringPriceToNumber(stringPrice) {
  return parseFloat(stringPrice.slice(1).replace(/,/g, "."));
}

export function replaceDot(number, decimals = 3) {
  return number.toFixed(3).replace(/\./g,",");
}
