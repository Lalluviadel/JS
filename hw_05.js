/*Задание 1.
Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)
*/


function chessboardRender() {
	let myChessboard = document.createElement('table');
	let arrLetters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	let arrNums = [' ', '8', '7', '6', '5', '4', '3', '2', '1'];

	for (let i = 0; i < 10; i++) {
		let row = document.createElement('tr');

		for (let j = 0; j < 10; j++) {
			let cell = document.createElement('td');
			cellSettings(cell);

			if (i > 0 && i != 9) {
				if (j > 0 && j != 9){
					colorMycell(i, j, cell);
				}
				else{
					cell.textContent = arrNums[i];
				}
			} else {
				cell.textContent = arrLetters[j];
			}

			row.appendChild(cell);
		}
		myChessboard.appendChild(row);
	}

	document.body.appendChild(myChessboard)
	myChessboard.style.border = '1px solid grey';
	myChessboard.style.borderCollapse = 'collapse';
}


function cellSettings(myCell) {
	myCell.style.height = 50;
	myCell.style.width = 50;
	myCell.style.textValign = 'middle';
	myCell.style.textAlign = 'center';
	myCell.style.fontWeight = 'bold';
}


function colorMycell(rowNum, cellNum, myCell) {
		if (rowNum % 2 == 0){
			if (cellNum % 2 != 0){
				myCell.style.background = 'black';
			}
		} else {
			if (cellNum % 2 == 0){
				myCell.style.background = 'black';
			}
		}
	myCell.style.border = '1px solid grey';
}


chessboardRender();


/*
Задание 2.
Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
	2.1. Пустая корзина должна выводить строку «Корзина пуста»;
	2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
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


let myBasket = {
	goods: [[good1, 10], [good2, 3], [good3, 2], [good4, 3], [good5, 1],],
	// goods: [], // для проверки вывода текста о пустой корзине
	basketAmount() {
		result = this.goods.reduce((sum, current) => sum + (current[0].price*current[1]), 0);
		return result;
	},
	goodsQuantity(){
		return (this.goods.length);
	},
	basketOutput(){
		if (this.goods.length == 0){
		document.body.insertAdjacentHTML('beforeEnd','<div>Корзина пуста</div>');
		} else {
		document.body.insertAdjacentHTML('beforeEnd',`<div>В корзине: ${this.goodsQuantity()} товаров на сумму ${this.basketAmount()} рублей</div>`);
		}
	}
}


myBasket.basketOutput();
