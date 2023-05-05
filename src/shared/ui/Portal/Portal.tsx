import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
}

export const Portal = (props: PortalProps) => {
	const { children } = props;

	const [container] = useState(() => document.createElement('div'));

	useEffect(() => {
		document.body.appendChild(container);

		return () => {
			document.body.removeChild(container);
		};
	}, [container]);

	return createPortal(children, container);
};
