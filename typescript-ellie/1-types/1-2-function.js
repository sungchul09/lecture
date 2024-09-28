{
    // // function
    // // 함수에 타입을 기입함으로써 좀 더 안정적으로 프로그래밍을 하도록 도와주며 문서화를 하는 효과도 볼 수 있다.
    // // js
    // function jsAdd(num1, num2) {
    //   return num1 + num2
    // }
    // // ts
    // function tsAdd(num1: number, num2: number): number {
    //   return num1 + num2;
    // }
    // // Promise function
    // // js
    // function jsFetchNum(id) {
    //   return new Promise((resolve, reject) => {
    //     resolve(100);
    //   })
    // }
    // // ts
    // function tsFetchNum(id: number): Promise<number> {
    //   return new Promise((resolve, reject) => {
    //     resolve(100)
    //   })
    // }
    // javascript => typescript
    // Optional Parameter
    function printName(firstName, lastName) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('steve', 'kim');
    printName('ellie');
    printName('anna', undefined);
}
