var buttonColour=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var randomChosenColour;
var userChosenColour;

var levelno=1;
function gamesequence(){   //2
document.querySelector("h1").innerHTML="Level "+levelno;
var randomNumber=Math.floor(Math.random() * 4);
randomChosenColour=buttonColour[randomNumber];
gamePattern.push(randomChosenColour);
console.log(gamePattern);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100);
var song=new Audio('sounds/'+randomChosenColour+'.mp3');
song.play();
}

document.addEventListener("keydown",function(event){   //1
    if(event.key==="A" || event.key==="a"){
        gamesequence();
    }
});

$(".btn").click(function(){
    handler($(this).attr('id'));}
); 
function handler(userChosenColour){
 $("#"+userChosenColour).fadeOut(100).fadeIn(100);
 //var userChosenColour=$(this).attr('id').fadeOut(100).fadeIn(100);    Not Valid as per the DOM
 var usersong=new Audio('sounds/'+userChosenColour+'.mp3');  
 usersong.play();
 userClickedPattern.push(userChosenColour);
    if(gamePattern[userClickedPattern.length-1]===userClickedPattern[userClickedPattern.length-1]){
       if(gamePattern.length===userClickedPattern.length){
            continuegame();
        }
    }
    else{
        restartgame();
    }
}
function continuegame(){
        levelno=levelno+1;
        usersequencenum=0;
        setTimeout(function() {
            userClickedPattern=[];
            gamesequence();
        }, 1000);
    }

    function restartgame(){
        levelno=1;
        var wrong=new Audio("sounds/wrong.mp3");
        wrong.play();
        gamesequencenum=0;
        usersequencenum=0;
        gamePattern=[];
        userClickedPattern=[];
        document.querySelector("h1").innerHTML="Press A Key to Start";
    }
// }
// function checkPattern(){
//     while(usersequencenum<gamesequencenum){
//      if(gamePattern[i]===userClickedPattern[i]){
//         i++;
//      }}
//         else if(usersequencenum===gamesequencenum){
//             usersequencenum=0;
//             setTimeout(function() {
//                 userClickedPattern=[];
//                 gamesequence();
//             }, 1000);
//         }

        
//     else{
//         var wrong=new Audio("sounds/wrong.mp3");
//         wrong.play();
//         gamesequencenum=0;
//         usersequencenum=0;
//         gamePattern=[];
//         userClickedPattern=[];
//         document.querySelector("h1").innerHTML="Press A Key to Start";
//     }

// }
// console.log(userClickedPattern);
// }
// var n=document.querySelectorAll(".btn").length;
// for(var  i=0;i<n;i++){
// document.querySelectorAll(".btn")[i].addEventListener("click",function(){
//     var bt=this;
//     bt.fadeOut();
//         bt.classList.add("pressed");
//     setTimeout(rmvclr,200,bt);
// });
// }
// function rmvclr(button){
//     button.classList.remove("pressed");
// }
