
/*Задание 3* с урока 5:
Сделать так, чтобы товары в каталоге выводились при помощи JS:
3.1. Создать массив товаров (сущность Product);
3.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
*/

/*Задание 1 текущего урока (6):
	Доработать модуль корзины.
	a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
	b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
*/

function init(rawArrow) {
	let allProducts = createProduct(rawArrow);
	createCatalog(allProducts);
	document.body.insertAdjacentHTML('beforeEnd','<h3 style="color: #191970; font-size:1.5rem;"><b>Корзина</b></h3>')
	let emptyBasket = createBasket();
	let allButtons = document.getElementsByTagName('button');
	for (let i = 0; i < allButtons.length; i++) {
		allButtons[i].onclick = function() {buyProduct(allProducts, emptyBasket)};
	}
}

function createProduct(productsArrow) {
	let result = [];
	for (let i = 0; i < productsArrow.length; i++) {
		let myProduct = {
    		name: productsArrow[i][0],
    		price: productsArrow[i][1],
    		currency: 'руб.',
		}
		result[i] = myProduct;
	}
	return(result);
}


function createCatalog(productsObj) {
	document.body.insertAdjacentHTML('afterbegin','<h1 style="color: #191970; font-size:2.2rem;"><b>Каталог</b></h1>');
	let catalogStructure = buildCatalog(productsObj);
	let catalogMain = document.createElement('div');
	catalogMain.id = 'catalogMain';
	StyleMyBigBlock(catalogMain);
	document.body.appendChild(catalogMain);
	catalogMain.append(...catalogStructure);
}	


function buildCatalog(currentProducts) {
	let result = [];

	for (let i = 0; i < currentProducts.length; i++) {
		let catProduct = document.createElement('div');

		for (let key in (currentProducts[i])) {
  			let catElem = document.createElement('div');
  			catElem.id = 'catElem';
  			catElem.style.padding = '0.25em';
  			catElem.append(currentProducts[i][key]);
  			catProduct.append(catElem);
		}
			catProduct.id = 'catElem';
			styleMyProduct(catProduct);
			styleMyCatalogProduct(catProduct)
			catRow = giveMeAButton(catProduct, i);
		result.push(catRow);
	}
	return(result);
}


function createBasket() {
	basObj = createBasketObject();
	let basMessage = document.createElement('div');
	basMessage.id = 'basket message';
	basMessage.style.color = '#191970';
	basMessage.style.fontSize = '1.2rem';
	basMessage.textContent = basObj.basketOutput();
	document.body.appendChild(basMessage);
	return(basObj);
}


function createBasketObject() {
	let myBasket = {
		goods: [],
		basketAmount() {
			let result = this.goods.reduce((sum, current) => sum + (current[0].price*current[1]), 0);
			return result;
		},
		goodsQuantity(){
			let numGoods = 0;
			for (let subArr of this.goods) {
				numGoods+=subArr[1];
			}
			return(numGoods);
		},
		basketOutput(){
			if (this.goods.length == 0){
				return('Корзина пуста');
			} else {
				return(`В корзине: ${this.goodsQuantity()} товаров на сумму ${this.basketAmount()} рублей`);
			}
		}
	}
return(myBasket);
}


function buyProduct(productsObj, basketObj) {
	let currentNumber = event.target.id.split("_")[1];
	let currentProduct = productsObj[currentNumber];
	addInBasket(basketObj.goods, currentProduct);
	renderMyBasket(basketObj);
}


function addInBasket(goodsInBasketObj, newProduct) {
	for (let subArr of goodsInBasketObj) {
		if (subArr[0] == newProduct) {
			subArr[1]++;
			return;
		}
	}
goodsInBasketObj.push([newProduct, 1]);
}


