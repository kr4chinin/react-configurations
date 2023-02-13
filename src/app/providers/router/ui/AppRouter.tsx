import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
	const { t } = useTranslation();

	return (
		<Suspense fallback={<div>{t('Loading')}...</div>}>
			<Routes>
				{Object.values(routeConfig).map(route => (
					<Route key={route.path} {...route} />
				))}
			</Routes>
		</Suspense>
	);
};
