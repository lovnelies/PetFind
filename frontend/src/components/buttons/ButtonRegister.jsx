import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const base = 'font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5';
  const variants = {
    primary: 'bg-green-700 hover:bg-green-900 text-white',
    secondary: 'bg-red-700 hover:bg-red-900 text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
