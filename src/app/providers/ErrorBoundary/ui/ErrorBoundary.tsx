import { Component, ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';
import { PageLoader } from 'widgets/PageLoader';

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error(error, errorInfo);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError)
			return (
				<Suspense fallback={<PageLoader />}>
					<PageError />
				</Suspense>
			);

		return children;
	}
}
