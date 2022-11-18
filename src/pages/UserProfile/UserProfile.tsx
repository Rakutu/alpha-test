import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteUser, likeUser, fetchUsers } from '../../services/store';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { Header } from '../../components/Header';
import { UserActions } from '../../components/UserActions';
import './userProfile.stylse.scss';


type UserParams = {
  id: string;
}

export const UserProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<UserParams>();
  const users = useAppSelector(({ users }) => users.users);
  const user = users.find(user => user.id === Number(id));

  const handleLike = (id: number) => dispatch(likeUser({ id }));
  const handleDelete = (id: number) => {
    dispatch(deleteUser({ id }));
    navigate('/');
  };

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [ users ]);

  return (
    <>
      {user && (
        <main>
          <Header/>
          <div className='container'>
            <img className='userProfile__img' src={user.avatar} alt={user.name}/>
            <div className='userProfile__actions-block'>
              <UserActions
                liked={user.liked}
                onLike={() => handleLike(user.id)}
                onDelete={() => handleDelete(user.id)}
              />
            </div>
            <h2>{user.name}</h2>
            <p><b>rating:</b> {user.rating}</p>
            <p><b>profession:</b> {user.designation}</p>
            <p><b>location:</b> {user.location}</p>
            <p><b>status:</b> {user.message}</p>
            <p><b>description:</b> {user.lorem}</p>
            <Link className='link' to='/'>Back</Link>
          </div>
        </main>
      )}
    </>
  )
}