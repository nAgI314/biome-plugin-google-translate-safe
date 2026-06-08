// BAD-20: 条件式 + テキストの混在
function ConditionalMixed() {
	const isNew = true;
	return <p>{isNew && <span>New!</span>} product description</p>;
}
