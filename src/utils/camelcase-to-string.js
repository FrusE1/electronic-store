export default function camelCaseToString(str) {
  let result = str.replace(/[А-Я][а-я]*/gi, n => n.replace(/([А-Я])/g, ' $1').replace(/^ /, '').toLowerCase());
  return result.charAt(0).toUpperCase() + result.slice(1)
}