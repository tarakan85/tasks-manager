export const cutAndInsertAfter = <T>(
  array: T[],
  fromIndex: number,
  toIndex: number
) => {
  const newArray = array.slice();
  const [removed] = newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, removed);

  return newArray;
};
