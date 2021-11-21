// Зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18]


// 1. перебрати його циклом while

//
// let i = 0;
// while (i < arrayOfNumbers.length) {
//     console.log(arrayOfNumbers[i]);
//     i++;
// }

// 2. перебрати його циклом for

// ;
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     let arrayOfNumbersItem = arrayOfNumbers[i];
//     console.log(arrayOfNumbersItem)
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < arrayOfNumbers.length) {
//    if (i%2 === 0) {
//        console.log(arrayOfNumbers[i])
//    }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     if (i%2 === 0) {
//         console.log(arrayOfNumbers[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// i = 0;
// while (i < arrayOfNumbers.length){
//     if ((arrayOfNumbers[i] % 2) === 0){
//         console.log(arrayOfNumbers[i]);
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     if ((arrayOfNumbers[i] % 2) === 0 ) {
//         console.log(arrayOfNumbers[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

//     for (let item of arrayOfNumbers) {
//     if (item % 3 === 0) {
//         item = 'okten';
//     }
//     console.log(item)
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
//     let item = arrayOfNumbers[i];
//     console.log(item)
//
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 9.7. замінити кожне число кратне 3 на слово "okten"

// for (let i = arrayOfNumbers.length-1; i>=0 ; i--)
//     if (arrayOfNumbers[i] % 3 === 0) {
//         arrayOfNumbers[i] = 'okten'
//         console.log(i);
//         console.log(arrayOfNumbers[i]);
//     }

// 9.6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
//     const arrayOfNumber = arrayOfNumbers[i];
//     if (arrayOfNumber % 2 === 0) {
//         console.log(arrayOfNumber);
//     }
//
// }

// 9.5. перебрати циклом while та вивести  числа тільки парні  значення

// i = arrayOfNumbers.length - 1;
// while(i>=0) {
//     i--;
//     if (i % 2 === 0) {
//         console.log(arrayOfNumbers[i])
//     }
// }


// 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     if(arrayOfNumbers[i] % 2 !=== 0 ) {
//         console.log(arrayOfNumbers[i]);
//     }
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = arrayOfNumbers.length - 1;
// while (i > 0) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
//     i--;
// }

// 9.2. перебрати його циклом for

// for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
//     const arrayOfNumber = arrayOfNumbers[i];
//     console.log(arrayOfNumber)
// }

// 9.1. перебрати його циклом while

// let i = arrayOfNumbers.length - 1;
// while (i > 0) {
//     console.log(arrayOfNumbers[i]);
//     i--;
// }