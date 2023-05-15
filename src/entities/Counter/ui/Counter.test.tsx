import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
	test('should render', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});
		expect(screen.getByLabelText('value')).toBeInTheDocument();
		expect(screen.getByLabelText('value')).toHaveTextContent('10');
	});

	test('increment', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});

		fireEvent.click(screen.getByLabelText('increment button'));
		expect(screen.getByLabelText('value')).toHaveTextContent('11');

		fireEvent.click(screen.getByLabelText('increment button'));
		expect(screen.getByLabelText('value')).toHaveTextContent('12');
	});

	test('decrement', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});

		fireEvent.click(screen.getByLabelText('decrement button'));
		expect(screen.getByLabelText('value')).toHaveTextContent('9');

		fireEvent.click(screen.getByLabelText('decrement button'));
		expect(screen.getByLabelText('value')).toHaveTextContent('8');
	});
});
