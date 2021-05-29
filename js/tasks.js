function task1() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        })
    };
}

function getDate() {
    let now = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hours = {
        13: 1,
        14: 2,
        15: 3,
        16: 4,
        17: 5,
        18: 6,
        19: 7,
        20: 8,
        21: 9,
        22: 10,
        23: 11
    };
    result = 'Today is : ' + days[now.getDay()] + '.\nCurrent time is : ';
    result += (now.getHours() >= 12 && now.getHours() <= 23) ?
        (hours[now.getHours() - 1] + ' PM:') : now.getHours() + ' AM:';
    result += now.getMinutes() + ':' + now.getSeconds();

    alert(result);
    console.log(result);
}

function reverseNumber() {
    let x = prompt('Введите число: ', 12345);
    let result = x.toString().split('').reverse().join('');

    alert(`Число ${x} теперь: ${result}`)
    console.log(result);
}

function getFactorial() {
    let num = Number(prompt('Введите чило для нахождения факториала: ', 5));
    let result = 1;
    for (let i = num; i > 0; i--) {
        result *= i;
    }

    alert(`Факториал числа ${num}: ${result}`)
    console.log(result);
}

function getMax() {
    let a = Number(prompt('Введите чило (1): ', 5));
    let b = Number(prompt('Введите чило (2): ', 10));
    result = (a > b) ? a : b;
    alert(`Большее из двух чисел: ${result}`)
    console.log(result);
}

function joinElements(array = ["Red", "Green", "White", "Black"]) {
    result = '\'' + array.join(',') + '\'';
    result += '\n\'' + array.join('+') + '\'';
    alert(`Array: ${array} \n${result}`);
    console.log(result);
}

function getMonth() {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = prompt('Введите дату в формате "11/13/2014": ', '11/13/2014');
    let result = (date.indexOf('/') >= 0) ? month[Number(date.split('/')[0]) - 1] : (date.indexOf('.') >= 0) ? month[Number(date.split('.')[0]) - 1] : 'Error, Incorrect data!';

    alert(`Output: ${result}`)
    console.log(result);
}

function isUppercase() {
    let str = prompt('Введите строку: ', 'Hello world');
    let result = (!isNaN(str[0])) ? 'not symbol' : (str[0] == str[0].toUpperCase()) ? 'uppercase' : 'lowercase';

    alert(`First character is ${result}`)
    console.log(result);
}

function drowSmile() {
    let canvas = document.getElementById('smile');
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctx.stroke();
}

function task2() {
    getDate();
    reverseNumber();
    getFactorial();
    getMax();
    joinElements();
    getMonth();
    isUppercase();
    drowSmile();
}

function task3() {
    for (let i = 1; i < 7; i++) {
        console.log(document.getElementById('string-' + i).textContent);
    }
}

function task4() {
    let elem = document.querySelectorAll('div[class=element]');
    for (let i = 0; i < 6; i++) {
        (i < 3) ? elem[i].style.color = 'red': elem[i].style.color = 'green'
    };
}

function task5() {
    let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
    let parentEl = document.getElementById('todo-list');

    parentEl.style.marginLeft = '50px';
    tasks.forEach(function (task) {
        let childEl = document.createElement('li');
        childEl.classList.add('todo-list-task');
        childEl.innerHTML = task;
        parentEl.appendChild(childEl);
    });
}

function task6() {
    let elements = document.querySelector('article');
    elements = elements.querySelectorAll('p');
    elements.forEach(element => element.insertAdjacentHTML('afterend', '<hr/>'));
}

function task7() {
    let parentEl = document.getElementById('cart-items');
    let elements = parentEl.querySelectorAll('div');
    elements[1].remove();

    let spanEl = document.createElement('span');
    spanEl.classList.add('qty');
    spanEl.textContent = ' x 4';
    let newEl = document.createElement('div');
    newEl.textContent = 'Canned Fish';
    newEl.appendChild(spanEl);

    parentEl.replaceChild(newEl, elements[4]);
}

function task8() {
    let parentEl = document.getElementById('todo-list');
    let task;
    while (task = prompt("Введите задачу: ", "Закончить проект...")) {
        let childEl = document.createElement('li');
        childEl.classList.add('todo-list-task');
        childEl.innerHTML = task;
        parentEl.appendChild(childEl);
    };
}