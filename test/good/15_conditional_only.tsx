// GOOD-15: 条件付きレンダリング（式のみ）
function ConditionalOnly() {
	const isLoading = true;
	const error = false;
	const data = "Data loaded successfully";
	return (
		<p>
			{isLoading && <span>Loading...</span>}
			{error && <span>Error!</span>}
			{data}
		</p>
	);
}
