import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';


//basically we will create a button with two different styles,size(children) and store it as a array in the const STYLES and SIZES, 
//the css of both the properties will be defined in the button.css file. When the button component is called in the HTML file
//we will pass eaither one of the children as the button property, if not passed we will set the 1st child of the arrya as the default property. 


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};