// BAD-15: td でテキスト + 式 + テキスト
function TableCellMixed() {
	const price = 19.99;
	return <td>Price: {price} USD</td>;
}
