
import {choseEmoji ,$ ,$$ ,$$$} from "../muduls/func_const";
import log from "@ajar/marker";



let cardNum = 12;
let wrapper = $('.wrapper');
let temp = choseEmoji(cardNum/2);
let prev_card = -1;
let flag = false;

function cardCreator()
{ 
  wrapper.innerHTML = "";
  log.red("in card creator");
    for(var i = 0 ; i < cardNum ; i++)
    {
      log.cyan("in card creator loop");
        var card =$$("div");
        card.className = "card";
        card.innerHTML = `
        <div class="card__face card__face--front">${temp[i]}</div>
        <div class="card__face card__face--back"></div>`;
        card.id = i;
        card.style.margin = '3px';
        wrapper.appendChild(card);
        console.log("wrapper in card creator "+ wrapper.innerHTML);

    }
}


function gameWon(){
  wrapper.removeEventListener("click", gameWon);
  var div = $$("div");
  div.className = "game-won";
  div.innerHTML = "<p>YOU WON!!!!</p> <button class = 'again'> Press to play again </button> <button class = 'not-again'> Press to Quit </button>";
  wrapper.innerHTML = "";
  wrapper.appendChild(div);
  let button = $$$("button");
  console.log(button);
  for(let b of button){

    b.addEventListener("click" , () =>{
      console.log(b);
      if(b.className == "again"){
        console.log("button class again");
        wrapper.innerHTML = "";
        console.log("wrapper "+wrapper);
        cardNum = 12;
        console.log(cardNum);
        temp = choseEmoji(cardNum/2);
        console.log("temp:  " + temp  );
        init();
      }else{
        window.location.replace("http://www.google.com");
      }
      });
    
  }

}






function cardClicked(event)
{
  if(!event.currentTarget.classList.contains("is-true")){
    log.red("in first if");
      
      if(prev_card == -1 && flag == false){
        prev_card = event.currentTarget;
        event.currentTarget.classList.toggle("is-flipped");
        log.yellow("temo is empty " +prev_card);
      }else if(prev_card.textContent == event.currentTarget.textContent && flag == false && prev_card.id !== event.currentTarget.id){
        event.currentTarget.classList.add("is-true");
        prev_card.classList.add("is-true");
        event.currentTarget.classList.toggle("is-flipped");
        log.cyan("temo is not empty " +prev_card);
        prev_card = -1;
        cardNum = cardNum - 2;
      }else if(prev_card.textContent != event.currentTarget.textContent && flag == false && prev_card.id !== event.currentTarget.id){
        event.currentTarget.classList.toggle("is-flipped");
        log.cyan("final else " + prev_card);
        var current_card = event.currentTarget;
        flag = true;
        setTimeout(() => {
          prev_card.classList.toggle("is-flipped");
          current_card.classList.toggle("is-flipped");
          prev_card=-1;
          flag = false;
        },1000);
      }else if(flag == true){
        setTimeout(() => {
          flag = false;
        },1000);
      } 
      if(cardNum <= 0){
        let cards = $$$(".card");
        for(let card of cards){
          card.classList.add("is-won");
        }
        setTimeout(() => (wrapper.addEventListener("click", gameWon)) , 2000);
      }   
  }
 }
  

function flipCards(cards){
  let i = 1000;
  for(let card of cards){
    i+=200;
    setTimeout(() => {
      card.classList.toggle("is-flipped");}, i);
    }
  }



  function init(){
    cardCreator();
    let cards = $$$(".card");
    flipCards(cards);
    for (let card of cards) {
      card.addEventListener("click", cardClicked);
      // console.log(cardNum);
      }

      
  }
 init();

