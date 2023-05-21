import {
	ChangeEvent,
	InputHTMLAttributes,
	memo,
	useLayoutEffect,
	useState,
} from 'react';
import { classNames } from 'shared/lib';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'className' | 'value' | 'onChange' | 'autoFocus'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	autoFocus?: boolean;
	onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
	const { className, value, autoFocus, onChange, ...rest } = props;

	const [ref, setRef] = useState<HTMLInputElement>(null);

	useLayoutEffect(() => {
		if (autoFocus && ref) {
			ref.focus();
		}
	}, [autoFocus, ref]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(styles.Input, {}, [className, styles.wrapper])}>
			<input
				ref={setRef}
				className={styles.input}
				{...rest}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
});
