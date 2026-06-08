// BAD-01: テキストと式が1行で混在
function TextAndExpr() {
	const name = "biome";
	return <p>Hello {name} world</p>;
}
