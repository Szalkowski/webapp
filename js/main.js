var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
 $(function(){
    $('.menu').hide();

    $('.hamburger').on('click', function(){
        $('.menu').toggle();
    });
    $('#content').on('click', function(){
        $('.menu').toggle();
    });
 });
