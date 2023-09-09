function GetSave() {
	return localStorage.getItem("text") || "";
}

function MakeSave(text: string) {
	localStorage.setItem("text", text);
}

export { GetSave, MakeSave };