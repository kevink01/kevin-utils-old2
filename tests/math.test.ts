import { fix, round } from '../src/math';
import { expect, describe, it } from 'vitest';

describe('round numbers', () => {
	it('should round 0 to 0 decimal places', () => {
		const expected = 0;
		const actual = round(0, 0);
		expect(actual).toEqual(expected);
	});
	it('should round 13.92 to one decimal place', () => {
		const expected = 13.9;
		const actual = round(13.92, 1);
		expect(actual).toEqual(expected);
	});
	it('should add two zeroes to 13.9', () => {
		const expected = 13.9;
		const actual = round(13.9, 3);
		expect(actual).toEqual(expected);
	});
	it('should round a fractional decimal place', () => {
		const expected = 13.93;
		const actual = round(13.934, 1.7);
		expect(actual).toEqual(expected);
	});
	it('should round 8.345 with a negative decimal place', () => {
		const expected = 10;
		const actual = round(8.345, -1);
		expect(actual).toEqual(expected);
	});
	it('should round 8.3 to an integer', () => {
		const expected = 8;
		const actual = round(8.3, 0);
		expect(actual).toEqual(expected);
	});
	it('should round -8.3 up to -8', () => {
		const expected = -8;
		const actual = round(-8.3, 0);
		expect(actual).toEqual(expected);
	});
	it('should round -8.7 down to -9', () => {
		const expected = -9;
		const actual = round(-8.7, 0);
		expect(actual).toEqual(expected);
	});
});

describe('round numbers with fixed string format', () => {
	it('should round 0 to two decimal places', () => {
		const expected = '0.00';
		const actual = fix(0, 2);
		expect(actual).toEqual(expected);
	});
	it('should have 8.3 have four decimal places', () => {
		const expected = '8.3000';
		const actual = fix(8.3, 4);
		expect(actual).toEqual(expected);
	});
	it('should add trailing zeroes to an integer', () => {
		const expected = '13.00';
		const actual = fix(13, 2);
		expect(actual).toEqual(expected);
	});
	it('should add trailing zeroes to a decimal', () => {
		const expected = '13.40';
		const actual = fix(13.4, 2);
		expect(actual).toEqual(expected);
	});
});
