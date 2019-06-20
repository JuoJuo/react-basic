


export default function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  return Object.getPrototypeOf(obj) === Object.prototype;
  // let proto = obj;
  // while (Object.getPrototypeOf(proto)) {
  //   proto = Object.getPrototypeOf(obj)
  // }
  // return Object.getPrototypeOf(obj) === proto;
}
