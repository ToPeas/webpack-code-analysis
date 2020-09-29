import c from "./c";

import(/* webpackChunkName: "[a]" */ "./a.js").then(({ a }) => {
  console.log("打印a", a);
});

console.log("c", c);
console.log("我是app.js");
