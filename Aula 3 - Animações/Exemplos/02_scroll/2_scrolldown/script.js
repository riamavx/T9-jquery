// $(document).ready(function() {
//     console.log($("#button").offset(), 'quem é o offset')

//    $("#button").click(function() {
//        alert("Left:" + $(this).offset().left)
//    })
// })


// //SCROLL "DOWN" só que não 

// --- https://api.jquery.com/position/ 
// --- https://api.jquery.com/offset/

$(document).ready(function() {
    
    //exemplo de offset e position()
    $("#button").click(function() {
        console.log($("#button").offset(), 'offset')
       console.log($("#button").position(), 'position left')
   })

   //"descer" => referencia: andar do elevador
   $(".down").click(function() {
       $("html, body").animate({
           scrollTop: $(".titulo").offset().top
       },
       5000
       );
   });

   //"subir" => retornando as origens
   $(".up").click(function() {
       $("html, body").animate({
           scrollTop: "0"
       },
       5000
       );
       console.log($(".titulo").offset().top, 'top do meu botao up')
   })