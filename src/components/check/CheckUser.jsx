export function checkUser(parsedUser) {
  if (localStorage.currentUser) {
    parsedUser = JSON.parse(localStorage.currentUser);
    return parsedUser;
  } else {
    return {};
  }
}
