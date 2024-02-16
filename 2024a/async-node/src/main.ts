import axios from 'axios';

type Todo = { userId: number; id: number; title: string; completed: boolean };

// old promise syntax
// function main() {
//   axios
//     .get('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => {
//       const data = response.data as Todo;
//       console.log(`I still have to do ${data.title}`);
//     })
//     .catch((err) => {
//       console.error('we ran into an error...');
//       console.error((err as Error).message);
//     });
// }

// new awesome async / await syntax
async function main() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    const data = response.data as Todo;
    console.log(`I still have to do ${data.title}`);
  } catch (err) {
    console.error('we ran into an error...');
    console.error((err as Error).message);
  }
}

// Promise.all([main(), main()]);

main();
