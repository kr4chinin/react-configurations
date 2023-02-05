type Mods = Record<string, boolean>;

export const classNames = (
	cls: string,
	mods: Mods,
	additional: string[] = []
) => {
	const modsClasslist: string[] = [];

	Object.keys(mods).forEach((cls) => {
		if (mods[cls]) {
			modsClasslist.push(cls);
		}
	});

	return [cls, ...modsClasslist, ...additional].join(' ');
};
