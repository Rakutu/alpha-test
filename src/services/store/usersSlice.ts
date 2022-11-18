import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { User } from '../../domain';
import { setUsersToLs } from '../utils/usersLS';
import { fetchUsers } from './asyncActions';


interface State {
  users: User[];
  showLiked: boolean;
  status: 'pending' | 'fulfilled' | 'rejected' | null;
  error: string | null;
}

type ActionPayloadWithId = PayloadAction<{ id: number }>;

type SetStatusOrError = CaseReducer<State>;

const initialState: State = {
  users: [],
  showLiked: false,
  status: null,
  error: null,
}

const setError: SetStatusOrError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const setLoading: SetStatusOrError = (state) => {
  state.status = 'pending';
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    likeUser(state, action: ActionPayloadWithId) {
      const user = state.users.find(({ id }) => id === action.payload.id);

      if (!user) return;

      user.liked = !user.liked;
      setUsersToLs(state.users);
    },
    toggleLiked(state) {
      state.showLiked = !state.showLiked;
    },
    deleteUser(state, action: ActionPayloadWithId) {
      const deleteUserId = action.payload.id;

      if (!deleteUserId) return;

      state.users = state.users.filter(({ id }) => id !== deleteUserId);
      setUsersToLs(state.users);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        if (!action.payload) {
          state.status = 'rejected';
          state.error = 'users not found';

          return;
        }

        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, setError)
      .addCase(fetchUsers.pending, setLoading);
  }
})

export const { likeUser, toggleLiked, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
