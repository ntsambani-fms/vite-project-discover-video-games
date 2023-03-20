import React from 'react'
import styles from './Button.module.css';

interface Props{
    children: string;
    color?: 'primary'| 'secondary' | 'warning';
    onClick: ()=> void;
}

const Button = ({children,onClick,color='secondary'}: Props) => {
    
  return (
    <button className={'btn btn-seconary'} onClick={onClick}>{children}</button>
  )
}

export default Button