import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
	const { className } = props;

	return (
		<div className={classNames(styles.PageLoader, {}, [className])}>
			<Loader />
		</div>
	);
};
