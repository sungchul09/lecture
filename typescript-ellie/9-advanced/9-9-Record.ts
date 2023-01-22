
type PageInfo = {
  title: string;
};

type Page = 'home' | 'about' | 'contact'

// 함께 묶을 수 있는 것이 record 타입
const nav: Record<Page, PageInfo> = {
  home: {title: 'Home'},
  about: {title: 'About'},
  contact: {title: 'Contact'}
}

interface Test1 {
  title: string;
}

interface Test2 {
  age: number;
}


type Person = {
  [name: 'Sungchul' | 'Dokyung' | 'Pilung']: number
}

const person: Person = {
  'Sungchul': 33,
  'dolin': 42
}

