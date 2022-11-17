import React from 'react';
import { User } from '../../domain';
import { UserItem } from './UserItem';
import './usersList.styles.scss';


interface Props {
  users: User[];
  onLike: (id: number) => void;
  onDelete: (id: number) => void;
}

export const UsersList: React.FC<Props> = ({ users, onLike, onDelete }) => (
    <ul className='users__list'>
      {users.map(user => (
        <UserItem
          key={user.id}
          user={user}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )