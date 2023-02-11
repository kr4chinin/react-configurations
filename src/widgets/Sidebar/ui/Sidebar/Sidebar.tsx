import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = (props: SidebarProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			className={classNames(
				styles.Sidebar,
				{ [styles.collapsed]: collapsed },
				[className]
			)}
		>
			<Button onClick={onToggle} className={styles['toggle-btn']}>
				{collapsed ? t('Expand') : t('Collapse')}
			</Button>

			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
