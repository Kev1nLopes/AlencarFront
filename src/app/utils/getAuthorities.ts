import { User } from "../pages/auth/login/types";

export const isUserAdmin = () => {
  const currentUserJson = sessionStorage.getItem('currentUser');
  const currentUser: User = JSON.parse(currentUserJson as string);
  return currentUser.authorities.some(role => role.authority === 'ADMIN_EMPLOYEE');
}
