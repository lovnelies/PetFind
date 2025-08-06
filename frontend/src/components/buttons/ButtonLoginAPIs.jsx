
const ButtonAPIs = ({ children, onClick, type = 'button'}) => {
  const base = 'flex items-center justify-center gap-3 w-full max-w-xs mb-4 bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm hover:shadow-md transition duration-150';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base}`}
    >
      {children}
    </button>
  );
};

export default ButtonAPIs;
