// GOOD-08: spanで囲んだテキスト + 式 + spanで囲んだテキスト
function WrappedTextAndExpr() {
	const title = "My Title";
	return (
		<div>
			<span>Title: </span>
			{title}
			<span> - End</span>
		</div>
	);
}
