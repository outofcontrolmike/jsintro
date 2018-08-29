let a = 2;

a -= 1;
a++;

let b = 2;

const c = a + b *b;  // 6
const d = a * b + b; // 6
const e = a * (b + b); // 8
const f = a * b / a; // 2
const g = b / a * a; // .... 2/4 = .5?  

console.log(a,b,c,d,e,f,g);


