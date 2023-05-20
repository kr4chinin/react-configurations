import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

interface LangSwitcherProps {
	className?: string;
	shortLang?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
	const { className, shortLang } = props;

	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button className={classNames('', {}, [className])} onClick={toggle}>
			{shortLang ? t('short_language') : t('language')}
		</Button>
	);
};
