// BAD-12: h1 でテキスト + 式
function HeadingMixed() {
	const userName = "Alice";
	return <h1>Welcome, {userName}!</h1>;
}
