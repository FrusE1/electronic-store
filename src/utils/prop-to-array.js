export default function propToArray(obj) {
  let array = [];

  for (let key in obj) {
    array.push(key)
  }

  return array;
}