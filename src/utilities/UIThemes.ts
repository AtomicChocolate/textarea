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
			backgroundColor: "#000",
			textColor: "#FFF",
			footerBackgroundColor: "#333",
		},
		label: "Dark",
	},
	{
		value: {
			backgroundColor: "#FFF",
			textColor: "#000",
			footerBackgroundColor: "#CCC",
		},
		label: "Light",
	},
] as ThemeEntry[];

export default UIThemes;
export type { ThemeEntry, ThemeData };
