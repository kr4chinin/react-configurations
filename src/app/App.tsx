import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib';
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

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
