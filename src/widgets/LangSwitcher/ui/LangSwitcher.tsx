import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
	const { className } = props;

	const { t } = useTranslation();

	return (
		<Button
			className={classNames('', {}, [className])}
			onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}
		>
			{t('Language')}
		</Button>
	);
};
