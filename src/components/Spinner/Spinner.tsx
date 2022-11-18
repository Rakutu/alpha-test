import React, { memo } from 'react';
import './spinner.styles.scss';


export const Spinner: React.FC = memo(() => (
  <div className='container'>
    <div className="loading">
      <div className="loading__line"/>
      <div className="loading__line"/>
      <div className="loading__line"/>
    </div>
  </div>
  )
)
