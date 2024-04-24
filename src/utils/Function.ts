import {memoize} from 'lodash';

export function jsonParse<TData = Record<string, any>>(
  value: string | any
): TData {
  try {
    if (typeof value === 'string') {
      return JSON.parse(value) as TData;
    }
    return value as unknown as TData;
  } catch (e) {
    return {} as TData;
  }
}

export const isValidColor = (strColor: string): boolean => {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(strColor);
};

export const adjustUrl = (url: string) => {
  if (!url.startsWith('https')) {
    if (url.startsWith('http')) {
      url = url.replace('http', 'https');
    } else {
      url = 'https://'.concat(url);
    }
  }

  return url;
};

export const mapToJson = (map: Map<number | string, any>) => {
  const out = Object.create(null);
  map.forEach((value, key) => {
    if (value instanceof Map) {
      out[key] = mapToJson(value);
    } else {
      out[key] = value;
    }
  });
  return out;
};

export const invertColor = memoize(
  (hex: string, bw = true, white = '#ffffff', black = '#000000') => {
    let color = hex?.toLowerCase();

    if (color.indexOf('#') === 0) {
      color = color.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (color.length === 3) {
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }

    if (color.length !== 6 && color.length !== 8) {
      console.error(new Error('Invalid HEX color. ' + color));
      return black;
    }
    const r = parseInt(color.slice(0, 2), 16),
      g = parseInt(color.slice(2, 4), 16),
      b = parseInt(color.slice(4, 6), 16),
      a =
        color.length === 8
          ? parseFloat((parseInt(color.slice(6, 8), 16) / 255).toFixed(2))
          : 1;

    const combinedR = r * a + 255 * (1 - a);
    const combinedG = g * a + 255 * (1 - a);
    const combinedB = b * a + 255 * (1 - a);
    if (bw) {
      // https://stackoverflow.com/a/3943023/112731
      return combinedR * 0.299 + combinedG * 0.587 + combinedB * 0.114 > 186
        ? black
        : white;
    }
    // invert color components
    const red = (255 - combinedR).toString(16);
    const green = (255 - combinedG).toString(16);
    const blue = (255 - combinedB).toString(16);
    // pad each with zeros and return
    return '#' + padZero(red) + padZero(green) + padZero(blue);
  },
  (hex, bw, white, black) => `${hex}:${bw}:${white}:${black}`
);

function padZero(str: string, len = 2) {
  const zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

export const isURL = (strURL: string) => {
  const regexp =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(strURL);
};

export const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

export const isValidEmail = (email: string) => {
  if (!email) {
    return true;
  }
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const isRgbColor = (color: string): boolean => {
  const rgb = color.match(
    /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
  );

  return !!rgb && rgb.length === 4;
};

export const rgbToHex = (color: string) => {
  const rgb = color.match(
    /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
  );
  return rgb && rgb.length === 4
    ? '#' +
        ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
    : '';
};

export const wait = async (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
