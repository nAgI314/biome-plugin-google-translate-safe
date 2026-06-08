// GOOD-14: テーブルセル内がspanのみ
function TableCellClean() {
	return (
		<table>
			<tr>
				<td><span>Cell 1</span></td>
				<td><span>Cell 2</span></td>
			</tr>
		</table>
	);
}
