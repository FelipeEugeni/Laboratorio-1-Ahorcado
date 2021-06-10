var word = [];
var lifes = 10;
var timeGame;
var completeWord = '';

var game = {
  aciertos : 0,
  fallas : 0,
  seconds : 0 
};


function initGame()
{
  //obtener la palabra
  var newword = document.getElementById("word").value;
  completeWord = newword;

  var processedword = Array.from(newword);
  for(var i=0;i<processedword.length;i++)
    {
    var newItem = {};
    newItem.letter = processedword[i];
    newItem.guess = false;

    word.push(newItem);
   }

   timeGame = setInterval(function (){
   game.seconds = game.seconds+1;
   },1000)
   document.getElementById("word-container").innerHTML = createWord();
   var newword = document.getElementById("word").value=""

}



function process()
{
  
    var letter = document.getElementById('letter').value;
    searchletter(letter);
    
    //building new word for show
    document.getElementById("word-container").innerHTML = createWord();

    console.log("esta es la letra que ingreso el usuario",letter);
    
     if(isFinishGame()){
       clearInterval(timeGame);
        alert("Informacion del Juego Aciertos: "+game.aciertos+" Fallas: "+game.fallas+" Seconds: "+game.seconds);
     }
     var letter = document.getElementById('letter').value = "";
}

function isFinishGame()
{
  var builded_word = "";
  for(var i=0;i<word.length;i++)
    {
       if(word[i].guess){
         builded_word += word[i].letter;
       }
    }

    return (builded_word === completeWord);
}

function searchletter(letter)
{
    var exist = false;
    //looking for coincidences
    for(var i=0;i<word.length;i++)
    {
       if(letter === word[i].letter){
         exist = true;
         word[i].guess = true; 
       }
    }
    if(exist){
      game.aciertos = game.aciertos+1;
    }else{
      game.fallas = game.fallas+1;
    }

    lifes = (exist) ? lifes : lifes-1;

}

function createWord()
{
    var newWord = '<H1>';

    //looking for exist index in word
    for(var i=0;i<word.length;i++)
    {
       if(word[i].guess){
         newWord += word[i].letter;
       }else{
           newWord += "-";
       }
    }
    newWord += '</H1>';

    return newWord;
}