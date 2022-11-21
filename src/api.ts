const users = [
  {
    id: 0,
    name: "Armando",
    email: "arneto@mail.com",
    password: "123456",
  },
  {
    id: 1,
    name: "Usuário 1",
    email: "user@mail.com",
    password: "010101",
  },
];

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(users);
  }, 3000);
});
