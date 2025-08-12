import React from 'react';
import { Link } from 'react-router-dom';

const ButtonGeneric = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = 'left',
  href = null,
  to = null,
  onClick = null,
  type = 'button',
  className = '',
  fullWidth = false,
  ...props
}) => {
  // Estilos base
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variantes de estilo
  const variants = {
    primary: 'bg-gradient-to-r from-pink-400 to-pink-500 text-white hover:from-pink-500 hover:to-pink-600 focus:ring-pink-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300',
    outline: 'border-2 border-pink-400 text-pink-600 hover:bg-pink-50 focus:ring-pink-500',
    ghost: 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 shadow-md hover:shadow-lg',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 shadow-md hover:shadow-lg',
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 focus:ring-purple-500 shadow-md hover:shadow-lg transform hover:scale-105',
    pink: 'bg-pink-200 text-gray-600 hover:bg-pink-300 hover:text-gray-700 focus:ring-pink-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
  };

  // Tamaños
  const sizes = {
    xs: 'px-2 py-1 text-xs rounded',
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg',
    xl: 'px-8 py-4 text-lg rounded-xl'
  };

  // Combinar clases
  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled || loading ? 'cursor-not-allowed' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Contenido del botón
  const buttonContent = (
    <>
      {/* Spinner de carga */}
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {/* Ícono izquierdo */}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">
          {typeof icon === 'string' ? <span>{icon}</span> : icon}
        </span>
      )}

      {/* Texto del botón */}
      <span>{children}</span>

      {/* Ícono derecho */}
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">
          {typeof icon === 'string' ? <span>{icon}</span> : icon}
        </span>
      )}
    </>
  );

  // Si es un enlace externo
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  // Si es un enlace interno con React Router
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {buttonContent}
      </Link>
    );
  }

  // Botón normal
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default ButtonGeneric;