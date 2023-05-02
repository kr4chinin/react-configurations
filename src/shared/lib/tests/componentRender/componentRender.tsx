import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

interface ComponentRenderOptions {
	route?: string;
}

export const componentRender = (
	component: ReactNode,
	options: ComponentRenderOptions = {},
) => {
	const { route = '/' } = options;

	return render(
		<MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>,
	);
};
