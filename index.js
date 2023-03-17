

var lenght=document.querySelectorAll("button").length;
var boton = document.querySelector(".botonprueba");
var i= 0;
while(i<lenght){
    document.querySelectorAll("button")[i].addEventListener("click", 
    function (){ //anonymous function
        
       var letter = this.innerHTML;
       switch(letter){
            case "w":
                var sound = new Audio("sounds/snare.mp3");
                sound.play();
            case "a":
                var sound = new Audio("sounds/tom-1.mp3");
                sound.play();
            break;
            case "s":
                var sound = new Audio("sounds/tom-2.mp3");
                sound.play();
            break;
            case "d":
                var sound = new Audio("sounds/tom-3.mp3");
                sound.play();
            break;
            case "j":
                var sound = new Audio("sounds/crash.mp3");
                sound.play();
            break;
            case "k":
                var sound = new Audio("sounds/kick-bass.mp3");
                sound.play();
            break;
            case "l":
                var sound = new Audio("sounds/tom-4.mp3");
                sound.play();
            break;

            default:
                console.log("press a correct button");
       }
       
    });
    i++;
}


boton.addEventListener("click", function(){
    var sound2 = new Audio("sounds/tom-4.mp3");
    sound2.oncanplaythrough = function(){
        sound2.play();
    };
   
    
});
