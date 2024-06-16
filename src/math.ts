/**
 * Round a number to a specified digit place
 * @param num Number to round
 * @param precision The digit to round to
 * @returns Rounded number
 */
export function round(num: number, precision: number): number {
	if (!Number.isInteger(precision)) {
		precision = round(precision, 0);
	}
	let multiplyer = Math.pow(10, precision);
	return Math.round(num * multiplyer) / multiplyer;
}

/**
 * Add trailing decimal places to a number
 * @param num Number to add decimal places
 * @param decimals The number of decimal places to add
 * @returns Fixed number with specified decimal places
 */
export function fix(num: number, decimals: number): string {
	return round(num, decimals).toFixed(decimals);
}
