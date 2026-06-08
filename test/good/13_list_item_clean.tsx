// GOOD-13: リスト要素（li）内がspanのみ
function ListItemClean() {
	return (
		<ul>
			<li><span>Item 1</span></li>
			<li><span>Item 2</span></li>
		</ul>
	);
}
