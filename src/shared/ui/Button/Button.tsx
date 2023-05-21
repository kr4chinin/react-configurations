import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
}

export enum ButtonSize {
	M = 'size-m',
	L = 'size-l',
	XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
}

export const Button: FC<ButtonProps> = props => {
	const {
		children,
		className,
		theme = ButtonTheme.CLEAR,
		square = false,
		size = ButtonSize.M,
		...rest
	} = props;

	const mods: Record<string, boolean> = {
		[styles[theme]]: true,
		[styles.square]: square,
		[styles[size]]: true,
	};

	return (
		<button
			type="button"
			{...rest}
			className={classNames(styles.Button, mods, [className])}
		>
			{children}
		</button>
	);
};
