$(document).ready(function(){
    for(var i = 0; i<36; i++){
        $(".container").append('<div class="square"></div>');
    }
// SOLO UNA PROVA
    $(".square").click(function(){
        $(this).addClass("blu");
    });
});
