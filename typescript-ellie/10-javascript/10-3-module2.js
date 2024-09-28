console.log(add(1, 2))

// 모듈화하지않으면 window에 등록되어 바로 사용 가능하다.
// 이럴경우 이름충돌이 발생할 수 있어 모듈화 하는것이 좋다
// html파일에서 <script> 내부에 type="module"을 선언해준다.
//  <script type="module" src="./10-3-module2.js"></script>
// 그래서 import를 하면 이제 사용가능하다.

import add, {sum} from './10-3-module1.js'