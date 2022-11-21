import { api } from "../api";

export async function login(email: string) {
  const data: any = await api;
  const userMail = email;

  const authUser = data.filter(
    (user: { id: number; name: string; email: string; password: string }) => user.email === userMail
  );

  if (userMail === "" || userMail === null) {
    alert("Is there anybody in there?");
  } else if (authUser.length < 1) {
    alert(`Incorrect email or password. Try again.`);
  } else {
    alert(`Welcome, ${authUser[0].name}!`);
  }
}
