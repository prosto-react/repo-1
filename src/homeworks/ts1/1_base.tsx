/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */

export const removePlus = (str: string): string => str.replace(/^\+/, '');

export const addPlus = (str: string): string => `+${str}`;

export const removeFirstZeros = (value: string) => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value?: string | number, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2) => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export const getTransformFromCss = (transformCssString: string) => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = ([red, green, blue]: [number, number, number]) =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

export const getContrastType = (contrastValue: number): string => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | Error => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): [number, number, number] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

export const getNumberedArray = (arr: string[] | number[]) => arr.map((value, number) => ({ value, number }));

interface Item {
  value: string | number;
  number: number;
}

export const toStringArray = (arr: Item[]): string[] => {
  return arr.map((item) => item.value.toString());
};

interface Customer {
  id: string;
  name: string;
  age: number;
  isSubscribed: boolean;
}

export interface CustomerTransformed {
  name: string;
  age: number;
  isSubscribed: boolean;
}

export interface TransformedCustomers {
  [key: string]: CustomerTransformed;
}

export const transformCustomers = (
  customers: Customer[]
): { [key: string]: { name: string; age: number; isSubscribed: boolean } } => {
  return customers.reduce((acc, customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {} as TransformedCustomers);
};
