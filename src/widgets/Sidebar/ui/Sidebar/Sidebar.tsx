import { useState } from 'react';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = (props: SidebarProps) => {
	const { className } = props;

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

			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher shortLang={collapsed} />
			</div>
		</div>
	);
};
