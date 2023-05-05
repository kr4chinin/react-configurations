// TODO: Remove when real auth will be implemented
/* eslint-disable i18next/no-literal-string */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const [authModalOpened, setAuthModalOpened] = useState(false);

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.BACKGROUND_INVERTED}
				onClick={() => setAuthModalOpened(true)}
			>
				{t('Sign in')}
			</Button>

			{authModalOpened && (
				<Modal
					opened={authModalOpened}
					onClose={() => setAuthModalOpened(false)}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
					similique beatae iure harum, ea earum sed omnis blanditiis! Ratione
					praesentium ipsa placeat, hic sunt explicabo nam excepturi porro nemo
					id!
				</Modal>
			)}
		</div>
	);
};
