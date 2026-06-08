// BAD-04: テキストの後に式
function TextThenExpr() {
	const status = "active";
	return <p>Status: {status}</p>;
}
