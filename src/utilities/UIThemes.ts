type ThemeData = {
	[key: string]: string;
	// name: string;
	backgroundColor: string;
	textColor: string;
	footerBackgroundColor: string;
};

type ThemeEntry = {
	value: ThemeData;
	label: string;
};

const UIThemes = [
	{
		value: {
			backgroundColor: "#222",
			textColor: "#eee",
			footerBackgroundColor: "#333",
		},
		label: "Dark",
	},
	{
		value: {
			backgroundColor: "#eee",
			textColor: "#222",
			footerBackgroundColor: "#dedede",
		},
		label: "Light",
	},
] as ThemeEntry[];

export default UIThemes;
export type { ThemeEntry, ThemeData };
