// 1.
// 1 вариант:
function celsiusToFahrenheit(Tc) {
  let Tf = (9 / 5) * Tc + 32;
  alert('Температура по Фаренгейту: ' + Tf);
}
celsiusToFahrenheit(10);
celsiusToFahrenheit(0);


// 2 вариант:
let Tc = 0;
let Tf = (9 / 5) * Tc + 32;
alert ('Температура по Фаренгейту: ' + Tf);

// 2.
let admin;
let name;
name = 'Василий';
admin = name;
alert(admin);

// 3. Результат конкатенации: 1000108, тип string.
let myString = 1000 + "108";
alert(myString);
alert(typeof(myString));

/* 4. Атрибуты defer и async необходимы для того, чтобы не происходило остановки при загрузке
HTML для выполнения скрипта JS (или чтобы не происходило ожидание полной загрузки HTML для начала
выполнения скрипта JS).

При использовании данных атрибутов процессы будут происходить одновременно.

При этом, используя defer мы вначале должны дождаться полной загрузки страницы для выполнения скрипта,
а используя async мы получаем его выполнение как только загрузится сам скрипт (скрипты).

Еще одно отличие - defer сохраняет порядок следования скриптов, если их несколько и сначала загружается не первый,
а второй и т.д. по счету - выполняться они будут все равно
в том порядке, который установлен в коде.

Атрибут async не сохраняет порядок, выполняются первыми те скрипты, которые первыми загрузились.
Оба атрибута применяются только для подключаемых внешних скриптов.
*/