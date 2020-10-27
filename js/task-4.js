const credits = 23580;
const pricePerDroid = 3000;
let numberOfDroid = prompt('Введите количество дроидов');

if (numberOfDroid === null) {
  console.log('Отменено пользователем!');
} else {
  let totalPrice = pricePerDroid * numberOfDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(`Вы купили ${numberOfDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
  }
}
