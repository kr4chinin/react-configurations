import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('should render', () => {
		render(<Sidebar />);
		expect(screen.getByLabelText('sidebar')).toBeInTheDocument();
	});

	test('toggle works', () => {
		render(<Sidebar />);
		const toggleBtn = screen.getByLabelText('toggle');
		fireEvent.click(toggleBtn);
		expect(screen.getByLabelText('sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByLabelText('sidebar')).not.toHaveClass('collapsed');
	});
});
