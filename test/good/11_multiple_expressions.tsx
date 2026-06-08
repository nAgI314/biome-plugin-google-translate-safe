// GOOD-11: 複数の式が連続
function MultipleExpressions() {
	const firstName = "John";
	const lastName = "Doe";
	const age = 30;
	return (
		<p>
			{firstName}
			{lastName}
			{age}
		</p>
	);
}
