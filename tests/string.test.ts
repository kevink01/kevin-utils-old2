import { capitalize, ellipse, getInitials } from '../src/string';
import { expect, describe, it } from 'vitest';

describe('Capitalize string', () => {
	it('should return the empty string', () => {
		const expected = '';
		const actual = capitalize('');
		expect(actual).toEqual(expected);
	});

	it('should return the capital letter', () => {
		const expected = 'Z';
		const actual = capitalize('z');
		expect(actual).toEqual(expected);
	});

	it('should return the capitalization of one word', () => {
		const expected = 'Umbrella';
		const actual = capitalize('umbrella');
		expect(actual).toEqual(expected);
	});

	it('should only capitalize the first word', () => {
		const expected = 'Green bean';
		const actual = capitalize('green bean');
		expect(actual).toEqual(expected);
	});

	it('should return the same word when a capitalized word is provided', () => {
		const expected = 'Cookie';
		const actual = capitalize('Cookie');
		expect(actual).toEqual(expected);
	});
});

describe('Get initials', () => {
	it('should return the default initials when null', () => {
		const expected = 'AA';
		const actual = getInitials(undefined);
		expect(actual).toEqual(expected);
	});

	it('should return the default initials when empty', () => {
		const expected = 'AA';
		const actual = getInitials('');
		expect(actual).toEqual(expected);
	});

	it('should return the default initials when a space is provided', () => {
		const expected = 'AA';
		const actual = getInitials('  ');
		expect(actual).toEqual(expected);
	});

	it('should return the first initial of a lowercase name', () => {
		const expected = 'R';
		const actual = getInitials('robert');
		expect(actual).toEqual(expected);
	});

	it('should return the first initial of a capitalized name', () => {
		const expected = 'A';
		const actual = getInitials('Anna');
		expect(actual).toEqual(expected);
	});

	it('should return the initials of a full name with lowercase name', () => {
		const expected = 'AB';
		const actual = getInitials('anna banana');
		expect(actual).toEqual(expected);
	});

	it('should return the first initial with empty last name', () => {
		const expected = 'V';
		const actual = getInitials('victor ');
		expect(actual).toEqual(expected);
	});

	it('should return the initials of a full name with lowercase first name', () => {
		const expected = 'ES';
		const actual = getInitials('emma Smith');
		expect(actual).toEqual(expected);
	});

	it('should return the initials of a full name with lowercase last name', () => {
		const expected = 'HM';
		const actual = getInitials('Hannah martin');
		expect(actual).toEqual(expected);
	});

	it('should return the initials of a capitalized full name', () => {
		const expected = 'GS';
		const actual = getInitials('George Smith');
		expect(actual).toEqual(expected);
	});

	it('should return the initials of a full name with hyphenated last name', () => {
		const expected = 'AB';
		const actual = getInitials('Anna Banana-Orange');
		expect(actual).toEqual(expected);
	});

	it('should return the first two initials', () => {
		const expected = 'BR';
		const actual = getInitials('Blue Red Orange');
		expect(actual).toEqual(expected);
	});
});

describe('Ellipse text', () => {
	it('should not ellipse the empty string', () => {
		const expected = '';
		const actual = ellipse('', 0);
		expect(actual).toEqual(expected);
	});

	it('should ignore the max length for ', () => {
		const expected = '';
		const actual = ellipse('', 45);
		expect(actual).toEqual(expected);
	});

	it('should return the same string if the max length is negative', () => {
		const expected = 'Hello World!';
		const actual = ellipse('Hello World!', -5);
		expect(actual).toEqual(expected);
	});

	it('should return the same string if the max length is negative', () => {
		const expected = 'Hello World!';
		const actual = ellipse('Hello World!', -5);
		expect(actual).toEqual(expected);
	});

	it('should not ellipse when the max length is larger', () => {
		const expected = 'My name is Kevin';
		const actual = ellipse('My name is Kevin', 50);
		expect(actual).toEqual(expected);
	});

	it('should not ellipse when the max length equal', () => {
		const expected = 'My name is Kevin';
		const actual = ellipse('My name is Kevin', 16);
		expect(actual).toEqual(expected);
	});

	it('should ellipse with one over the max', () => {
		const expected = 'My name is Kevi...';
		const actual = ellipse('My name is Kevin', 15);
		expect(actual).toEqual(expected);
	});

	it('should ellipse with two over the max', () => {
		const expected = 'My name is Kev...';
		const actual = ellipse('My name is Kevn', 14);
		expect(actual).toEqual(expected);
	});

	it('should ellipse with three over the max', () => {
		const expected = 'My name is Ke...';
		const actual = ellipse('My name is Kevin', 13);
		expect(actual).toEqual(expected);
	});

	it('should trim the string when the last character(s) is a whitespace', () => {
		const expected = 'I am a fan of the...';
		const actual = ellipse('I am a fan of the sun', 18);
		expect(actual).toEqual(expected);
	});

	it('should trim multiple whitespaces', () => {
		const expected = 'I am a fan of the...';
		const actual = ellipse('I am a fan of the     sun', 22);
		expect(actual).toEqual(expected);
	});
});
