/* Задача #1/1*/

// let a = prompt("Введите первое число: ", '');
// let b = prompt("Введите второе число: ", '');
// let num = [a, b];
// let c = a**2,
//     d = b**2;
// alert (`Числа ${a} и ${b} в квадрате = ${c} и ${d}`)

/*   Задача #1/2*/

// let a = prompt("Введите значение Фаренгейта: ", '');
// let fahrenheit = [a];
// let b = (a - 32) / 1.8;
// alert (`Градус Фаренгейта ${a} равен градусу ${b} по Цельсии`)


/*   Задача #1/3
Дано число x. Выведите x, 2x, 3x, 4x и 5x, разделенных тремя дефисами, как показано ниже.*/

// let x = 7 //prompt("Введите число: ", '');
// let massiv=[];
// for (let i = 1; i <= 5; i++ ){
//     massiv += ((i*x) + "---")
// }
// alert(massiv)


/*   Задача #1/4
Напишите программу, которая запрашивает у пользователя вес в килограммах 
и конвертирует его в фунты. В килограмме 2,2 фунта.*/

// let weight = prompt("Введите ваш вес в кг: ", '');
// let lb = weight * 2.2
// alert(`Ваш вес в фунтах равен ${lb}`)

//   Задача #1/5

// let a = prompt("Введите первое число: ", '');
// let b = prompt("Введите второе число: ", '');
// let c = prompt("Введите третье число: ", '');
// let nums = [a, b, c];
// let total = (+nums[0] + +nums[1] + +nums[2])
// let avg = (total/nums.length)
// alert(`Ваши числа: ${nums}
// Сумма этих чисел = ${total}
// А среднее значение = ${total/nums.length}`)
// console.log("Даны числа: " + nums)
// console.log("Сумма этих чисел = " + avg)
// console.log("Среднее значение этих чисел = " + avg) 

//   Задача #1/6

// let price = prompt("Введите цену за обед: ", '');
// let service = price * 0.15;
// alert (`Ваша сумма с обслуживанием составила ${(+price)+(+service)} сом`);
// console.log(+price + +service);

//-------------------------------------------------------------------------
/*   Задача #2/1*/

// let name = prompt("Как вас зовут?", '');
// alert (`Здравствуйте, ${name}!!! Мы рады видеть вас`)

/*   Задача #2/2*/

// let city = prompt("В каком городе вы живете?", '');
// alert(`${city} состоит из ` + city.length + ` букв`)

/*   Задача #2/3*/

// let userName = prompt("Введите ваше полное имя?", '');
// let letter = prompt("Какую букву в вашем имени вывести на экран?(Введите Число)", '')

// console.log(userName[(letter-1)]);
// alert (`Под номером ${letter} в Вашем имени находится буква = ${userName[(letter-1)]}`)

//   Задача #2/4

// let text = prompt("Ваш любимый фильм?", '');
// alert(`${text.toUpperCase()}  
// А у вас отличный вкус!`);

// ------------------------------------------------------
/*Задача #3/1
Даны 3 целых числа. Вывести наибольшее из них*/

// let numbers = [3, 333, 353];
// let maxNum = numbers[0];
// for(let i = 1; i < numbers.length; i++) {
//     if (maxNum < numbers[i]) {
//         maxNum = numbers[i];
//     }    
// }
// console.log(maxNum)

/*   Задача #3/2 
Даны 3 вещественных числа a,b,c. Существует ли треугольник со сторонами a,b,c.*/
// let nums = [10,15,6];
// let storona = nums[0]
// if ((nums[nums.length-3] + nums[nums.length-2]) > nums[nums.length-1], 
//     (nums[nums.length-2] + nums[nums.length-1]) > nums[nums.length-3], 
//     (nums[nums.length-1] + nums[nums.length-3]) > nums[nums.length-2]) {
//   console.log(true)
// }else {
//   console.log(false)
// }
/*   Задача #3/3
Дано 3 целых числа. Вывести их в порядке возрастания.*/

// let a = 14;
// let b = 2; 
// let c = 4;

// if (a > b){
//   let temp = a;
//   a = b;
//   b = temp;
// }
// if (b > c){
//   let temp = b;
//   b = c;
//   c = temp;
// }
// if (a > b){
//   let temp = a;
//   a = b;
//   b = temp;
// }

// alert(a + "," + b + "," + c)

//   Задача #3/4

