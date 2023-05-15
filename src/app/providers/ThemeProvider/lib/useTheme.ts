import { useContext, useLayoutEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
	theme: string;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	useLayoutEffect(() => {
		const localTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

		if (localTheme) {
			setTheme(localTheme);
			document.body.classList.add(localTheme);
		}
	}, [setTheme]);

	const toggleTheme = () => {
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

		document.body.classList.remove(Theme.LIGHT, Theme.DARK);
		document.body.classList.add(newTheme);
	};

	return {
		theme,
		toggleTheme,
	};
};
