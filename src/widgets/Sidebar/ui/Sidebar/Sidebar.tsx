import { useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = (props: SidebarProps) => {
	const { className } = props;

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
			<button onClick={onToggle}>Toggle</button>

			<div className={styles.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
};
