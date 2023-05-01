import { classNames } from 'shared/lib';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return <div className={classNames(styles.Navbar, {}, [className])}></div>;
};
