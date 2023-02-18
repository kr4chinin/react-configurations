import { useEffect, useState } from 'react';
import { Button } from 'shared/ui';

export const BugButton = () => {
	const [isError, setIsError] = useState(false);

	const throwError = () => {
		setIsError(true);
	};

	useEffect(() => {
		if (isError) {
			throw new Error('Test error from BugButton');
		}
	}, [isError]);

	// eslint-disable-next-line i18next/no-literal-string
	return <Button onClick={throwError}>✗</Button>;
};
