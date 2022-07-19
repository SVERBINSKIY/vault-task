const mockUser = [
  {
    username: 'sverbinskiy@gmail.com',
    password: 'Vova12319980614',
  },
  {
    username: 'natali.gusak@gmail.com',
    password: 'Natali04082000',
  },
];

const mockProducts = [
  {
    id: 1,
    name: 'q-1',
    count: 11,
    price: 123.11,
  },
  {
    id: 2,
    name: 'w-2',
    count: 12,
    price: 123.12,
  },
  {
    id: 3,
    name: 'e-3',
    count: 13,
    price: 123.13,
  },
  {
    id: 4,
    name: 'r-4',
    count: 14,
    price: 123.14,
  },
];

export const loginUser = ({username, password}) => {
  const user = mockUser.find((el) => el.username === username);
  if (!user) {
    throw new Error('User with this username not found!');
  }
  if (user.password !== password) {
    throw new Error('Password do not match!');
  }

  return {status: 200, username: user.username};
}

export const refreshLogin = (username) => {
  const user = mockUser.find((el) => el.username === username);
  if (user) {
    return {status: 200, username: user.username};
  }
}

export const getProducts = (username) => {
  const user = mockUser.find((el) => el.username === username);
  if (!user) {
    throw new Error('You dont have permission');
  }
  return { data: mockProducts };
}

export const createNewProduct = (data, username) => {
  const user = mockUser.find((el) => el.username === username);
  if (!user) {
    throw new Error('You dont have permission');
  }

  const newProducts = [
    ...mockProducts,
    {
      id: mockProducts[mockProducts.length - 1].id + 1,
      ...data,
    }
  ]

  return { data: newProducts };
}