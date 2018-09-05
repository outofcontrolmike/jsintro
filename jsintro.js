// Michael Wilson

// predicting final values of problems

/*let a = 2;

a -= 1;
a++;

let b = 2;

const c = a + b *b;  // 6
const d = a * b + b; // 6
const e = a * (b + b); // 8
const f = a * b / a; // 2
const g = b / a * a; // .... 2/4 = .5?  

console.log(a,b,c,d,e,f,g);


// from celcius to Fahrenheit degree

let c;
let F; 
F = [c] * 9/5 + 32;

console.log ("enter a celcius temperature");
console.log (F);



let a;
a = 10;
console.log(a * 1);
console.log(a * 2);
console.log(a * 3);
console.log(a * 4);
console.log(a * 5);

*/

 
for(i=1; i <=100; i++)
    {
        if (i % 3 === 0 && i % 5 === 0 )  // If both conditons are true ===
            {
                console.log("FizzBuzz")
            }
        else if (i % 3 === 0 )   // if modulous 3
            {
                console.log("Fizz");
            }
        else if (i % 5 === 0 )
            {
                console.log("Buzz");  // if modulos 5
            }
        else
            {
                console.log(i);   // 
            }
        }

