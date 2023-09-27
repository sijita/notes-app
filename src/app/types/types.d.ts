import { type Session } from "next-auth";

export interface IUser {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface INote {
  id?: string;
  title: string;
  content: string;
}

export type ISession = Session & {
  user: {
    id: string;
    username: string;
    email: string;
    password: string;
  };
};
