/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};
type Operation = Cost | Profit;

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};
type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

// Функция создания случайного продукта
export const createRandomProduct = (createdAt: string): Product => {
  // Список возможных категорий
  const categories: Category[] = [
    { id: '1', name: 'Электроника' },
    { id: '2', name: 'Мода' },
    { id: '3', name: 'Дом и сад' },
  ];

  // Случайная категория
  const category = categories[Math.floor(Math.random() * categories.length)];

  // Случайное название продукта
  const productName = `Продукт ${Math.floor(Math.random() * 100)}`;

  // Случайная цена
  const price = Math.floor(Math.random() * 10000);

  // Случайная старая цена (если есть)
  const oldPrice = Math.random() < 0.5 ? Math.floor(Math.random() * 10000) : undefined;

  // Случайное описание (если есть)
  const desc = Math.random() < 0.5 ? `Описание продукта ${Math.floor(Math.random() * 100)}` : undefined;

  // Случайная фотография
  const photo = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`;

  // Создание продукта
  return {
    id: Math.random().toString(36).substr(2, 9),
    name: productName,
    photo,
    desc,
    createdAt,
    oldPrice,
    price,
    category,
  };
};

// Функция создания случайной операции
export const createRandomOperation = (createdAt: string): Operation => {
  // Список возможных категорий
  const categories: Category[] = [
    { id: '1', name: 'Еда' },
    { id: '2', name: 'Транспорт' },
    { id: '3', name: 'Развлечения' },
  ];

  // Случайная категория
  const category = categories[Math.floor(Math.random() * categories.length)];

  // Случайный тип операции (траты или дохода)
  const type = Math.random() < 0.5 ? 'Cost' : 'Profit';

  // Случайное название операции
  const operationName = `${type === 'Cost' ? 'Трата' : 'Доход'} ${Math.floor(Math.random() * 100)}`;

  // Случайная сумма
  const amount = Math.floor(Math.random() * 10000);

  // Случайное описание (если есть)
  const desc = Math.random() < 0.5 ? `Описание операции ${Math.floor(Math.random() * 100)}` : undefined;

  // Создание операции
  if (type === 'Cost') {
    return {
      id: Math.random().toString(36).substr(2, 9),
      name: operationName,
      desc,
      createdAt,
      amount,
      category,
      type,
    };
  } else {
    return {
      id: Math.random().toString(36).substr(2, 9),
      name: operationName,
      desc,
      createdAt,
      amount,
      category,
      type,
    };
  }
};
