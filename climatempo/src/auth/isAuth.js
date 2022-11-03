export function isAuth() {
  var user = localStorage.getItem("current_user");
  if (!user) return false;

  return true;
}
