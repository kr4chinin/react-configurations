import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('should render', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByLabelText('sidebar')).toBeInTheDocument();
	});

	test('toggle works', () => {
		renderWithTranslation(<Sidebar />);
		const toggleBtn = screen.getByLabelText('toggle');
		fireEvent.click(toggleBtn);
		expect(screen.getByLabelText('sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByLabelText('sidebar')).not.toHaveClass('collapsed');
	});
});
