function myFunction() {
    setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}
 $(function(){
    var $menu = $('.menu');
    $('.hamburger').on('click', function(e){
        e.stopPropagation();
        $menu.toggle('slow');
    });
    $('body').on('click', function(){
        $menu.hide();
    });
    $menu.on('click', function(e){
        e.stopPropagation();
    });
});

