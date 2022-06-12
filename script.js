// 1 задание
// Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

// function Raz(a,b,c) {

//     y=((a-b)/c);
//     console.log(y);

// }

// Raz(a=prompt(), b=prompt(), c=prompt());

// 2 задание
// Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

// function Raz(a) {

//     console.log((a*a) , (a*a*a));

// }

// Raz(a=prompt());

//3 задание
// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b

// function Min(a,b) {

//         if (a<b) {
//             console.log (a); 
//         } else if (a>b) {
//             console.log (b);
//         } else if (a=b) {
//             console.log ('Они равны');
//         } 
//     }


//     function Max(a,b) {

//         if (a<b) {
//             console.log (b);
//         } else if (b<a) {
//             console.log (a);
//         } else if (a=b) {
//             console.log ('Они равны');
//         } 
//     }

// Min(a=prompt(), b=prompt());
// Max(a=prompt(), b=prompt());

//4 задание

// Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, 
// диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив. 

// function Mas (t , d){
// 	arr=[];
// 	for(; t <= d; t++){
//     arr.push(t);
// 	}

// return arr;
// }

// function ShowArr () {
//     console.log(arr);
// }


// Mas(Number(t=prompt(`От`)), Number(d=prompt(`До`)));
// ShowArr();

//  5 задание

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
// Если четное - пусть функция возвращает true, если нечетное — false. 

// function isEven (a) {
//     if(a % 2 == 0) { return true; }
//         else    {   return false;   } 
                               
// }

// console.log(isEven(10));
// console.log(isEven(9));


// 6. Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел. 
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.  

// function isEven (a) {
//     if(a % 2 == 0) { return true; }
//         else    {   return false;   } 
                               
// }
// function newArray(array)
// {   
//     evenArr=[];
//     for ( let i = 0; i<array.length; i++)
//     {   
//         if (isEven (array[i])) {
//             evenArr.push(array[i]) } 
//     }

//     return evenArr;
// }


// newArray([2, 5, 6, 7, 8, 9, 12]);
// console.log(evenArr);





// 7 задание 
// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы): 
// 1
// 22 
// 333 
// 4444 
// 55555 
// 666666 
// 7777777 
// 88888888 
// 999999999 
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, 
// непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, т
// о пирамида должна быть нарисована этим символом, например: 


// function pir (a , b) {
//     if ( b == false ){
//     for ( let i = 1; i <= a ; i++){
//         for (let j=1; j <=i; j++){
//             document.write(i);

//         }
//         document.write('<br>');
//     } }
//     else{
//     for ( let i = 1; i <= a ; i++){
//         for (let j=1; j <=i; j++){
//             document.write(b);

//         }
//         document.write('<br>'); }

// }
// }
// pir( 8 , "$" );


// 8 задание
// Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:
// Кол-во рядов должно вводиться с клавиатуры. 
// Доп., напишите такую же фцию, но которая выведет перевернутый треугольник. 

// let line = '';
// for (let h = 1; h <= 5 ; h++){
       
//         for ( let j = 5; j >= h; j--){
//             line += ` `;
//         }
//         for (let i = 1; i <= h*2-1 ; i++){
//     line += `*`;
//         }
//     console.log(line)
//     line = '';




// }
// Перевернутый
// let h = 10;
// let line = '';
// let v = h;


// for (let i = 1; i <= h ; i++){

// for(let  i = h ; i >= v ; i-- ){
//     line += ` `;
// }    
// for (let i = 1; i <= v*2-1 ; i++){
//     line +=`*`;
    
  
// }

// v--;
// console.log(line)
// line = '';

// }




// for (let i = 1; i <= h ; i++){

//     for (let j = h*2-1 ; j >= 1   ; j-2){
//         line += `*`;
//     }
//     for (let j = 1; j <= h-i; j++){
//         line += ` `;
//     }
      
        
//     console.log(line)
//     line = '';




// }

// 9 задание 
// Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000. 
// arr=[0, 1, 1];
// f1 = 1;
// f2 = 1;

// function fiba () {
     
 
//     Fn =  f1+f2;
//     arr.push(Fn);
//     if (Fn>100) { return arr; }
//     f2=f1;
//     f1=Fn;
//     Fn=0;


// fiba()
 
    


// }

// fiba ();
// console.log(fiba())




// 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

// check = 0;
// function sumas (b) {

// chislo = String(b);

