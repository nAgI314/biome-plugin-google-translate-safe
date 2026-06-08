// BAD-18: label でテキスト + 式
function LabelMixed() {
	const firstName = "John";
	const lastName = "Doe";
	return <label>Name: {firstName} {lastName}</label>;
}
