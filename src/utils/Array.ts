export const isArrayEqual = (first: any[], second: any[]): boolean => {
  const isLengthEqual = first.length === second.length;
  const isItemEqual = first.every((val, index) => val === second[index]);
  return isItemEqual && isLengthEqual;
};

export const isArrayEqualWith = (a?: any[], b?: any[], iteratee = 'id') => {
  const isLengthEqual = a?.length === b?.length;
  const isItemEqual = a?.every(
    val => !!b?.find(i => i[iteratee] === val[iteratee])
  );
  return isLengthEqual && isItemEqual;
};
