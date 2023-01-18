export const splitArray = <T extends unknown>(
  array: T[],
  targetParts: number
): T[][] => {
  const mutableArray = [...array];
  const result = [];
  const parts = targetParts < array.length ? targetParts : array.length;
  for (let i = parts; i > 0; i--) {
    result.push(mutableArray.splice(0, Math.ceil(mutableArray.length / i)));
  }
  return result;
};
