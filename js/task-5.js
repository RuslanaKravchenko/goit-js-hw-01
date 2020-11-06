// let country = prompt('Введите страну');
// let price;
// let countryToLowerCase = country.toLowerCase();
// switch (countryToLowerCase) {

//   case 'китай':
//     price = 100;
//     alert(`Доставка в ${countryToLowerCase[0].toUpperCase() + countryToLowerCase.slice(1)} будет стоить ${price} кредитов`);
//     break;
  
//   case 'чили':
//     price = 250;
//     alert(`Доставка в ${countryToLowerCase[0].toUpperCase() + countryToLowerCase.slice(1)} будет стоить ${price} кредитов`);
//     break;
  
//   case 'австралия':
//     price = 170;
//     alert(`Доставка в ${countryToLowerCase[0].toUpperCase() + countryToLowerCase.slice(1)} будет стоить ${price} кредитов`);
//     break;
  
//   case 'индия':
//     price = 80;
//     alert(`Доставка в ${countryToLowerCase[0].toUpperCase() + countryToLowerCase.slice(1)} будет стоить ${price} кредитов`);
//     break;
  
//   case 'ямайка':
//     price = 120;
//     alert(`Доставка в ${countryToLowerCase[0].toUpperCase() + countryToLowerCase.slice(1)} будет стоить ${price} кредитов`);
//     break;
  
//   default:
//     alert('В вашей стране доставка не доступна');
  
// }

const countryInputRef = document.querySelector('input[name="country"]');
const buttonRef = document.querySelector('.button');
let price;

buttonRef.addEventListener('click', function () {
  let country = countryInputRef.value;
 
  
  switch (country.toLowerCase()) {
  case 'китай':
    price = 100;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  
  case 'чили':
    price = 250;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  
  case 'австралия':
    price = 170;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  
  case 'индия':
    price = 80;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  
  case 'ямайка':
    price = 120;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  
  default:
    alert('В вашей стране доставка не доступна');
  
}
});