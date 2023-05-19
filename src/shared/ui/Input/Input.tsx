import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'className' | 'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
	const { className, value, onChange, ...rest } = props;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(styles.Input, {}, [className])}>
			<input {...rest} value={value} onChange={handleChange} />
		</div>
	);
});
