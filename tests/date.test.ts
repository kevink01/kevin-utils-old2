import { msToTime, msToTimestamp, dateToUTC } from '../src/date';
import { expect, describe, it } from 'vitest';

describe('msToTime', () => {
	it('should return "00:00" for negative inputs', () => {
		const expected: string = '0:00';
		const actual = msToTimestamp(-100);
		expect(actual).toEqual(expected);
	});

	it('should return "00:00" for 0 ms', () => {
		const expected: string = '0:00';
		const actual = msToTimestamp(0);
		expect(actual).toEqual(expected);
	});

	it('should return "00:00" for positive numbers less than 1000', () => {
		const expected: string = '0:00';
		const actual = msToTimestamp(500);
		expect(actual).toEqual(expected);
	});

	it('should pad the timestamp for singular seconds', () => {
		const expected: string = '0:03';
		const actual = msToTimestamp(3_000);
		expect(actual).toEqual(expected);
	});

	it('should return the timestamp for seconds', () => {
		const expected: string = '0:45';
		const actual = msToTimestamp(45_000);
		expect(actual).toEqual(expected);
	});

	it('should clamp any fractional seconds', () => {
		const expected: string = '0:05';
		const actual = msToTimestamp(5_492);
		expect(actual).toEqual(expected);
	});

	it('should return a minute:second timestamp (singular seconds)', () => {
		const expected: string = '1:02';
		const actual = msToTimestamp(62_000);
		expect(actual).toEqual(expected);
	});

	it('should return a minute:second timestamp', () => {
		const expected: string = '1:14';
		const actual = msToTimestamp(74_000);
		expect(actual).toEqual(expected);
	});

	it('should return a double digit minute timestamp', () => {
		const expected: string = '11:14';
		const actual = msToTimestamp(674_000);
		expect(actual).toEqual(expected);
	});

	it('should return exactly a one hour timestamp', () => {
		const expected: string = '1:00:00';
		const actual = msToTimestamp(3_600_000);
		expect(actual).toEqual(expected);
	});

	it('should return hour timestamp with some seconds', () => {
		const expected: string = '1:00:05';
		const actual = msToTimestamp(3_605_000);
		expect(actual).toEqual(expected);
	});

	it('should return padding for hour:minute:seconds timestamp', () => {
		const expected: string = '1:03:00';
		const actual = msToTimestamp(3_780_000);
		expect(actual).toEqual(expected);
	});

	it('should return an hour:minute:second timestamp', () => {
		const expected: string = '1:14:34';
		const actual = msToTimestamp(4_474_000);
		expect(actual).toEqual(expected);
	});
});

