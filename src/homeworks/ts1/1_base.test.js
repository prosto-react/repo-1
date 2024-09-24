/* eslint-disable prettier/prettier */
// Этот блок кода удалить и раскомментировать код ниже

import {
  removePlus,
  addPlus,
  removeFirstZeros,
  getBeautifulNumber,
  round,
  getTransformFromCss,
  getColorContrastValue,
  getContrastType,
  checkColor,
  hex2rgb,
  getNumberedArray,
  toStringArray,
  transformCustomers,
} from './1_base';

describe('all', () => {
  it('removePlus should remove leading "+"', () => {
    expect(removePlus('+123')).toBe('123');
    expect(removePlus('456')).toBe('456');
  });

  it('addPlus should add leading "+"', () => {
    expect(addPlus('123')).toBe('+123');
    expect(addPlus('')).toBe('+');
  });

  it('removeFirstZeros should remove leading zeros', () => {
    expect(removeFirstZeros('00123')).toBe('123');
    expect(removeFirstZeros('-00123')).toBe('-123');
  });

  it('getBeautifulNumber should format number with separator', () => {
    expect(getBeautifulNumber(1234567)).toBe('1 234 567');
    expect(getBeautifulNumber(1234567, ',')).toBe('1,234,567');
  });

  it('round should round numbers to a given accuracy', () => {
    expect(round(1.2345, 2)).toBe(1.23);
    expect(round(1.2345, 3)).toBe(1.235);
  });

  it('getTransformFromCss should extract x and y values from transform string', () => {
    const transformString = 'matrix(1, 0, 0, 1, 50, 100)';
    expect(getTransformFromCss(transformString)).toEqual({ x: 50, y: 100 });
  });

  it('getColorContrastValue should return correct contrast value', () => {
    expect(getColorContrastValue([255, 255, 255])).toBe(255); // white
    expect(getColorContrastValue([0, 0, 0])).toBe(0); // black
  });

  it('getContrastType should return black or white based on contrast value', () => {
    expect(getContrastType(126)).toBe('black');
    expect(getContrastType(124)).toBe('white');
  });

  it('checkColor should throw an error for invalid colors', () => {
    expect(() => checkColor('#zzz')).toThrow('invalid hex color: #zzz');
    expect(() => checkColor('#123456')).not.toThrow();
  });

  it('hex2rgb should convert hex color to RGB', () => {
    expect(hex2rgb('#ffffff')).toEqual([255, 255, 255]);
    expect(hex2rgb('#000')).toEqual([0, 0, 0]);
  });

  it('getNumberedArray should return array with numbered elements', () => {
    expect(getNumberedArray([1, 2, 3])).toEqual([
      { value: 1, number: 0 },
      { value: 2, number: 1 },
      { value: 3, number: 2 },
    ]);
  });

  it('toStringArray should convert array of objects to strings', () => {
    const arr = [
      { value: 1, number: 0 },
      { value: 2, number: 1 },
    ];
    expect(toStringArray(arr)).toEqual(['1_0', '2_1']);
  });

  it('transformCustomers', () => {
    const customers = [
      { id: 1, name: 'John', age: 25, isSubscribed: true },
      { id: 2, name: 'Mary', age: 40, isSubscribed: false },
      { id: 3, name: 'Bob', age: 32, isSubscribed: true },
      { id: 4, name: 'Alice', age: 22, isSubscribed: true },
      { id: 5, name: 'David', age: 48, isSubscribed: false },
    ];

    expect(transformCustomers(customers)).toEqual({
      1: { name: 'John', age: 25, isSubscribed: true },
      2: { name: 'Mary', age: 40, isSubscribed: false },
      3: { name: 'Bob', age: 32, isSubscribed: true },
      4: { name: 'Alice', age: 22, isSubscribed: true },
      5: { name: 'David', age: 48, isSubscribed: false },
    });
  });
});
