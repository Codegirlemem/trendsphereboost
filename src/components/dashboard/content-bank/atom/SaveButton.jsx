function SaveButton({ children, color, radius, padX }) {
  return (
    <button
      className={`${color} ${radius} ${padX} py-2 text-center text-base text-white
    `}
    >
      {children}
    </button>
  );
}

export default SaveButton;
