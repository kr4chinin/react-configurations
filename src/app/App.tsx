import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar /> 

			<div>
				<button onClick={toggleTheme}>Toggle theme</button>
			</div>

			<AppRouter />
		</div>
	);
};
