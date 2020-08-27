$(document).ready(function(){
// ciclo for per la generazione dei quadrati, aggiungo tramite jquery un div con classe "square"
    for(var i = 0; i<36; i++){
        $(".container").append('<div class="square"></div>');
    }

    $(".square").click(function(){
    // memorizzo nella variabile casella il quadrato cliccato
        var casella = $(this);
        console.log(casella);
        $.ajax(
          {
              // richiamo l'API che genera il nostro numero random
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function (risposta) {
                // se il numero random generato è <= 5, aggiungo la classe yellow al quadrato cliccato (casella)
                if(risposta.response <=5){
                    casella.addClass("yellow");
                }
                // se il numero random generato è >5, aggiungo la classe green al quadrato cliccato (casella)
                 else {
                    casella.addClass("green");
                }
              console.log(risposta);
              $("#risultati").html(risposta.response);
            },
            error: function (richiesta, stato, errori) {
              console.log(errori);
              console.log(stato);
              alert("E' avvenuto un errore. " + errori);
            }
          }
        );
    });

});
