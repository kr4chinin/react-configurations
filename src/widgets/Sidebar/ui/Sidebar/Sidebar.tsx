import { useState } from 'react';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme, Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutUsIcon from 'shared/assets/icons/about_us.svg';
import HomeIcon from 'shared/assets/icons/home.svg';

interface SidebarProps {
	className?: string;
}

export const Sidebar = (props: SidebarProps) => {
	const { className } = props;

	const { t } = useTranslation();

	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			aria-label="sidebar"
			className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button
				square
				aria-label="toggle"
				size={ButtonSize.L}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				onClick={onToggle}
				className={styles['toggle-btn']}
			>
				{collapsed ? '>' : '<'}
			</Button>

			<div className={styles.items}>
				<AppLink
					className={styles.item}
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath[AppRoutes.ABOUT]}
				>
					<AboutUsIcon className={styles.icon} />
					<span className={styles.link}>{t('About')}</span>
				</AppLink>

				<AppLink
					className={styles.item}
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath[AppRoutes.MAIN]}
				>
					<HomeIcon className={styles.icon} />
					<span className={styles.link}>{t('Main')}</span>
				</AppLink>
			</div>

			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher shortLang={collapsed} />
			</div>
		</div>
	);
};