// let num = prompt("Введите целое число", '');
// if (num%5==0 && num%7==0) {
//     alert(`Число ${num} делится на 5 и будет равен ${num/5},
// Также оно делится на 7 и будет равен ${num/7}`)
// }
// if (num%5==0 && num%7!=0) {
//     alert(`Число ${num} делится только на 5 и будет равен ${num/5}`)
// }
// if (num%5!=0 && num%7==0) {
//     alert(`Число ${num} делится только на 7 и будет равен ${num/7}`)
// }
// if (num%5!=0 && num%7!=0){
//     alert(`Число ${num} НЕ делится на 5 и 7`)
// }

//   Задача #3/5 
//Даны два целых числа. Верно ли, что они заканчиваются на одну и ту же цифру? 

// function nums(a,b) {
//     let aStr = String(a);
//     let bStr = String(b);

//     if (aStr[aStr.length-1] === bStr[bStr.length-1]){
//         alert("Верно!");
//     } else{
//         alert('Не верно!');
//     };
// }
// let a = prompt("Введите первое число", '');
// let b = prompt("Введите второе число", '');
// nums (a,b)

/*   Задача #3/6
Дано четырехзначное число. Верно ли, что сумма двух крайних цифр равна сумме двух средних?
*/
// let a = 5185;
// let x = String(a)
// if ((+(x[x.length-4])+ +(x[x.length-1])) == (+(x[x.length-2])+ +(x[x.length-3]))) {
//             console.log("Верно = сумма двух крайних цифр равна сумме двух средних");
//         } else{
//             console.log('Не верно = сумма двух крайних цифр НЕ равна сумме двух средних');
//         };
// console.log(a);

/*   Задача #3/7
Дано 5 целых чисел. Вывести наибольшее из них.
*/
// let nm = [1, 5, 111, 65, 104];
// let maxNum = nm[0];
// for(let i = 1; i < nm.length; i++) {
    
//     if (maxNum < nm[i]) {
//         maxNum = nm[i];
//     }    
// }
// console.log(nm)
// console.log("Наибольшее из этих чисел: " +maxNum)



/*   Задача #3/8
Расширение задачи 
“Пользователь вводит свое имя и число (место буквы). Надо вывести какая буква находится под этим номером (числом).”
Если пользователь вводит число больше чем количество букв в имени или вводит отрицательное число, выводить ссобщение что буквы под таким числом в имени нет.
*/
// let userName = prompt("Введите ваше полное имя?", '');
// let letter = prompt("Какую букву в вашем имени вывести на экран?(Введите Число)", '')
// if (userName[(letter-1)]){
//     alert (`Под номером ${letter} в Вашем имени находится буква = ${userName[(letter-1)]}`)
// } else {
//     alert (`Буквы под номером ${letter} в Вашем имени нет`)
// }

/*----------------------------------------*/
/*   Задача #4/1
Пользователь вводит предложение. 
Вывести каждый символ из предложения отдельно в каждой строке. 
*/
// let text = "Там где мой страх, там мой успех!";
// for (let i=0; i < text.length; i++){
//     console.log(text[i]);
// }
/*   Задача #4/2
Дано целое положительное число N. 
Найти сумму квадратов всех натуральных чисел от 0 до N. 
*/
// let num = 5;
// let sum = 0;
// for(let i=0; i <= num; i++){
//     let multi = 0
//     if(i>0) {
//         multi = i ** 2;
//         console.log(multi)
//     }
//     sum += multi
// }
// console.log(sum)

/*   Задача #4/3
Дано целое число N. Вычислить с точностью 2 знака после запятой
*/
// let num = 5;
// let sum = 0
// for(let i=1; i <= num; i++){
//     let factorial = 1;
//     for(let j=1; j<=i; j++){
//         factorial = factorial*j
//     }
//     let delenie = 1/factorial;
//     console.log(delenie);
//     sum += delenie
// }
// alert(sum.toFixed(2));


/*   Задача #4/4
Определить N-е по порядку число Фибоначчи. Т.е. числами Фибоначчи являются 1,1,2,3,5,8,13,…
*/
// let num = 6;
// let one = 0;
// let two = 1;

// for (let i = 1; i <= num; i++) {
// 	let current = one + two;
	
// 	one = two;
// 	two = current;
	
// 	console.log(current);
// }
// console.log("1,1,2,3,5,8,13,…")

/*   Задача #4/5
Пользователь вводит произвольное число N. 
Далее программа просит ввести N раз числа на каждый ввод, 
выводится alert с сообщением что число четное (если делится на 2 без остатка) или нечетное.*/

