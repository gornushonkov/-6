/*Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число
 как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.*/
 function firstFunc (num1) {
    return function secondFunc (num2) {
      return num1 + num2;
    };
  }
 function sumFunc (num1) {
   return function
   secondSumFunc (num2) {
     return num1 + num2;
   };
 }
 console.log(sumFunc());
 