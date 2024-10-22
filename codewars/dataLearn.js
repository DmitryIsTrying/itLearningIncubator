// // Задаем начальную дату (1 октября 2024 года)
// let startDate = new Date(Date.UTC(2024, 9, 1)); // Месяцы начинаются с 0, поэтому 9 - это октябрь

// // Функция для форматирования даты
// function formatDate(date) {
//     const options = { year: 'numeric', month: 'long', timeZone: 'America/New_York' }; // Используем временную зону UTC-5
//     return date.toLocaleDateString('ru-RU', options) + ' (UTC-5)';
// }

// // Генерируем массив из 10 месяцев
// let dates = [];
// for (let i = 0; i < 10; i++) {
//     const nextMonth = new Date(startDate);
//     nextMonth.setMonth(startDate.getMonth() + i); // Увеличиваем месяц
//     dates.push(formatDate(nextMonth));
// }

// // Выводим даты
// dates.forEach(date => console.log(date));
// Как это работает:
// Создание начальной даты: Используется Date.UTC, чтобы создать дату в UTC.
// Форматирование: Функция formatDate форматирует дату в удобный вид с использованием toLocaleDateString.