// let count = 5

// for (let i=1; i < count; i++){
//   let enterNum = prompt("Введите число?", '');
//   if (enterNum%2 == 0){
//     alert("Это число четное");
//   }
//   else {
//     alert("Это число НЕчетное");
//   }
// }


/*   Задача #4/6
Убрать лишние повторяющиеся символы в предложении
“Write  a program   that asks the user to enter a number….” */

// function isAlpha(str) {
//   let regexp = /\w/;
//   let matches_array = str.match(regexp);
//   if(matches_array != null){
//     return true;
//   }
//   return false
// }


// let failText = "Write  a program   that asks the user to enter a number....";
// let mustText = ""
// for(let i = 0; i <= failText.length-1; i++){
//   if(failText[i] == failText[i+1] && !isAlpha(failText[i]+'')){
//   }
//   else{
//     mustText = mustText + failText[i]
//   }
  
  

// }
// console.log(mustText)
// console.log("------------")
// console.log(failText)

/*   Задача #5/1
Выведите прямоугольник, используя числа 0-9, с входными размерами n*m, где n — длина и m — высота.*/
// let nums = [0,1,2,3,4,5,6,7,8,9]
// let n = 5;
// let m = 3;

// for(let i=0; i<m; i++){
//   let str1 = '';
//   for(let j=0; j<n; j++){ 
//     str1 += j + i

//   }
//   console.log(str1)

// }

/* Задача 5/2
Задача на сортировку массива чисел. Нельзя использовать готовые функции, напишите программу которая сортирует массив.
Ввод: [6, 45, 2, 8, 7, 10, 0]
Вывод: [0, 2, 6, 7, 8, 10, 45]
*/
// let nums = [6, 45, 2, 8, 7, 10, 0]
// for (let i = 0; i<nums.length; i++){
//   for (let j = 0; j<nums.length; j++) {
//       if (nums[i] < nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//       }
//   }
// }
// console.log(nums)

/* Задача 5/3
Посчитать количество артиклей в тексте. Где артикли это 'a', 'an', 'the'. */

// let text = `
// If the stars should appear one night in
// a thousand years,  how would  men  believe
// and  adore,  and  preserve  for  many  generations
// the remembrance of the city of God?'
// EMERSON


//      Aton 77, director of Saro  University, thrust  out a  belligerent lower
// lip and glared at the young newspaperman in a hot fury.
//      Theremon 762 took that  fury in his  stride. In his earlier  days, when
// his  now widely syndicated column was  only a mad idea  in a cub  reporter's
// mind,  he  had  specialized  in 'impossible'  interviews.  It  had  cost him
// bruises, black  eyes, and broken bones; but it had given him an ample supply
// of coolness and self-confidence. So he  lowered the outthrust  hand that had
// been so pointedly ignored  and calmly  waited  for the aged director to  get
// over the  worst. Astronomers were queer ducks, anyway, and if Aton's actions
// of the last two months meant anything; this same Aton was the queer-duckiest
// of the lot.
// `
// let artATotal = 0
// let artAnTotal = 0
// let artTheTotal = 0
// for (let i=0; i < text.length; i++){
//       for(let j=0; j< text[i].length; j++) {
//         if((text[i]+text[i+1]+text[i+2]).toLowerCase() == "\n"+"a "){
//           artATotal++;
//         }
//         if((text[i]+text[i+1]+text[i+2]).toLowerCase() == " a "){
//           artATotal++;
//         }
//         if((text[i]+text[i+1]+text[i+2] + text[i+3]).toLowerCase() == "\n"+"an "){
//           artAnTotal++;
//         }
//         if((text[i]+text[i+1]+text[i+2] + text[i+3]).toLowerCase() == " an "){
//           artAnTotal++;
//         }
//         if((text[i]+text[i+1]+text[i+2] + text[i+3] + text[i+4]).toLowerCase() == "\n"+"the "){
//           artTheTotal++;
//         }
//         if((text[i]+text[i+1]+text[i+2] + text[i+3] + text[i+4]).toLowerCase() == " the "){
//           artTheTotal++;
//     }
//   }
// }
// console.log (text)
// console.log("Артиклей 'а' в тексте " +artATotal);
// console.log("Артиклей 'аn' в тексте " +artAnTotal);
// console.log("Артиклей 'The' в тексте " +artTheTotal);
// console.log("Всего артиклей в тексте " + [+artATotal + +artAnTotal + +artTheTotal]);


//console.log ("Спасибо за внимание!")
