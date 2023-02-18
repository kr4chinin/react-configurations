import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/config';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.MAIN]}>
					{t('Main')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.ABOUT]}>
					{t('About')}
				</AppLink>
			</div>
		</div>
	);
};
