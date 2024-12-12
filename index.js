document.addEventListener('DOMContentLoaded', function () { // Ждем загрузки HTML
    const cart = [];  // Используем массив для хранения товаров в корзине
    let totalPrice = 0;  // Переменная для подсчета итоговой суммы

    // ДОБАВЛЕНИЕ ТОВАРА В КОРЗ
    function addToCart(event) { // ФУНКЦИЯ СОДЕРЖИТ ИНФОРМАЦИЮ  СОБЫТИИ
        const button = event.target;  // ИВЕНТ С КНОПКОЙ НАЖАТИН
        const productId = button.getAttribute('data-id');  // ID товара
        const productName = button.getAttribute('data-name');  // 
        const productPrice = parseFloat(button.getAttribute('data-price'));  

        // Создание объекта товара
        const product = { // СОЗДАЕТСЯ ОБЪЕКТ КОТОРЫЙ СОХРАНЯЕТСЯ
            id: productId,
            name: productName,
            price: productPrice
        };

        // Добавляем товар в массив корзины
        cart.push(product);
        console.log(`Добавлен товар: ${productName} - ${productPrice} ₽`);

        // Подсчет итоговой суммы
        totalPrice += productPrice;
        console.log(`Итоговая сумма: ${totalPrice.toFixed(2)} ₽`); // ОКРУГЛИЛ
    }

    // Обработчик кликов по кнопкам "Купить" 
    const buyButtons = document.querySelectorAll('.buy');  // ИСПОЛЬЗУЮ МЕТОД QUERY ЧТОБЫ ВЫБРАТЬ ВСЕ БАИ
    buyButtons.forEach(button => { // МЕТОД ПЕРЕБИРАЕТ БАИ 
        button.addEventListener('click', addToCart);  // МЕТОД ОБРАБОТЧИК СОБЫТИЙ СОБЫТИЕ КЛИК
    });
});

// Добавил МЕТОД ОБРАБОТЧИКА СОБЫТИЯ КОТОРЫЙ В ТАБЛИЦЕ МЕНЯЕТ

function sortTable(columnIndex) {
    const table = document.querySelector('table'); // НАШЕЛ ТАБЛИЦУ
    const rows = Array.from(table.rows).slice(1);  // ПОЛУЧИЛ ВСЕ КРОМЕ ЗАГОЛОВКА 

    // Сортировка строк по выбранному столбцу
    rows.sort((rowA, rowB) => {
        
        if (columnIndex === 2) { // ПРОВЕРЯЮ СОЛД 3 АЙДИШНИК
            const cellA = rowA.cells[columnIndex].textContent.replace('million', '').trim();
            const cellB = rowB.cells[columnIndex].textContent.replace('million', '').trim(); // УДАЛИЛ СЛОВО ПРОБЕЛЫ

          
            return parseInt(cellB) - parseInt(cellA); // СОРТ ПО УБЫВАНИЮ
        }

        
        return 0;
    });

    // ВСТАВКА ОТСОРТИРОВАННОЙ ТАБЛИЦЫ 
    rows.forEach(row => table.appendChild(row));
}

// Добавляем обработчики событий для заголовков
const headerCells = document.querySelectorAll('th');
headerCells.forEach((header, index) => {

  
    if (index === 2) {
        header.addEventListener('click', () => sortTable(index));  // событие при клике
    }
});

// СОБЫТИЕ ЗАКРЫТИЕ САЙТА
window.addEventListener('beforeunload', function (e) { // ПЕРЕД ЗАКРЫТИЕМ САЙТА
     
    alert("Вы уверены, что хотите покинуть страницу? Все несохраненные данные могут быть потеряны."); // ФУНКЦИЯ ВЫВОД

  
    e.returnValue = ''; 
    return '';  // ВОЗВРАТ
});

document.addEventListener('DOMContentLoaded', function () {
    
    function addNewRow() { // Создал функцию
        const table = document.querySelector('table');  
        const newRow = document.createElement('tr');    
        newRow.innerHTML = `
            <th scope="row">1million</th>
            <td>чота там</td>
            <td>11million</td>
        `;
        table.appendChild(newRow);  // Добавляем строку в таблицу
    }

    // Привязываем обработчик к кнопке
    const addRowButton = document.getElementById('add-row');  // Кнопка С АЙДИШНИКОМ
    addRowButton.addEventListener('click', addNewRow);  
});