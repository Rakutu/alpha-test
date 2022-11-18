import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { User } from '../../../domain';
import { UserActions } from '../../UserActions';
import './userItem.styles.scss';


interface Props {
  user: User;
  onLike: (id: number) => void;
  onDelete: (id: number) => void;
}

export const UserItem: React.FC<Props> = memo(({ user, onLike, onDelete }) => (
    <li className='user__card'>
      <img
        className='user__img'
        src={user.avatar}
        alt={`${user.name}'s avatar`}
      />
      <div>
        <h3 className='user__name'>{user.name}</h3>
        <p>{user.designation}</p>
        <Link className='link' to={`/users/${user.id}`}>Look profile</Link>
        <div className='user__rating'>
          <FaStar/>
          <span>{user.rating}</span>
        </div>
        <UserActions
          liked={user.liked}
          onLike={() => onLike(user.id)}
          onDelete={() => onDelete(user.id)}
        />
      </div>
    </li>
  )
)
