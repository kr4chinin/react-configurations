import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
	className?: string;
}

export const AppLink: FC<AppLinkProps> = props => {
	const { className, children, ...rest } = props;

	return (
		<Link {...rest} className={classNames(styles.AppLink, {}, [className])}>
			{children}
		</Link>
	);
};
