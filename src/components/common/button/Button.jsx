// Button.jsx
import React from 'react';
import './Button.modules.scss';

const Button = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  icon,
}) => {
  const className = `btn btn-${variant} btn-${size}`;

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {icon && <span className="btn-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
