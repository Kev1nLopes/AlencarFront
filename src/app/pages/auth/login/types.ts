export interface User {
  userId: number;
  username: string;
  password: string;
  token: string;
  enabled: boolean;
  authorities: Authority[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

export interface Authority {
  roleId: number;
  roleName: string;
  authority: string;
}
