import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
	className?: string;
	opened: boolean;
	onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
	const { opened, className, onClose } = props;

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			className={classNames(styles.LoginModal, {}, [className])}
		>
			<LoginForm />
		</Modal>
	);
};
