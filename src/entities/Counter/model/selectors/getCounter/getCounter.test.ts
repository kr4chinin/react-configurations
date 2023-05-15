import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';

describe('getCounter', () => {
	test('should return the counter', () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 10,
			},
		};

		expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
	});
});
