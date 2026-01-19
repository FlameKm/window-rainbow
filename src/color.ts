const simpleHash = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const hexHash = Math.abs(hash).toString(16).padStart(6, '0');
  return hexHash.substring(0, 6);
};

const toHex = (decimal: number): string => decimal.toString(16).padStart(2, '0');

const generateRandomColor = (seed: string): string => {
  const hash = simpleHash(seed);
  const r = parseInt(hash.substring(0, 2), 16);
  const g = parseInt(hash.substring(2, 4), 16);
  const b = parseInt(hash.substring(4, 6), 16);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const toDarkColor = (color: string): string[] => {
  const changeColor0 = (code: number) => parseInt((code / 8 + 60).toString());
  const changeColor1 = (code: number) => parseInt((code / 8 + 48).toString());
  const changeColor2 = (code: number) => parseInt((code / 8 + 36).toString());
  const changeColor3 = (code: number) => parseInt((code / 8 + 24).toString());
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);
  return [
    `#${toHex(changeColor0(r))}${toHex(changeColor0(g))}${toHex(changeColor0(b))}` + 'dd',
    `#${toHex(changeColor1(r))}${toHex(changeColor1(g))}${toHex(changeColor1(b))}` + 'aa',
    `#${toHex(changeColor2(r))}${toHex(changeColor2(g))}${toHex(changeColor2(b))}` + '33',
    `#${toHex(changeColor3(r))}${toHex(changeColor3(g))}${toHex(changeColor3(b))}` + '88',
  ];
};

const toLightColor = (color: string): string[] => {
  const changeColor0 = (code: number) => parseInt((255 - 60 - code / 8).toString());
  const changeColor1 = (code: number) => parseInt((255 - 48 - code / 8).toString());
  const changeColor2 = (code: number) => parseInt((255 - 36 - code / 8).toString());
  const changeColor3 = (code: number) => parseInt((255 - 24 - code / 8).toString());
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);
  return [
    `#${toHex(changeColor0(r))}${toHex(changeColor0(g))}${toHex(changeColor0(b))}` + 'dd',
    `#${toHex(changeColor1(r))}${toHex(changeColor1(g))}${toHex(changeColor1(b))}` + 'aa',
    `#${toHex(changeColor2(r))}${toHex(changeColor2(g))}${toHex(changeColor2(b))}` + '33',
    `#${toHex(changeColor3(r))}${toHex(changeColor3(g))}${toHex(changeColor3(b))}` + '88',
  ];
};

export { generateRandomColor, toDarkColor, toLightColor };