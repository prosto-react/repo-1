// Button.tsx
import React from 'react';
import './Button.modules.scss';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  icon?: React.ReactNode; // Ensure icon is of type React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
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
