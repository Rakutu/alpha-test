import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { likeUser, toggleLiked, deleteUser } from '../../services/store';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { fetchUsers } from '../../services/store';
import { Header } from '../../components/Header';
import { Switcher } from '../../components/Switcher';
import { Spinner } from '../../components/Spinner';
import { UsersList } from '../../components/UsersList';


export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    users,
    showLiked,
    status,
    error,
  } = useAppSelector(({ users }) => users);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [])

  const usersForList = showLiked
    ? users.filter(user => user.liked)
    : users;

  const handleSwitch = useCallback(() => dispatch(toggleLiked()), [],);
  const handleLike = useCallback((id: number) => dispatch(likeUser({ id })), []);
  const handleDelete = useCallback((id: number) => dispatch(deleteUser({ id })), []);

  if (error && status === 'rejected') navigate('/not-found');

  return (
    <main>
      <Header/>
      <div className='container'>
        <Switcher
          checked={showLiked}
          label='show liked users'
          onSwitch={handleSwitch}
        />
        {status === 'pending'
          ? <Spinner/>
          : (
            <UsersList
              users={usersForList}
              onLike={handleLike}
              onDelete={handleDelete}
            />
          )
        }
      </div>
    </main>
  )
}
