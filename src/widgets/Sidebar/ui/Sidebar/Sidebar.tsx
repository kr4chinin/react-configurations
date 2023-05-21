import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SidebarCloseIcon from 'shared/assets/icons/Sidebar/sidebar_close.svg';
import SidebarOpenIcon from 'shared/assets/icons/Sidebar/sidebar_open.svg';
import AboutUsIcon from 'shared/assets/icons/about_us.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib';
import { AppLink, Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = (props: SidebarProps) => {
	const { className } = props;

	const { t } = useTranslation(['about', 'main']);

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
				theme={ButtonTheme.CLEAR}
				className={styles['toggle-btn']}
				onClick={onToggle}
			>
				<div className={styles['toggle-icon-wrapper']}>
					{collapsed ? <SidebarOpenIcon /> : <SidebarCloseIcon />}
				</div>
			</Button>

			<div className={styles.items}>
				<AppLink className={styles.item} to={RoutePath[AppRoutes.ABOUT]}>
					<AboutUsIcon className={styles.icon} />
					<span className={styles.link}>
						{t('about_us', {
							ns: 'about',
						})}
					</span>
				</AppLink>

				<AppLink className={styles.item} to={RoutePath[AppRoutes.MAIN]}>
					<HomeIcon className={styles.icon} />
					<span className={styles.link}>
						{t('main_page', {
							ns: 'main',
						})}
					</span>
				</AppLink>
			</div>

			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher shortLang={collapsed} />
			</div>
		</div>
	);
};
