let total = 0;
// let input;

// while (input !== null) {
//   input = prompt('Ведите число');
//   if (!Number.isNaN(Number(input))) {
//     total += Number(input);
//   } else {
//     alert('Было введено не число, попробуйте еще раз');
//    }
// } 
  
// alert(`Общая сумма чисел равна ${total}`);

while (true) {
  let input = prompt('Ведите число');
 
  if (input === null) {
    break;
  }

  input = Number(input);
const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } 
  
  total += input;
} 

alert(`Общая сумма чисел равна ${total}`);