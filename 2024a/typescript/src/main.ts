// function makeImportant(arr: string[]) {
//   return arr.map((item) => `${item.toUpperCase()}!!!`);
// }

// const important = makeImportant(['thomas', 'kashyap', 5])

// let x;
// x = 5;

// type DogBreed = 'lab' | 'retriever' | 'terrier';
// type Dog = { name: string; breed: DogBreed };

// const rocket: Dog = { name: 'Rocket', breed: 'lab' };

// type Dog = { age: number };
// interface Pet {
//   name: string;
// } // works with types and interfaces!

// type PetDog = Dog & Pet;
// const myDog: PetDog = { name: 'Larry', age: 7 };

// type IdMap = {
//   [key: string]: number;
// };

// const myName = 'Thomas';

// const obj = { [myName]: 5 };

// const ids: IdMap = {
//   kashyap: 456,
//   dan: 451,
// };

// class JavaScriptTA {
//   private actualSalary: number;

//   constructor(
//     public name: string,
//     private salary: number,
//   ) {
//     /* we can put member visibility in the parameters to
//      * generate this next line:  */
//     // this.name = name;
//     this.actualSalary = salary * 0.5;
//     console.log(`I love getting paid $${salary}!`);
//   }

//   public ping() {
//     console.log(`Slacked ${this.name}`);
//   }
//   private pingLecturers() {
//     console.log(`Slacked Thomas and Tuneer`);
//   }

//   static age = 5;
// }

// const thomas = new JavaScriptTA('Thomas', 10);

// function getFirst<T>(arr: T[]) {
//   // ✅ we get accurate return type as well!
//   return arr[0];
// }

// const myNumbers = [5, 6, 8]

// console.log(getFirst(myNumbers))

// function releaseAssignment(name: string, due: number) {
//   return { name, released: new Date(), due: Date.parse(due) };
// }

// const x =5

// type y = typeof x

// // in steps...
// type ReleaseFunction = typeof releaseAssignment;
// type Assignment = ReturnType<ReleaseFunction>;

// function gradeAssignment(assignmentData: Assignment) {
//   conso
// }

// console.log('hey guys');

// function defenestrate(
//   person: string,
//   opts?: { time?: number; forceful?: boolean },
// ) {
//   console.log(
//     `Threw ${person} out of window, ${opts?.forceful ?? true ? 'forcefully' : 'lightly'}.`,
//   );
// }

// defenestrate('thomas', { forceful: false });

type Result<T, E> = { success: true; value: T } | { success: false; error: E };

function doSomethingSketchy(): Result<string, Error> {
  const time = new Date().getTime();
  return time > 100000
    ? { success: true, value: `Awesome, the time is ${time}` }
    : { success: false, error: new Error('Dude.. you messed up') };
}

const result = doSomethingSketchy();
if (result.success) {
  result.value;
} else {
  result.error;
}
// function writePaper(author: string): { author: string; title: string };
// function writePaper(
//   author: string,
//   didGrind: true,
// ): { author: string; title: string; hoursOfSleepLost: number };

// function writePaper(author: string, didGrind?: boolean) {
//   return {
//     author,
//     title: 'cool paper bro',
//     hoursOfSleepLost: didGrind ? 5 : undefined,
//   };
// }

// const results = writePaper('Thomas', true);

// results.hoursOfSleepLost;
