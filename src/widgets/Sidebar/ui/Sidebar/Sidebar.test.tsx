import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('should render', () => {
		componentRender(<Sidebar />);
		expect(screen.getByLabelText('sidebar')).toBeInTheDocument();
	});

	test('toggle works', () => {
		componentRender(<Sidebar />, {});
		const toggleBtn = screen.getByLabelText('toggle');
		fireEvent.click(toggleBtn);
		expect(screen.getByLabelText('sidebar')).toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(screen.getByLabelText('sidebar')).not.toHaveClass('collapsed');
	});
});
