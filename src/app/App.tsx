import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('App', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	);
};
