import { classNames } from 'shared/lib';
import styles from './LoginForm.module.scss';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
	const { className } = props;

	const { t } = useTranslation();

	return (
		<div className={classNames(styles.LoginForm, {}, [className])}>
			<input type="text" />
			<input type="text" />

			<Button>{t('Sign in')}</Button>
		</div>
	);
};
