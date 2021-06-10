var randomWord=["Cuatro Fantasticos","X-Men","Agente Venom","SpiderWoman","Guardianes de las Galaxias","The Outlaws","Los Vengadores"];
var word=[];
var completeWord = '';
var lifes = 10;
var game = {
  aciertos : 0,
  fallas : 0,
};

initGame()

function initGame()
{
  var indiceRandom=Math.floor(Math.random() * randomWord.length)
  var newword = randomWord[indiceRandom].toUpperCase()
  console.log(newword)
  completeWord = newword;

  var processedword = Array.from(newword);
  for(var i=0;i<processedword.length;i++)
    {
    var newItem = {};
    newItem.letter = processedword[i].toUpperCase();
    newItem.guess = false;

    word.push(newItem);
   
    }


    document.getElementById("word-container").innerHTML = createWord();
   

}



function process()
{
  
    var letter = document.getElementById('letter').value.toUpperCase();
    searchletter(letter);
    
    
    document.getElementById("word-container").innerHTML = createWord();

    console.log("esta es la letra que ingreso el usuario",letter);
    
     if(isFinishGame()){
    
        alert("Informacion del Juego Aciertos: "+game.aciertos+" Fallas: "+game.fallas);
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
    var newWord = '<h1>';

    
    for(var i=0;i<word.length;i++)
    {
       if(word[i].guess){
         newWord += word[i].letter;
       }else{
           newWord += "-";
       }
    }
    newWord += '</h1>';

    return newWord;
}