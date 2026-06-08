// BAD-10: テキスト + Fragment の中の式
function TextFragmentExpr() {
	const greeting = "beautiful";
	return (
		<p>
			Hello
			<>
				{greeting}
			</>
			World
		</p>
	);
}
