export default function getAmountOfPage(totalItem, limit) {
  return Math.ceil(totalItem / limit);
}