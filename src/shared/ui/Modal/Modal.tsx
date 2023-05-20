import { ReactNode, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
	children: ReactNode;
	opened: boolean;
	className?: string;
	onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
	const { children, opened, className, onClose } = props;

	const [closing, setClosing] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

	const mods: Record<string, boolean> = {
		[styles.opened]: opened,
		[styles.closing]: closing,
	};

	const handleClickOnOverlay = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		setClosing(true);

		timeoutRef.current = setTimeout(() => {
			onClose();
			setClosing(false);
		}, ANIMATION_DELAY);
	};

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return opened ? (
		<Portal>
			<div className={classNames(styles.Modal, mods, [className])}>
				<div className={styles.content}>{children}</div>
				<div
					role="button"
					className={styles.overlay}
					onClick={handleClickOnOverlay}
				/>
			</div>
		</Portal>
	) : null;
};
