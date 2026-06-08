// BAD-11: div でテキスト + 式 + span
function DivMixed() {
	const result = "success";
	return (
		<div>
			Result: {result} <span>OK</span>
		</div>
	);
}
