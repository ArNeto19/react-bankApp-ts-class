export function login(): void {
  const username = prompt("Your name:");

  username === "" || username === null
    ? alert("Is there anybody in there?")
    : alert(`Welcome , ${username}!`);
}
