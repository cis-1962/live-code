import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>hello guys! Counter is at {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
    </>
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
