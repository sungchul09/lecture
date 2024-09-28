// 에러처리 - 전혀 예상하지 못하는 case에 대한 처리
{
  type Position = { x: number, y: number }
  type Direction = 'up' | 'down' | 'left' | 'right' | 'he' // 'he'라는 타입이 추가됐을 떄

  const position: Position = { x: 0, y: 0 }

  function move(direction: Direction) {
    switch(direction){
      case 'up':
        position.y += 1
        break;
      case 'down':
        position.y -= 1
        break;
      case 'left':
        position.x -= 1
        break;
      case 'right':
        position.x += 1
        break;
      default:
        // 'he'에 대해서는 never 타입으로 넣을 수 없어서 에러를 낸다
        // 상단에서 'he'에 대한 케이스를 추가하면 에러는 해결될 것이다.
        // const invalid: never = direction
        throw new Error(`unknown direction: ${direction}`)
    }
  }

  console.log(position)
  move('up')
  console.log(position)
  move('down')
  console.log(position)
  move('left')
  console.log(position)
  move('right')
  console.log(position)


  // exception handling: try -> catch -> finally
  function readFile(fileName: string): string {
    if(fileName === 'not exist!💩') {
      throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents';
  }

  function closeFile(fileName: string) {
    //
  }
  function run() {
    const fileName = 'not exist!💩'
  
    try {
      console.log(readFile(fileName))
    } catch(error) {
      console.log('catched')
      return;
    } finally{
      // 에러 이후 닫아줘야하는게 있다면 finally 선언
      closeFile(fileName)
      console.log('closed!')
    }
    
  }
  run();
}