import React, { memo } from 'react';
import './spiner.styles.scss';


export const Spiner: React.FC = memo(() => (
  <div className='container'>
    <div className="loading">
      <div className="loading__line"></div>
      <div className="loading__line"></div>
      <div className="loading__line"></div>
    </div>
  </div>
  )
)