// BAD-16: 複数の式とテキストが交互に
function MultipleInterleaved() {
	const a = 5;
	const b = 10;
	return <p>{a} plus {b} equals {a + b}</p>;
}
