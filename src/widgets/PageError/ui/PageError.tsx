import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import styles from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = (props: PageErrorProps) => {
	const { className } = props;

	const { t } = useTranslation();

	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<div className={classNames(styles.PageError, {}, [className])}>
			<h1 className={styles.title}>{t('something_went_wrong')}</h1>

			<Button onClick={reloadPage}>{t('reload')}</Button>
		</div>
	);
};
