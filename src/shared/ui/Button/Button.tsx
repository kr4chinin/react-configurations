import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = props => {
	const { children, className, theme = ButtonTheme.CLEAR, ...rest } = props;

	return (
		<button
			{...rest}
			className={classNames(styles.Button, {}, [styles[theme], className])}
		>
			{children}
		</button>
	);
};
