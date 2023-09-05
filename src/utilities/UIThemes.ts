export type ThemeEntry = {
	className: string;
	label: string;
	category: string;
};

const UIThemes = [
	{
		className: "theme-dark",
		label: "Default Dark",
		category: "Dark",
	},
	{
		className: "theme-monokai",
		label: "Monokai",
		category: "Dark",
	},
	{
		className: "theme-solarizeddark",
		label: "Solarized Dark",
		category: "Dark",
	},
	{
		className: "theme-light",
		label: "Default Light",
		category: "Light",
	},
	{
		className: "theme-solarizedlight",
		label: "Solarized Light",
		category: "Light",
	},
] as ThemeEntry[];

export default UIThemes;
