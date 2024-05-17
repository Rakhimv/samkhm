export function formatTimestamp(timestamp: any) {
    try {
        const date = new Date(timestamp);

        // Список названий месяцев
        const months = [
            "янв", "фев", "мар", "апр", "май", "июн",
            "июл", "авг", "сен", "окт", "ноя", "дек"
        ];

        // Получение дня, месяца и года из объекта даты
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        // Формирование строки вида "22 апр, 2024"
        const formattedDate = `${day} ${months[monthIndex]}, ${year}`;
        return formattedDate;
    } catch {
        return 'NaN'
    }
}


export function formatTimeDetal(timestamp: any) {
    try {
        const date = new Date(timestamp);

        // Список названий месяцев
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];

        // Получение дня, месяца и года из объекта даты
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        // Получение часов и минут из объекта даты
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        // Формирование строки вида "18 Апреля 2024, 11:05"
        const formattedDate = `${day} ${months[monthIndex]} ${year}, ${hours}:${minutes}`;
        return formattedDate;
    } catch {
        return 'NaN';
    }
}


export function getLang() {
    return localStorage.getItem('lang') 
}