//     for ( let i = 0 ; i<= chislo.length-1; i++){
        
//         check += +chislo[i];
//     }
//     console.log(check);
    
    
//     if ( check > 9 ){
        
//         b = check;
//         check = 0;
//         sumas(b);

//     }
// }

// sumas(9453);

// 11. Дан массив с числами (передается параметром). Выведите
// // последовательно его элементы, используя рекурсию и не используя цикл.

// function sorti(arr){
// 	i=0;
	
// if (i < arr.length) {
// 	console.log(arr[i]); 
// 	i++;
// 	sorti();
// }



// }

// sorti ([10, 5, 3, 22]);


// 11. Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

// let i = 0;

// function printrra (arr) {
//     checkarr = arr;
//     console.log(arr[i]);
//     i++;
    
//     if ( i <= arr.length-1) {
        
//         printrra(arr);
//     } 

// }

// printrra ([1, 2, `check`, 542]);

// 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
// группы студента и выводящую введённые данные в следующем виде:

// *****************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович *
// *****************************


// РЕАЛИЗАЦИЯ НЕ УДАЧНАЯ ИСПРАВЛЯТЬ НЕ СТАЛ

// let 
// title = `*Домашняя работа: «Функции»`,
// done = `*Выполнил: студент гр. `,
// fullName =`*`,
// ramka = ``;

// function print ( fam, firstname, secondname, num) {
//     fam += ` `;
//     firstname += ` `;
    
// fullName += fam += firstname +=secondname;
// done += num;


// // определение самой длинной строки для отрисовки рамки
// if (title.length > fullName.length ){ // если Заголовок больше ФИО

//     if ( title.length > done.length) { // если Заголовок больше ФИО и больше выполнил
//         for (let i = 0 ; i <= title.length; i++){
//             ramka += `*`
//         }
        
//         // приведение к общей длинны
        
//         countSpaceDone = title.length - done.length;
//         countfullName = title.length - fullName.length;

//         for (let i = 0 ; i <= countSpaceDone-1; i++){
//             done += ` `
//         }
//         done += `*`
//         for (let i = 0 ; i <= countfullName-1; i++){
//             fullName += ` `
//         }
//         fullName += `*`


//         title += `*`;

//     } else { // если Заголовок больше ФИО но меньше чем Выполнил
//         for (let i = 0 ; i <= done.length; i++){
//             ramka += `*`
//         }
        
//         // приведение видение к общей длинны

//         countSpaceTitle = done.length - title.length;
//         countfullName = done.length - fullName.length;
//         for (let i = 0 ; i <= countSpaceTitle-1; i++){
//             title += ` `
//         }
//         title += `*`
//         for (let i = 0 ; i <= countfullName-1; i++){
//             fullName += ` `
//         }
//         fullName += `*`


//         done += `*`;
//     }

// } else { // если ФИО больше чем заголовок
//     if ( fullName.length > done.length) { // если ФИО больше чем заголовок и больше чем Выолнил
//         for (let i = 0 ; i <= fullName.length; i++){
//             ramka += `*`
//         }
//         // приведение видение к общей длинны
//         countSpaceTitle = fullName.length - title.length;
//         countSpaceDone = fullName.length - done.length;
//         for (let i = 0 ; i <= countSpaceTitle-1; i++){
//             title += ` `
//         }
//         title += `*`
//         for (let i = 0 ; i <= countSpaceDone-1; i++){
//             done += ` `
//         }
//         done += `*`;

//         fullName += `*`


//     } else { // если ФИО больше чем заголовок но меньше чем Выполнил
//         for (let i = 0 ; i <= done.length; i++){
//             ramka += `*`
//         }

//         countSpaceTitle = done.length - title.length;
//         countfullName = done.length - fullName.length;
//         for (let i = 0 ; i <= countSpaceTitle-1; i++){
//             title += ` `
//         }
//         title += `*`
//         for (let i = 0 ; i <= countfullName-1; i++){
//             fullName += ` `
//         }
//         fullName += `*`;

//         done += `*`;
//     }

// }
// console.log(ramka)
// console.log(title)
// console.log(done)
// console.log(fullName)
// console.log(ramka)




// }

// print (
//     fam = prompt(`Фамилию`),
//     firstname = prompt(`Имя`),
//     secondname = prompt(`Отчество`),
//     num = prompt(`Номер группы`)
// )