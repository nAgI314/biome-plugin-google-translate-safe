// BAD-08: テキスト + 式 + 要素 + テキスト
function MixedComplex() {
	const userName = "Alice";
	return (
		<div>
			Hello {userName}, your score is <strong>100</strong> points
		</div>
	);
}
