import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../domain';
import { getUsersFromLs, setUsersToLs } from '../utils/usersLS';


const API_URL = 'https://testimonialapi.toolcarton.com/api';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const users = getUsersFromLs();
      if (users) return users;

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Something went wrong, try later!')
      }

      const data = await response.json();

      const usersWithLike = data.map((user: User) => ({
        ...user,
        liked: false,
      }));

      setUsersToLs(usersWithLike);

      return usersWithLike;

    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }

      rejectWithValue(error);
    }
  }
)