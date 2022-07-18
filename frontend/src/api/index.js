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