function renderMyBasket(basObject) {
	document.getElementById("basket message").innerHTML=basObject.basketOutput();
	let basMain = document.createElement('div');
	basMain.id = 'basMain';
	StyleMyBigBlock(basMain);

	for (let subArr of basObject.goods) {
		let basRow = document.createElement('div');
		basRow.id = 'basRow';
		styleMyRows(basRow);
		basRow.style.borderBottom = '1px solid';

		for (let elem of subArr) {
			renderBasketTrivia(basRow, elem, subArr);
  		}
	  	basMain.append(basRow);
	}
	isBasketExists(basMain);
}


function renderBasketTrivia(basRowObj, currentElem, parentSubArrow) {
	let basProduct = document.createElement('div');
	basProduct.id = 'basProduct';
  	if (Number.isInteger(currentElem)) {
  		basProduct.append(currentElem);
  		basRowObj.append(basProduct);
		styleMyProduct(basProduct, 1.2, 0.5, false);
		basProduct.style.margin = '1px 15px 1px 65px';
  	}else{
  		for (let key in (currentElem)) {
  			let basElem = document.createElement('div');
  			basElem.id = 'basElem';
  			basElem.style.padding = '0.25em';
  			
  			let temp = currentElem[key];
  			if(key == 'price'){
  				temp = currentElem[key] * parentSubArrow[1];
  			}
  			basElem.append(temp);
  			basProduct.append(basElem);
	  	}
		basRowObj.append(basProduct);
		styleMyProduct(basProduct, 1.2);
  	}
}


function isBasketExists(readyBasket) {
	let outdated = document.getElementById("basMain");
	outdated ? document.body.replaceChild(readyBasket, outdated) : document.body.appendChild(readyBasket);
}


function StyleMyBigBlock(bigBlockObj) {
	bigBlockObj.style.display = 'flex';
	bigBlockObj.style.padding = '1em';
	bigBlockObj.style.background = '#9cc5ff';
	bigBlockObj.style.flexDirection = 'column';
}


function styleMyRows(rowObj) {
	rowObj.style.display = 'flex';
	rowObj.style.justifyContent = 'space-between';
}


function styleMyCatalogProduct(catProdObj) {
	catProdObj.style.background = '#E6E6FA';
	catProdObj.style.border = '1px solid';
	catProdObj.style.borderRadius = '10px';
}


function styleMyProduct(prodObj, j = 1.5, i = 0.25, a = true,) {
	prodObj.style.display = 'flex';
	prodObj.style.fontSize = `${j}rem`;
	prodObj.style.margin = '1px';
	prodObj.style.justifyContent = 'space-between';
	prodObj.style.padding = `${i}rem`;
	prodObj.style.flexDirection = 'row';
	if (a) {
		prodObj.firstChild.style.flexGrow = '1';
		prodObj.style.flexGrow = '1';
	}
}


function giveMeAButton(prodObj, counter) {
	let buttonObj = document.createElement('button');
	buttonObj.id = `buyProduct_${counter}`;
	butTxt = document.createTextNode('Купить');
	buttonObj.appendChild(butTxt);
	styleMyButton(buttonObj);

	let catRowObj = document.createElement('div');
	catRowObj.append(prodObj, buttonObj);
	catRowObj.id = 'catRowObj';
	styleMyRows(catRowObj);
	return(catRowObj);
}


function styleMyButton(butObj) {
	butObj.style.backgroundColor = '#00BFFF';
    butObj.style.padding = '15px 32px';
    butObj.style.textAlign = 'center';
    butObj.style.textDecoration = 'none';
    butObj.style.display = 'inline-block';
    butObj.style.fontSize = '22px';
    butObj.onmouseover = function() {butObj.style.background = '#FFA500'};
    butObj.onmouseout = function() {butObj.style.background = '#00BFFF'};  
}


let listOfProducts = [['Солдатик', 15], ['Машинка гоночная', 50], ['Раскраска "Техника"', 50], ['Фигурка героя', 70], ['Краски акварель', 90],];


window.onload = function() {init(listOfProducts)};
