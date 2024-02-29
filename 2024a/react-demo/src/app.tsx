import TodoView from './components/todo';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { create } from './slices/todos-slice';

function App() {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(create({ content: Date.now().toFixed(0) }));
        }}
      >
        Create New Guy
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoView todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
