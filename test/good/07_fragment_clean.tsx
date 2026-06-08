// GOOD-07: Fragment with only expressions and elements
function FragmentClean() {
	const name = "Alice";
	return (
		<>
			<span>Hello</span>
			{name}
			<span>World</span>
		</>
	);
}
