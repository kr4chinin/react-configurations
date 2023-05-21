import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
	test('should render', () => {
		render(<Button theme="clear">Test</Button>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});

	test('should render with theme', () => {
		render(<Button theme="clear">Test</Button>);
		expect(screen.getByText('Test')).toHaveClass('clear');
	});
});
