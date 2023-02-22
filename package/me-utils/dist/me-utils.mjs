const a = (t) => t < 10 ? "0" + t : t.toString(), p = (t) => {
  const o = t ? new Date(t) : new Date(), n = a(o.getHours()), e = a(o.getMinutes()), c = a(o.getSeconds());
  return `${n}:${e}:${c}`;
}, g = (t) => Object.prototype.toString.call(t), i = (t) => {
  const o = ["[object Object]", "[object Array]"], n = g(t);
  let e = null;
  const c = (r, u) => {
    e = u === 1 ? {} : [];
    for (const l in r) {
      const s = r[l], y = g(s);
      e[l] = o.includes(y) ? i(s) : s;
    }
  };
  switch (n) {
    case "[object Object]":
      c(t, 1);
      break;
    case "[object Array]":
      c(t, 2);
      break;
    default:
      e = t;
      break;
  }
  return e;
}, D = {
  /**
   * 输出日志
   * @param arg 参数
   */
  logger(...t) {
    console.log(p(new Date()), ...t);
  },
  deepClone: i
}, b = {
  ...D
};
export {
  b as default
};
