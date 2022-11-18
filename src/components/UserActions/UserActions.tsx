import React from 'react';
import { FaHeart, FaRegHeart, FaRegTrashAlt } from 'react-icons/fa';
import './userActions.stylse.scss';


interface Props {
  liked: boolean;
  onLike: () => void;
  onDelete: () => void;
}

export const UserActions: React.FC<Props> = ({ liked, onLike, onDelete }) => (
  <div className='user__actions'>
    <button onClick={onLike}>
      {liked
        ? <FaHeart color='#f04f44' title='Unlike'/>
        : <FaRegHeart title='Like'/>
      }
    </button>
    <button onClick={onDelete}>
      <FaRegTrashAlt title='Delete'/>
    </button>
  </div>
)
