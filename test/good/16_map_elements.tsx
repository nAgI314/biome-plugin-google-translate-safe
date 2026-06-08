// GOOD-16: mapで要素を展開
function MapElements() {
	const items = [
		{ id: 1, name: "Item 1" },
		{ id: 2, name: "Item 2" },
		{ id: 3, name: "Item 3" },
	];
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>
					<span>{item.name}</span>
				</li>
			))}
		</ul>
	);
}
