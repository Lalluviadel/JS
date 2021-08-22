/*Задание 1.
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

let num = Math.floor(Math.random() * 3000) - 1000;
console.log('Случайное число: ' + num);


function* divideMyNum(myNum) {
  for (let i = myNum; i > 0; i = Math.floor(i/10)) {
    yield i % 10;
  }
}


function defineMyProperties(someObj, someValues) {
	let j = 0;
	for (let key in someObj) {
			if (someValues[j] === undefined) {
				someObj[key] = 0;
			}
			else{
				someObj[key] = someValues[j];
			}
			j++;
		}
	return someObj;
}


function numToObj(myNum) {
	if (0 <= myNum && myNum <= 999){
		const myObj = {
			units: null,
			tens: null,
			hundreds: null,
		}
		let myValues = [...divideMyNum(myNum)];
		const myFilledObj = defineMyProperties(myObj, myValues);
		return(myFilledObj);
	}
	console.log('Указанное число не в диапазоне от 0 до 999');
	const myEmptyObj = {};
	return myEmptyObj;
}

// let result = numToObj(1); // для проверки числа с 0 десятков и сотен
let result = numToObj(num);
console.log(result);


/*2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на
 базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на
 объектно-ориентированную базу.
*/


function myGood(name, price) {
    this.name = name;
    this.price = price;
}

var good1 = new myGood('солдатик', 15);
var good2 = new myGood('машинка гоночная', 50);
var good3 = new myGood('раскраска "Техника"', 50);
var good4 = new myGood('фигурка героя', 70);
var good5 = new myGood('краски акварель', 90);


const myBasket = {
	goods: [[good1, 10], [good2, 3], [good3, 2], [good4, 3], [good5, 1],],
	basketAmount(){
		result = this.goods.reduce((sum, current) => sum + (current[0].price*current[1]), 0);
		console.log('Задание 2.\nСумма товаров в вашей корзине: ' + result + ' рублей'); // 700
	}
}
myBasket.basketAmount();


/*3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
*/