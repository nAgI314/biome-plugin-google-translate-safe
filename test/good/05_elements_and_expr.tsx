// GOOD-05: 要素 + 式 + 要素（テキストは全てspan内）
function ElementsAndExpr() {
	const name = "Alice";
	return (
		<p>
			<span>Hello</span>
			{name}
			<span>World</span>
		</p>
	);
}
