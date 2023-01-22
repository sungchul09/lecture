// 모듈이란 ?
// 파일안에 코드를 모듈화해서 작성하는 것
// 한 모듈은 한 파일안에 작성되어있는 코드
// 따로 모듈화해서 관리하지않으면 모두 global scope로 관리되게된다.
// browser환경이면 window, node환경이면 global에 등록되어 지는 것.

// 모듈화 하고 다른 모듈에서 사용하려면 export 해줘야한다.
// default로 export하는 내용은 import할 때 원하는 명칭으로 import할 수 있따.
// default는 한 파일안에서 하나만 가능하다.
export default function add(a, b) {
  return a + b
}
// default가 아닌 아이들은 import할때 import { sum } from '~~' 이런식으로 작성해줘야한다
export function sum() {}