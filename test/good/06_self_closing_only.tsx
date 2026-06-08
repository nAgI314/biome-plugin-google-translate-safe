// GOOD-06: self-closing 要素のみ
function SelfClosingOnly() {
	return (
		<p>
			<img src="a.png" />
			<br />
			<input type="text" />
		</p>
	);
}
