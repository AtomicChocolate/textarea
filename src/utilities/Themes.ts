export type ThemeEntry = {
	class: string;
	label: string;
	category: string;
};

const Themes = [
	{
		class: "theme-dark",
		label: "Default Dark",
		category: "Dark",
	},
	{
		class: "theme-monokai",
		label: "Monokai",
		category: "Dark",
	},
	{
		class: "theme-solarizeddark",
		label: "Solarized Dark",
		category: "Dark",
	},
	{
		class: "theme-light",
		label: "Default Light",
		category: "Light",
	},
	{
		class: "theme-solarizedlight",
		label: "Solarized Light",
		category: "Light",
	},
] as ThemeEntry[];

export default Themes;