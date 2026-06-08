// BAD-14: li でテキスト + 式
function ListItemMixed() {
	const index = 1;
	const itemName = "item";
	return <li>Item {index}: {itemName}</li>;
}
