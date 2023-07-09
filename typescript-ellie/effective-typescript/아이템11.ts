interface Room {
	numDoors: number;
	ceilingHeightFt: number;
}
const r: Room = {
	numDoors: 1,
	ceilingHeightFt: 10,
	elephant: 'present',
// ~~~~~~~~~~~~~~~~~~~ 개체 리터럴은 알려진 속성만 지정할 수 있으며
//                     'Room' 형식에 'elephant' 이(가) 없습니다. 
}


interface Options {
	title: string;
	darkMode?: boolean;
}
function createWindow(options: Options) {
	if (options.darkMode) {
		setDarkMode();
	}
}
createWindow({
	title: 'Spider Solitaire',
	darkmode: true
})


const o1: Options = document; // 정상
const o2: Options = new HTMLAnchorElement; // 정상

const o: Options = { darkmode: true, title: 'Ski Free' };

let str: string = "hello";
str = str.toUpperCase();


interface LineCharOptions {
	logscale: boolean;
	invertedYAxis: boolean;
	areaChart: boolean;
}

const opts = { logscale: true };
const oo: LineCharOptions = opts;