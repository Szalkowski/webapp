var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
 $(function(){
    $('.hamburger').click(function(){
            $('.menu').slideToggle("fast");
        });
    $(document).on("click", function(event){
        var $trigger = $(".hamburger");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".menu").slideUp("fast");
            };
    });
});
