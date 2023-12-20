let $ = document;
let prevNexIcon = $.querySelectorAll('.header .icons i'),
daysTag = $.querySelector('.wrapper .days'),
currentDate = $.querySelector('.current-date');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const renderCalender = () => {
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(), // getting first day of month. ["Sun", "Mon", "Tus", "Wen", "Tur", "Fri", "Sat"].
    lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(), // getting last date of month.
    lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(), // getting last day of month. ["Sun", "Mon", "Tus", "Wen", "Tur", "Fri", "Sat"].
    lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate(); // getting last date of previous month.
    
    liTag = "";
    for(let i = firstDayOfMonth; i > 0; i--){ // creating li of previous month last days.
        liTag +=  `<li class="inactive"> ${lastDateOfLastMonth - i + 1} </li>`;
    };

    for(let i = 1; i <= lastDateOfMonth; i++){ // creating li of all days of current month.
        // adding class to li if the current day, month, and year matched.
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
        
        liTag += `<li class="${isToday}"> ${i} </li>`;
    };

    for(let i = lastDayOfMonth; i < 6; i++){ // creating li of next month of first days.
        liTag +=  `<li class="inactive"> ${i - lastDayOfMonth + 1} </li>`;
    };

    currentDate.innerHTML = `${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML = liTag;
};
renderCalender();