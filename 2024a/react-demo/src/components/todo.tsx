import { Todo } from '../slices/todos-slice';

export default function TodoView({
  todo: { content, done, children },
}: {
  todo: Todo;
}) {
  return (
    <li className="flex gap-3 p-4 ring-1 ring-gray-200">
      <button
        type="button"
        className="bg-gray-400 cursor-pointer p-2 rounded-full"
      >
        {done ? 'X' : 'O'}
      </button>
      {content}
      <ul>
        {children.map((todo) => (
          <TodoView key={todo.id} todo={todo} />
        ))}
      </ul>
    </li>
  );
}
