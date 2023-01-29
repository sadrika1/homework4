// задание 1

let a = 0;
while (a < 2) {
  console.log('Привет!');
  a++;
}

// задание 2
let b = 1;
while (b <= 5) {
  console.log(b);
  b++;
}

// задание 3
let c = 7;
while (c <= 22) {
  console.log(c);
  c++;
}

// задание 4
const obj = {
    'Коля' : '200',
    'Вася' : '300',
    'Петя' : '400'
  };  
  for (let user in obj) {
    console.log(`${user} - зарплата ${obj[user]} долларов`);
  }

// задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
  n /= 2;
  num++;
}
console.log(n)
console.log(num)

/* альтернативное решение задания 5
let num = 0;

for (let n = 1000; n > 50; num++) {
    n /= 2;
    console.log(n);
}
console.log('Количество итераций = ' + num);

*/

// задание 6
let firstFriday = 1;
for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
};

