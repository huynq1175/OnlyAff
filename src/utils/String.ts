export function hexToRgbA(hex: string, opacity = 1) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      // @ts-ignore
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      opacity +
      ')'
    );
  }
  return '';
}

export function capitalize(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

export function keyHashes(str: string, seed = 0) {
  try {
    let h1 = 0xdeadbeef ^ seed,
      h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 =
      Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
      Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 =
      Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
      Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  } catch (e: any) {
    console.warn(e);
    return undefined;
  }
}

export function convertToShortNumber(num: number): string {
  if (num >= 1000) {
    const suffixes: string[] = ['', 'k', 'm', 'b', 't'];
    const suffixNum: number = Math.floor((num.toString().length - 1) / 3);
    let shortNum: number = parseFloat(
      (suffixNum !== 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(3)
    );
    if (shortNum % 1 !== 0) {
      shortNum = Number(shortNum.toFixed(1));
    }
    return `${shortNum}${suffixes[suffixNum]}`;
  }
  return num.toString();
}

export const randomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    const randomValue = Math.floor(randomIndex / 2) + 4;
    const hexValue = letters[randomValue];
    color += hexValue + hexValue;
  }
  return color;
};
