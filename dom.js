/*
var headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
var newHeadingText = prompt("Введите новый заголовок;");
headingElement.innerHTML = newHeadingText;



var newHeadingText = prompt("Введите новый заголовок:");
$("#main-heading").text(newHeadingText);





var per = 10;
var Massege = function () {
    console.log("Обратный отсчёт до взрыва" + per + "сек")
    per++;
}
var intervalId = setInterval(Massege, 1000);



var rightOffset = 200;
var moveheading = function () {
    $("#heading").offset({ right: rightOffset});
    rightOffset--;
    if (rightOffset < 0) {
        rightOffset = 200;
    }
};
setInterval(moveheading, 30);

 
var clickhandler = function (event){
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY });
}
$("html").click(clickhandler);

$("html").mousemove(function (event){
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY });
    });
*/

var direction = 'вправо';
var offset = 0;
$('#header').offset({left: offset, top: offset});

var moveheading = function(){
    if (direction == 'вправо'){
        $('#heading').offset({left: offset})
        offset++;
        if (offset > 200){
            offset=0;
            direction = 'вниз'
        }
    }else if(direction === 'вниз'){
    $('#heading').offset({top: offset});
    offset++;
    if (offset >200 ) {
        offset= 200;
        direction = 'влево';
    }
}else if(direction === 'влево'){
$('#heading').offset({left: offset});
offset--;
if (offset <0 ) {
    offset = 200;
    direction = 'вверх';
}
}else if(direction === 'вверх'){
    $('#heading').offset({top: offset});
    offset--;
    if (offset <0 ) {
        offset = 0;
        direction = 'вправо';
}
}
}
setInterval(moveheading, 30);