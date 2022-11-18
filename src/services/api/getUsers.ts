import { User } from '../../domain';


const API_URL = 'https://testimonialapi.toolcarton.com/api';

type GetUsers = () => Promise<User[]>;

export const getUsers: GetUsers = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Something went wrong, try later!');
    }

    const data = await response.json();

    return data.map((user: User) => ({
      ...user,
      liked: false,
    }));
  } catch (error: unknown) {

    throw error;
  }
}
