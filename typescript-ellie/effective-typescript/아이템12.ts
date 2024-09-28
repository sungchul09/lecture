// type DiceRollFn = (sides: number) => number;
// const rollDice: DiceRollFn = sides => { /* ... */ };

// function add(a: number, b: number) { return a + b; }
// function sub(a: number, b: number) { return a - b; }
// function mul(a: number, b: number) { return a * b; }
// function div(a: number, b: number) { return a / b; }


// type BinaryFn = (a: number, b: number) => number;
// const add: BinaryFn = (a, b) => a + b;
// const sub: BinaryFn = (a, b) => a - b;
// const mul: BinaryFn = (a, b) => a * b;
// const div: BinaryFn = (a, b) => a / b;


const checkedFetch: typeof fetch = async (input?, init) => {
	const response = await fetch(input, init)
	if(!response.ok) {
		throw new Error('Request failed: ' + response.status)
	}
	return response
}
// typeof 값에 대한 타입을 추출해주는 것