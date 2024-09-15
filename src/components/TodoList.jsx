import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const tasks = ['Comprar leite', 'Estudar React', 'Fazer exercício', 'Ler um livro'];

  return (
    <div className="todo-list-container">
      <h1>Minha Lista de Tarefas</h1>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
