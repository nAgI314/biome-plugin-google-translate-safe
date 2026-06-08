// BAD-09: Fragment でテキストと式が混在
function FragmentMixed() {
	const breadcrumbsCount = 3;
	return (
		<>
			A landmark on the way home: There are {breadcrumbsCount} trails of crumb 🍞
		</>
	);
}
