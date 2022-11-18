import { User } from '../../domain';


const USERS_KEY = 'users';

type SetUsersToLs = (users: User[]) => void;

type GetUsersFromLs = () => User[] | undefined;

type DeleteUsersFromLs = () => void;

export const setUsersToLs: SetUsersToLs = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getUsersFromLs: GetUsersFromLs = () => {
  try {
    const users = localStorage.getItem(USERS_KEY);

    return users
      ? JSON.parse(users)
      : undefined;
  } catch (error: unknown) {
    throw error;
  }
};

export const deleteUsersFromLs: DeleteUsersFromLs = () => localStorage.removeItem(USERS_KEY);
