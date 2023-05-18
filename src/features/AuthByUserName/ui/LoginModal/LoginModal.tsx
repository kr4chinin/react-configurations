import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
	className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
	const { className } = props;

	return (
		<Modal
			opened={false}
			onClose={() => {}}
			className={classNames(styles.LoginModal, {}, [className])}
		>
			<LoginForm />
		</Modal>
	);
};
