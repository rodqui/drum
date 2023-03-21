

var lenght=document.querySelectorAll("button").length;

var i= 0;
while(i<lenght){
    document.querySelectorAll("button")[i].addEventListener("click", 
    function (){ //anonymous function
        
       var letter = this.innerHTML;
       soundSelected(letter);
       
       
    });
    i++;
}



document.addEventListener("keydown", function(event){
    console.log(event.key);

    soundSelected(event.key);

});




function soundSelected(key){
    switch(key){
        case "w":
            var sound1 = new Audio("sounds/snare.mp3");
            sound1.play();
            animationKey(key);
        case "a":
            var sound2 = new Audio("sounds/tom-1.mp3");
            sound2.play();
            animationKey(key);
        break;
        case "s":
            var sound3 = new Audio("sounds/tom-2.mp3");
            sound3.play();
            animationKey(key);
        break;
        case "d":
            var sound4 = new Audio("sounds/tom-3.mp3");
            sound4.play();
            animationKey(key);
        break;
        case "j":
            var sound5 = new Audio("sounds/crash.mp3");
            sound5.play();
            animationKey(key);
        break;
        case "k":
            var sound6 = new Audio("sounds/kick-bass.mp3");
            sound6.play();
            animationKey(key);
        break;
        case "l":
            var sound7 = new Audio("sounds/tom-4.mp3");
            sound7.play();
            animationKey(key);
        break;

        default:
            console.log("press a correct button");
   }
   
}


function animationKey(key){
    var activeButton = document.querySelector("."+key); 

    activeButton.classList.add("pressed");
    setTimeout(function (){activeButton.classList.remove("pressed");},100);

}