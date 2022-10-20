export default function numberToArray(countPages) {
  const pagesArray = []
  for (let i = 0; i < countPages; i++) {
    pagesArray.push(i + 1);
  }
  return pagesArray;
}