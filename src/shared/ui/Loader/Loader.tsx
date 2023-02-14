import { classNames } from 'shared/lib';
import styles from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

export const Loader = (props: LoaderProps) => {
	const { className } = props;

	return (
		<div className={classNames(styles.Loader, {}, [className])}>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
