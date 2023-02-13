import { classNames } from './classNames';

describe('classNames', () => {
	test('with one first param', () => {
		expect(classNames('a')).toBe('a');
	});

	test('with additional class', () => {
		expect(classNames('a', {}, ['b'])).toBe('a b');
	});

	test('with additional classes', () => {
		expect(classNames('a', {}, ['b', 'c', 'd'])).toBe('a b c d');
	});

	test('with mods', () => {
		expect(classNames('a', { b: true, c: false, d: true }, [])).toBe('a b d');
	});

	test('with mods undefined', () => {
		expect(
			classNames(
				'a',
				{ a: undefined, b: undefined, c: true, d: undefined },
				[],
			),
		).toBe('a c');
	});

	test('with mods and additional classes', () => {
		expect(classNames('a', { b: true, c: false, d: true }, ['e', 'f'])).toBe(
			'a b d e f',
		);
	});
});
