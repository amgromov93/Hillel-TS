// Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.
interface IInterface {
  name: string;
  surname: string;
  age?: number;
  address: {
    city: string;
    street: string;
    numberOfStreet?: number;
  };
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<keyof any, unknown>
    ? DeepReadonly<T[P]>
    : T[P];
};

let x: DeepReadonly<IInterface> = {
  name: "John",
  surname: "Lennon",
  address: {
    city: "New York",
    street: "Baker St",
    numberOfStreet: 42,
  },
};

// Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
interface IInterface2 {
  name: string;
  surname: string;
  age?: number;
  address?: {
    city: string;
    street: string;
    numberOfStreet?: number;
  };
}

type DeepRequiredReadonly<T> = {
  readonly [P in keyof T]-?: T[P] extends Record<keyof any, unknown>
    ? DeepRequiredReadonly<T[P]>
    : T[P];
};

let y: DeepRequiredReadonly<IInterface> = {
  name: "John",
  surname: "Lennon",
  age: 30,
  address: {
    city: "New York",
    street: "Baker St",
    numberOfStreet: 42,
  },
};

// Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.
interface IInterface3 {
  name: string;
  age: number;
  city: string;
}

type ToUpperCase<T extends string> = `${Uppercase<T>}`;

type UpperCaseKeys<T> = {
  [K in keyof T & string as ToUpperCase<K>]: T[K];
};

type T = UpperCaseKeys<IInterface3>;

// Стоврити тип, що на основі єнаму генерує тип об'єкту, що як ключ має назву ключа єнаму з додатковим префіксом 'get-' а як значення просто функцію
enum Fruits {
  apple,
  banana,
  orange,
  kiwi,
}

type FruitsType = keyof typeof Fruits;

type GetObjFromEnum<T> = {
  [K in T & string as `get${Capitalize<K>}`]: () => string;
};

type FruitsFromEnum = GetObjFromEnum<FruitsType>;

// І саме цікаве. Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.
type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: {
    value: T[K] & any;
    enumerable: boolean;
    configurable: boolean;
    writable: boolean;
  };
};

let fullName = {
  prop1: "John",
  prop2: "Lennon",
};

let objToPropDescriptor: ObjectToPropertyDescriptor<typeof fullName> = {
  prop1: {
    value: "John",
    enumerable: true,
    configurable: true,
    writable: true,
  },
  prop2: {
    value: "Lennon",
    enumerable: true,
    configurable: true,
    writable: true,
  },
};

// Створити тип, що буде повертати тип параметру функції (Якщо в параметрі вказано массив number[] то вірним типом буде number) ?