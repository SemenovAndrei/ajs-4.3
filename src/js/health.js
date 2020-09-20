export default function getArraySorted(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
