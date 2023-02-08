import { useTheme } from 'app/providers/ThemeProvider';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<div>
				<button onClick={toggleTheme}>Toggle theme</button>
			</div>

			<Link to="/">Main page</Link>
			<Link to="/about">About page</Link>

      <AppRouter /> 
		</div>
	);
};
