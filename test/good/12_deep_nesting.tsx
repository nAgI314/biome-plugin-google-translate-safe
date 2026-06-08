// GOOD-12: 深くネストしたspan
function DeepNesting() {
	return (
		<div>
			<p>
				<span>
					<span>Deeply </span>
					<span>nested </span>
					<span>text</span>
				</span>
			</p>
		</div>
	);
}
