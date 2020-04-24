//Thhis is a 3rd part
let name = 'Adam';

console.log(name + "'s apples");
console.log("hello word!");

$('h1').text('We are having a 10 minunte break until 17:05');
$('p').html('Stay at home Coding Camo, Likes:<strong>13</strong>');

$('strong').css('background', 'lime');
$('strong').css('padding', '10px');

let color = 'blue';

$('h2').toggleClass('color');
$('h2').toggleClass('color');

$('ul').append('<li>My name is '+ name +'</li>');
$('ul').append('<li id="special-list-item">Removeable '+ name +'</li>');

$('#special-list-item').remove()

let addButtonHandler = () => {
    if ($('li').length < 5) {
    $('ul').append('<li>My name is '+ name +'</li>');
}
};

function addButtonHandler2() {
    if ($('li').length < 5) {
    $('ul').append('<li>My name is '+ name +'</li>');
}
};

$('#add-button').click(addButtonHandler);

$('#remove-button').click(() => {
    $('li:last-child').remove();
})
//This is the 4th part

let age = 12;

console.log('Starting the if');
console.log('This is a sentence'.toLowerCase());

if(age < 18) {
console.log('Not old enough to drink');
} else {
console.log('Old enough to drink');
}
console.log('This is after if');

let colors = ['orange', 'lime', 'magenta', 'yellow', 'blue'];

$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]);

colors.push('purple')

colors.forEach((color) => {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
});

for (let i = 0; i < 100; i = i + 1) {
    console.log(i);
}

//This is a JavaScript comment
/*
This is a multiline JavaScript comment
*/

//This is the first part:/*


