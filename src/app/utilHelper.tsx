export class UtilHelper {
  /**
   * Remove all undefined and empty values from object
   */
  static removeUndefined(values: any) {
    Object.keys(values).forEach(
      key =>
        (values[key] == null || values[key].length === 0) && delete values[key]
    );
  }

  /**
   * Check if string has number
   * @returns {boolean}
   */
  static hasNumber(string: string) {
    return /\d/.test(string);
  }

  /**
   * Check if a value is a number
   * @returns {boolean}
   */
  static isNumber(value: any) {
    return !Number.isNaN(Number(value));
  }

  /** Check is the value an empty array */
  static isEmptyArray = (value: any[]) =>
    Array.isArray(value) && value.length === 0;

  static sortByName = (a: { name: string }, b: { name: string }) => {
    return (a.name && a.name.toLowerCase()) < (b.name && b.name.toLowerCase())
      ? -1
      : 1;
  };
}

/**
 * Parse value to a fixed number of decimals
 * * Default decimals 0
 */
export const toDecimal = (value: number, decimals: number = 0) => {
  return parseFloat(value.toFixed(decimals));
};
