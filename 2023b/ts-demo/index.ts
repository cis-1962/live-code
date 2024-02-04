function makeImportant(arr: string[]) {
  return arr.map((item) => `${item.toUpperCase()}!!!`);
}

const screaming = makeImportant(['kashyap', '456']);
