const TodoButton = ({ children, onClick = () => {} }) => {
  return (
    <button
      className="bg-green-500 text-white rounded-md cursor-pointer py-2 px-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default TodoButton;
