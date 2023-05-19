import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
	const { className } = props;

	const { t } = useTranslation();

	return (
		<div className={classNames(styles.LoginForm, {}, [className])}>
			<Input type="text" placeholder={t('username_placeholder')} />
			<Input type="password" placeholder={t('password_placeholder')} />

			<Button className={styles['login-btn']} theme={ButtonTheme.OUTLINE}>
				{t('sign_in')}
			</Button>
		</div>
	);
};
