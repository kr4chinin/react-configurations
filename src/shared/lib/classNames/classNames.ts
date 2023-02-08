type Mods = Record<string, boolean>;

export const classNames = (
	cls: string,
	mods: Mods = {},
	additional: string[] = []
) => {
	return [
		cls,
		...Object.entries(mods).reduce(
			(modsClasslist, [cls, value]) =>
				value ? [...modsClasslist, cls] : modsClasslist,
			[]
		),
		...additional.filter(Boolean)
	].join(' ');
};
