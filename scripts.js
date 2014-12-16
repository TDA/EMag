$(document).ready(function(){
var pgcount=1;
var totalpg=document.getElementsByTagName('section').length;
$('body section:nth-child(2n)').addClass('right');
$('body section:nth-child(2n+1)').addClass('left');

$('#next').click(function(){
pgcount+=2;
if(pgcount<=totalpg){

$('.reading.left')
.addClass('read')
.removeClass('reading');

$('.reading.right')
.addClass('flipLeft')
.addClass('read')
.removeClass('reading')
.next().removeClass('read').removeClass('flipRight').addClass('reading')
.next().removeClass('read').addClass('reading');
}
//else{
//alert("end of pages");
//}
return false;


});

$('#prev').click(function(){
pgcount-=2;
if(pgcount>=1){

$('.reading.right')
.addClass('read')
.removeClass('reading');

$('.reading.left')
.addClass('flipRight')
.addClass('read')
.removeClass('reading')
.prev().removeClass('read').removeClass('flipLeft').addClass('reading')
.prev().removeClass('read').addClass('reading');
}
return false;
});









});