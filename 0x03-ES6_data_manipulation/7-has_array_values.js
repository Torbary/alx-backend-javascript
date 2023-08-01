export default function hasValueFromArray(set, array) {
  return array.every((item) => set.has(item));
}
