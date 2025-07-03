import Button from '../Button';

const CreateTodo = () => {
  return (
    <div>
      <h1>Create Todo</h1>
      <Button
        text="Create"
        className="bg-green-500 text-white rounded-md py-2 px-4 cursor-pointer"
      />
    </div>
  );
};
export default CreateTodo;
