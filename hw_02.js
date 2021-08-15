/*Задание 1.
Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?

1) c = ++a; alert(c);           // 2
переменная c изначально undefined, применяется операция префиксного инкремента с шагом 1 переменной a и присваивание результата переменной c, итого c = 1 + 1 = 2

2) d = b++; alert(d);           // 1
переменная d изначально undefined, применяется операция с постфиксным инкрементированием (b++), которая изменяет значение переменной b при последующем использовании. То есть в момент выполнения выражения переменная b все еще равна 1, и этот результат присваивается переменной d.

3) c = (2+ ++a); alert(c);      // 5
после выполнения выражения 1 переменная a имеет значение 2, далее значение инкрементируется на 1 и становится равным 3, к результату прибавляется 2, итоговый результат, равный 5, присваивается переменной c.

4) d = (2+ b++); alert(d);      // 4
после выполнения выражения 2 переменная b имеет значение 2,
далее применяется постфиксное инкрементирование, при котором переменная b при следующем использовании получает значение на 1 больше. В текущем выражении переменная b будет все еще равна 2, к этому значению прибавляется 2, итоговый результат 4 присвоен переменной d.

5) alert(a);                    // 3
   alert(b);                    // 3
после выполнения выражений 3 и 4 переменные a и b обе имеют значение 3, переменной a оно было присвоено префиксной (одномоментной) инкрементацией, переменной b - постфиксной, при повторном использовании переменной b уже будет соответствовать новое значение с учетом инкремента.


Задание 2.
Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
разберем выражение var x = 1 + (a *= 2) согласно порядку убывания важности программных операторов.
Наибольший приоритет у оператора группировки (скобки), будет выполнено присваивание (*=) в скобках и переменная a получит значение 4, следующий по приоритету - оператор сложения промежуточного результата (4) с единицей (5), наименьший приоритет имеет присваиваивание переменной x итогового результата.
Таким образом, x будет равен 5.*/


/* Задание 3.
Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность;
- если а и b отрицательные, вывести их произведение;
- если а и b разных знаков, вывести их сумму; ноль можно 
считать положительным числом.*/

let a = Math.floor(Math.random() * 201) - 100;
let b = Math.floor(Math.random() * 201) - 100;

console.log('Задание 3, значение a: ' + a)
console.log('Задание 3, значение b: ' + b)

function workingOutTheBranching(num1, num2) {
	if (num1 >= 0 && num2 >= 0) {
		return num1 - num2
	} else if (num1 < 0 && num2 < 0){
		return num1 * num2
	}
	return num1 + num2
}

let myRes = workingOutTheBranching(a, b)
console.log('Задание 3, значение результата функции: ' + myRes)


/* Задание 4.
Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.*/

let a2 = Math.floor(Math.random() * 16);
console.log('Задание 4, значение a2: ' + a2)

function testingTheSwitch(myNum) {
	switch(myNum){
		case 1:
			console.log(1)
		case 2:
			console.log(2)
		case 3:
			console.log(3)
		case 4:
			console.log(4)
		case 5:
			console.log(5)
		case 6:
			console.log(6)
		case 7:
			console.log(7)
		case 8:
			console.log(8)
		case 9:
			console.log(9)
		case 10:
			console.log(10)
		case 11:
			console.log(11)
		case 12:
			console.log(12)
		case 13:
			console.log(13)
		case 14:
			console.log(14)
		default:
			console.log(15)
	}
}

testingTheSwitch(a2)


/*Задание 5.
Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/

let e = 2, f = 4
console.log('Задание 5, значения переменных: ' + e + ' ' + f)

function addition(num1, num2) {
	return num1 + num2
}

function subtraction(num1, num2) {
	return num1 - num2
}

function multiplication(num1, num2) {
	return num1 * num2
}

function division(num1, num2) {
	return num1 / num2
}

let result = addition(e, f)
console.log('Задание 5, значение результата сложения: ' + result)
result = subtraction(e, f)
console.log('Задание 5, значение результата вычитания: ' + result)
result = multiplication(e, f)
console.log('Задание 5, значение результата умножения: ' + result)
result = division(e, f)
console.log('Задание 5, значение результата деления: ' + result)


/*Задание 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/
function mathOperation(arg1, arg2, operation) {
	switch(operation){
		case 'addition':
			return addition(arg1, arg2)
		case 'subtraction':
			return subtraction(arg1, arg2)
		case 'multiplication':
			return multiplication(arg1, arg2)
		case 'division':
			return division(arg1, arg2)		
	}
}

let myResult = mathOperation(e, f, 'addition')
console.log('Задание 6, значение результата сложения: ' + myResult)
myResult = mathOperation(e, f, 'subtraction')
console.log('Задание 6, значение результата вычитания: ' + myResult)
myResult = mathOperation(e, f, 'multiplication')
console.log('Задание 6, значение результата умножения: ' + myResult)
myResult = mathOperation(e, f, 'division')
console.log('Задание 6, значение результата деления: ' + myResult)


/*Задание 7.
*Сравнить null и 0. Попробуйте объяснить результат.*/


// NaN
console.log(null == 0)    //false
console.log(null > 0)     //false
console.log(null >= 0)    //true
/*Причина этому такова:
- нестрогое равенство (==) не требует приведения null к числовому значению, поэтому null не равен 0
- сравнение выполняется как абстрактный алгоритм сравнения для отношений и приводит к преобразованию null к числовому значению (0), поэтому третье выражение получает результат true (0 >= 0)
*/

console.log(null == undefined)    //true
console.log(null > undefined)     //false
console.log(null >= undefined)    //false


/*Причина этому такова:
- null == undefined - жесткое правило, указанное в спецификации языка JS
- при сравнении undefined преобразуется в NaN, а это специальное значение, которое при любом сравнении возвращает false
- по этим же причинам выражение с undefined и 0 при использовании операторов сравнения или нестрогого равенства также возвратит false
- то же правило действует и при сравнении undefined и NaN (всегда false)
*/

console.log(NaN == 0)    //false
console.log(NaN > 0)     //false
console.log(NaN >= 0)    //false

// Любое сравнение с NaN приводит к результату false


/*Задание 8.
*С помощью рекурсии организовать функцию возведения числа
 в степень. Формат: function power(val, pow), где val –
  заданное число, pow – степень.
 */

function power(val, pow) {
	if (pow == 1) {
 		return val
	}else{
 		return val * power(val, --pow)
 	}
 }

let myExpResult = power(3, 4)
console.log('Задание 8, 3 в степени 4: ' + myExpResult)
myExpResult = power(4, 4)
console.log('Задание 8, 4 в степени 4: ' + myExpResult)
myExpResult = power(2, 3)
console.log('Задание 8, 2 в степени 3: ' + myExpResult)