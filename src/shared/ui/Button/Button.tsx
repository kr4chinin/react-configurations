import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './Button.module.scss';

export type ButtonTheme = 'clear' | 'outline' | 'background';
export type ButtonSize = 'size-m' | 'size-l' | 'size-xl';

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
		theme = 'clear',
		square = false,
		size = 'size-m',
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
