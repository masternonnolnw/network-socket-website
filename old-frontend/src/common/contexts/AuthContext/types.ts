export interface IAuthContext {
  user: IUser;
  isReady: boolean;
  isAuthenticated: boolean;
}
export enum Role {
  instructor,
  student,
  unAuth
}

export interface IUser {
  name: string;
  userId: string;
  role: Role;
}
