import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="p-4 ring-1 ring-gray-400 inline-flex m-1 rounded-lg shadow-lg flex-col">
      <p>hello guys! Counter is at {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export function TextInput() {
  const [text, setText] = useState('');

  console.log(text);

  return (
    <input
      onChange={(evt) => setText(evt.target.value)}
      onClick={() => {
        setText('');
      }}
      value={text}
    />
  );
}
