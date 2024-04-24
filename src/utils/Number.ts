import Lodash, {parseInt} from 'lodash';

export const safeParseFloat = (strNumber?: string | null) => {
  let numParse = 0;
  if (strNumber === '' || strNumber === null || strNumber === undefined) {
    return numParse;
  }

  numParse = parseFloat(strNumber);
  if (numParse === null) {
    numParse = 0;
  }

  return numParse;
};

export const safeParseInt = (strNumber: string | null | undefined | number) => {
  let numParse = 0;
  if (strNumber === '' || strNumber === null || strNumber === undefined) {
    return numParse;
  }
  if (typeof strNumber === 'string') {
    numParse = parseInt(strNumber, 10);
  }
  if (typeof strNumber === 'number') {
    numParse = strNumber;
  }
  if (numParse === null || Lodash.isNaN(numParse)) {
    numParse = 0;
  }

  return numParse;
};

/**
 * Làm tròn số xuống tới chữ số thập phân thứ nhất
 * @param num
 */
export function floorToDecimal(num: number): number {
  return Math.floor(num * 10) / 10;
}

/**
 * Làm tròn số lên tới chữ số thập phân thứ nhất
 * @param num
 */
export function ceilToDecimal(num: number): number {
  return Math.ceil(num * 10) / 10;
}

export function toCurrency(
  num: number,
  locales = 'en-US',
  currency = 'USD'
): string {
  return num.toLocaleString(locales, {style: 'currency', currency: currency});
}

export function intoNumbers(str: string, separator = '-'): number[] {
  try {
    return str.split(separator).map(Number);
  } catch (e) {
    return [0, 0];
  }
}

export function ensureNumber(param: any, defaultValue = 0) {
  // Kiểm tra xem param có phải là số hoặc có thể chuyển đổi thành số không
  if (typeof param === 'number' && !isNaN(param)) {
    return param;
  }
  // Trả về defaultValue nếu param không phải là số
  return defaultValue;
}
