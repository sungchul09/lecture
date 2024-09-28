type Product = 'cat' | 'dog'

// 대문자로 바꾸어준다
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'

type NewProduct2 = Lowercase<Product>; // 'Cat' | 'Dog'
