var age = prompt('Введите свой возраст')

if(age > 0 && age <= 18){
    var msg = 'Вы ещё молоды. Вам нужно учиться'
}
else if(age > 18 && age <= 50){
    msg = 'Вам нужно работать'
}
else if(age > 50 && age <= 59){
    msg = 'Вам скоро на пенсию'
}
else if(age > 59 && age <= 100){
    msg = 'Вы пенсионер'
}
else {
    msg = 'Что-то пошло не так'
}

alert(msg)