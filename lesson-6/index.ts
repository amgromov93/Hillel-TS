// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.

interface IUnion {
  [key: string]: number | string;
  x: number;
  y: string;
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.

interface IFn {
  [key: string]: (arg: any) => {};
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.

interface IArray {
  [key: number]: string[];
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою.
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.

interface IInterface {
  name: string;
  surname: string;
  [key: string]: string;
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.

interface IIndex1 {
  [fullName: string]: string;
}

interface IIndex2 extends IIndex1 {
  id: string;
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

interface ICheckObj {
  [key: string]: string | number;
  name: string,
  id: number,
  phoneNumber: number,
}

function checkObj(arg: ICheckObj): string | undefined {
  for (let key in arg) {
    if (typeof arg[key] === "number") {
      return "The received data is correct";
    }

    return `Invalid type of ${key}! Not a number`;
  }
}

let obj: ICheckObj = {
  name: "John",
  id: 67543,
  phoneNumber: 3334455,
};

checkObj(obj);
