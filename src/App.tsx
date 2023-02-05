import cn from 'classnames';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={cn('app', theme)}>
			<div>
				<button onClick={toggleTheme}>Toggle theme</button>
			</div>

			<Link to="/">Main page</Link>
			<Link to="/about">About page</Link>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPageAsync />} />
					<Route path="/about" element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};
