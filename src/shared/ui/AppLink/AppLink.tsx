import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = props => {
	const { className, children, theme = AppLinkTheme.PRIMARY, ...rest } = props;

	return (
		<Link
			{...rest}
			className={classNames(styles.AppLink, {}, [className, styles[theme]])}
		>
			{children}
		</Link>
	);
};
