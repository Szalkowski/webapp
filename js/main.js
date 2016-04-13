var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
 $(function(){

    $('.hamburger').on('click', function(event){
        event.stopPropagation();
        $('.menu').toggle();
    });
    $('.menu').on('click', function(){
        $('.menu').hide();
   });
});
