function SaveButton({ children, color, radius, padX, border = 'border-0' }) {
  return (
    <button
      className={`${color} ${radius} ${padX} ${border} w-max py-2 text-center text-white
    `}
    >
      {children}
    </button>
  );
}

export default SaveButton;
