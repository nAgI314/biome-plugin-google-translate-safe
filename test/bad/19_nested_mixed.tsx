// BAD-19: ネストした要素で内部にテキスト+式
function NestedMixed() {
	const name = "Alice";
	const city = "New York";
	return (
		<div>
			<p>
				Hello {name}, welcome to {city}
			</p>
		</div>
	);
}
