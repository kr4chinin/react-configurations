import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
	const { className } = props;

	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button className={classNames('', {}, [className])} onClick={toggle}>
			{t('Language')}
		</Button>
	);
};
