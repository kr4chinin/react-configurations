import { Suspense } from 'react';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

export const App = () => {
	return (
		<div className={classNames('App')}>
			<Suspense fallback="">
				<Navbar />
				<div className="Content">
					<Sidebar />

					<div className="Page">
						<AppRouter />
					</div>
				</div>
			</Suspense>
		</div>
	);
};
