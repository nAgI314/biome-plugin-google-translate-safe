function TrailOfBreadCrumbs({ breadcrumbsCount }: { breadcrumbsCount: number }) {
	return (
		<p>
			<span> A landmark on the way home: There are </span>
			<span className="text-orange-500 font-bold">
				{breadcrumbsCount}
			</span>
			<span> trails of crumb 🍞</span>
		</p>
	);
}