describe('msToTimestamp', () => {
	it('should return 0 seconds for negative input', () => {
		const expected: string = '0 seconds';
		const actual = msToTime(-100);
		expect(actual).toEqual(expected);
	});

	it('should return 0 seconds for 0 milliseconds', () => {
		const expected: string = '0 seconds';
		const actual = msToTime(0);
		expect(actual).toEqual(expected);
	});

	it('should return 0 seconds for positive numbers less than 1000', () => {
		const expected: string = '0 seconds';
		const actual = msToTime(500);
		expect(actual).toEqual(expected);
	});

	it('should return seconds string without plurality', () => {
		const expected: string = '1 second';
		const actual = msToTime(1_000);
		expect(actual).toEqual(expected);
	});

	it('should return the number of seconds', () => {
		const expected: string = '4 seconds';
		const actual = msToTime(4_000);
		expect(actual).toEqual(expected);
	});

	it('should clamp the number of seconds', () => {
		const expected: string = '4 seconds';
		const actual = msToTime(4_500);
		expect(actual).toEqual(expected);
	});

	it('should include double-digit seconds', () => {
		const expected: string = '45 seconds';
		const actual = msToTime(45_000);
		expect(actual).toEqual(expected);
	});

	it('should only include 1 minute', () => {
		const expected: string = '1 minute';
		const actual = msToTime(60_000);
		expect(actual).toEqual(expected);
	});

	it('should only include 1 minute with leftover milliseconds', () => {
		const expected: string = '1 minute';
		const actual = msToTime(60_200);
		expect(actual).toEqual(expected);
	});

	it('should not have plurality for minutes and seconds', () => {
		const expected: string = '1 minute and 1 second';
		const actual = msToTime(61_000);
		expect(actual).toEqual(expected);
	});

	it('should only include minute and seconds', () => {
		const expected: string = '1 minute and 14 seconds';
		const actual = msToTime(74_000);
		expect(actual).toEqual(expected);
	});

	it('should include plurality for minutes', () => {
		const expected: string = '2 minutes';
		const actual = msToTime(120_000);
		expect(actual).toEqual(expected);
	});

	it('should include plurality for minutes but not for seconds', () => {
		const expected: string = '2 minutes and 1 second';
		const actual = msToTime(121_000);
		expect(actual).toEqual(expected);
	});

	it('should include plurality for both minutes and seconds', () => {
		const expected: string = '3 minutes and 5 seconds';
		const actual = msToTime(185_000);
		expect(actual).toEqual(expected);
	});

	it('should include double-digit minutes', () => {
		const expected: string = '12 minutes and 23 seconds';
		const actual = msToTime(743_000);
		expect(actual).toEqual(expected);
	});

	it('should be exactly "1 hour"', () => {
		const expected: string = '1 hour';
		const actual = msToTime(3_600_000);
		expect(actual).toEqual(expected);
	});

	it('should be exactly "1 hour" with extra milliseconds', () => {
		const expected: string = '1 hour';
		const actual = msToTime(3_600_400);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for hours and seconds', () => {
		const expected: string = '1 hour and 1 second';
		const actual = msToTime(3_601_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for hours but for seconds', () => {
		const expected: string = '1 hour and 5 seconds';
		const actual = msToTime(3_605_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for hours but for double-digit seconds', () => {
		const expected: string = '1 hour and 13 seconds';
		const actual = msToTime(3_613_000);
		expect(actual).toEqual(expected);
	});

	it('should include plurality for both hours seconds', () => {
		const expected: string = '3 hours and 12 seconds';
		const actual = msToTime(10_812_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for hours and minutes', () => {
		const expected: string = '1 hour and 1 minute';
		const actual = msToTime(3_660_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for hours but for minutes', () => {
		const expected: string = '1 hour and 4 minutes';
		const actual = msToTime(3_840_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for hours but for double-digit minutes', () => {
		const expected: string = '1 hour and 12 minutes';
		const actual = msToTime(4_320_000);
		expect(actual).toEqual(expected);
	});

	it('should include plurality for both hours minutes', () => {
		const expected: string = '3 hours and 12 minutes';
		const actual = msToTime(11_520_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for hours, minutes, and seconds', () => {
		const expected: string = '1 hour 1 minute and 1 second';
		const actual = msToTime(3_661_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for both hours and minutes, but for seconds', () => {
		const expected: string = '1 hour 1 minute and 4 seconds';
		const actual = msToTime(3_664_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for both hours and minutes, but for double-digit seconds', () => {
		const expected: string = '1 hour 1 minute and 13 seconds';
		const actual = msToTime(3_673_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for both hours and seconds, but for minutes', () => {
		const expected: string = '1 hour 3 minutes and 1 second';
		const actual = msToTime(3_781_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for both hours and seconds, but for double-digit minutes', () => {
		const expected: string = '1 hour 11 minutes and 1 second';
		const actual = msToTime(4_261_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for hours but for minutes and seconds', () => {
		const expected: string = '1 hour 4 minutes and 6 seconds';
		const actual = msToTime(3_846_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for minutes but for hours and seconds', () => {
		const expected: string = '2 hours 1 minute and 6 seconds';
		const actual = msToTime(7_266_000);
		expect(actual).toEqual(expected);
	});

	it('should not include plurality for seconds but for hours and minutes', () => {
		const expected: string = '2 hours 4 minutes and 1 second';
		const actual = msToTime(7_441_000);
		expect(actual).toEqual(expected);
	});

	it('should include plurality for hours, minutes, and seconds', () => {
		const expected: string = '2 hours 4 minutes and 8 seconds';
		const actual = msToTime(7_448_000);
		expect(actual).toEqual(expected);
	});
});

describe('Convert timezone dates to UTC dates', () => {
	it('should convert an New York timezone date to UTC', () => {
		const date = new Date('2024-02-17T19:23:00.000-4:00');
		const expected = new Date(
			Date.UTC(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate(),
				date.getUTCHours(),
				date.getUTCMinutes(),
				date.getUTCSeconds(),
				date.getUTCMilliseconds(),
			),
		);
		const actual = dateToUTC(date);
		expect(actual.toLocaleString()).toEqual(expected.toLocaleString());
		expect(actual.getFullYear()).toEqual(expected.getFullYear());
		expect(actual.getMonth()).toEqual(expected.getMonth());
		expect(actual.getDate()).toEqual(expected.getDate());
		expect(actual.getDay()).toEqual(expected.getDay());
		expect(actual.getHours()).toEqual(expected.getHours());
		expect(actual.getMinutes()).toEqual(expected.getMinutes());
		expect(actual.getSeconds()).toEqual(expected.getSeconds());
		expect(actual.getMilliseconds()).toEqual(expected.getMilliseconds());
	});

	it('should convert an Tokyo timezone date to UTC', () => {
		const date = new Date('2024-02-17T19:23:00.000+9:00');
		const expected = new Date(
			Date.UTC(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate(),
				date.getUTCHours(),
				date.getUTCMinutes(),
				date.getUTCSeconds(),
				date.getUTCMilliseconds(),
			),
		);
		const actual = dateToUTC(date);
		expect(actual.toLocaleString()).toEqual(expected.toLocaleString());
		expect(actual.getFullYear()).toEqual(expected.getFullYear());
		expect(actual.getMonth()).toEqual(expected.getMonth());
		expect(actual.getDate()).toEqual(expected.getDate());
		expect(actual.getDay()).toEqual(expected.getDay());
		expect(actual.getHours()).toEqual(expected.getHours());
		expect(actual.getMinutes()).toEqual(expected.getMinutes());
		expect(actual.getSeconds()).toEqual(expected.getSeconds());
		expect(actual.getMilliseconds()).toEqual(expected.getMilliseconds());
	});

	it('should convert an Mumbai timezone date to UTC', () => {
		const date = new Date('2024-02-17T19:23:00.000+7:30');
		const expected = new Date(
			Date.UTC(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate(),
				date.getUTCHours(),
				date.getUTCMinutes(),
				date.getUTCSeconds(),
				date.getUTCMilliseconds(),
			),
		);
		const actual = dateToUTC(date);
		expect(actual.toLocaleString()).toEqual(expected.toLocaleString());
		expect(actual.getFullYear()).toEqual(expected.getFullYear());
		expect(actual.getMonth()).toEqual(expected.getMonth());
		expect(actual.getDate()).toEqual(expected.getDate());
		expect(actual.getDay()).toEqual(expected.getDay());
		expect(actual.getHours()).toEqual(expected.getHours());
		expect(actual.getMinutes()).toEqual(expected.getMinutes());
		expect(actual.getSeconds()).toEqual(expected.getSeconds());
		expect(actual.getMilliseconds()).toEqual(expected.getMilliseconds());
	});

	it('should roll over to the next day', () => {
		const date = new Date('2024-02-17T23:30:00.000-4:00');
		const expected = new Date(
			Date.UTC(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate(),
				date.getUTCHours(),
				date.getUTCMinutes(),
				date.getUTCSeconds(),
				date.getUTCMilliseconds(),
			),
		);
		const actual = dateToUTC(date);
		expect(actual.toLocaleString()).toEqual(expected.toLocaleString());
		expect(actual.getDate()).toEqual(expected.getDate());
		expect(actual.getDay()).toEqual(expected.getDay());
	});

	it('should roll over to the next month', () => {
		const date = new Date('2024-01-31T23:30:00.000-4:00');
		const expected = new Date(
			Date.UTC(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate(),
				date.getUTCHours(),
				date.getUTCMinutes(),
				date.getUTCSeconds(),
				date.getUTCMilliseconds(),
			),
		);
		const actual = dateToUTC(date);
		expect(actual.toLocaleString()).toEqual(expected.toLocaleString());
		expect(actual.getMonth()).toEqual(expected.getMonth());
	});

	it('should roll over to the next year', () => {
		const date = new Date('2023-12-31T23:30:00.000-4:00');
		const expected = new Date(
			Date.UTC(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate(),
				date.getUTCHours(),
				date.getUTCMinutes(),
				date.getUTCSeconds(),
				date.getUTCMilliseconds(),
			),
		);
		const actual = dateToUTC(date);
		expect(actual.toLocaleString()).toEqual(expected.toLocaleString());
		expect(actual.getMonth()).toEqual(expected.getMonth());
	});
});
