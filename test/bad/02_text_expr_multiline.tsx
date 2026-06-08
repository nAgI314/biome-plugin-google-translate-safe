// BAD-02: テキストと式が複数行で混在（元のお題）
function TrailOfBreadCrumbs({ breadcrumbsCount }: { breadcrumbsCount: number }) {
	return (
		<p>
			A landmark on the way home: There are {breadcrumbsCount} trails of crumb 🍞
		</p>
	);
}
