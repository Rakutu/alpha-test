import React from 'react';
import './switcher.styles.scss';


interface Props {
  checked: boolean;
  label?: string;
  onSwitch: () => void;
}

export const Switcher: React.FC<Props> = ({ checked, label, onSwitch }) => (
    <div className='root'>
      <label className='switch'>
        <input type='checkbox' checked={checked} onChange={onSwitch}/>
        <span className='switch__slider'/>
      </label>
      {label && <span>{label}</span>}
    </div>
  )
