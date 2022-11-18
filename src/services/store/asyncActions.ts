import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersFromLs, setUsersToLs } from '../utils/usersLS';
import { getUsers } from '../api/getUsers';


export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const usersFromLs = getUsersFromLs();
      if (usersFromLs) return usersFromLs;

      const users = await getUsers();

      setUsersToLs(users);

      return users;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }

      rejectWithValue(error);
    }
  }
)