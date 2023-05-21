import { LoginModal } from 'features/AuthByUserName';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const [authModalOpened, setAuthModalOpened] = useState(false);

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<Button onClick={() => setAuthModalOpened(true)}>{t('sign_in')}</Button>

			{authModalOpened && (
				<LoginModal
					opened={authModalOpened}
					onClose={() => setAuthModalOpened(false)}
				/>
			)}
		</div>
	);
};
