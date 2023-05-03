import { classNames } from 'shared/lib';
import styles from './Modal.module.scss';
import { ReactNode } from 'react';

interface ModalProps {
	children: ReactNode;
	opened: boolean;
	className?: string;
	onClose: () => void;
}

export const Modal = (props: ModalProps) => {
	const { children, opened, className, onClose } = props;

	const mods: Record<string, boolean> = {
		[styles.opened]: opened,
	};

	return (
		<div className={classNames(styles.Modal, mods, [className])}>
			<div className={styles.content}>{children}</div>
			<div role="button" className={styles.overlay} onClick={onClose} />
		</div>
	);
};
