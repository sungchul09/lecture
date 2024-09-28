const xs = [1, 2, 3];
const keys = Object.keys(xs); // 타입이 string[]
for (const key in xs) {
	key                 // 타입이 string
	console.log("🚀 ~ file: 아이템16.ts:5 ~ key:", key)
	const x = xs[key]   // 타입이 number
}