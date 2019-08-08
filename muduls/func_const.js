/**
 * @param s stands for 'selector'
 * @param p stands for 'parent' container. defaults to 'document'
 */
export const $ = (s, p = document) => p.querySelector(s);

export const $$ = function(c , p = document){
  return p.createElement(c);
}

export const $$$  = (s, p = document) => p.querySelectorAll(s);


const emoji = [
"🦁",
"🐶",
"🐱",
"🐺",
"🦓",
"🐰",
"🐻",
"🐸",
"🐳",
"🐢",
"🐔",
"🤩",
"🥦",
"🍬",
"🚀",
"🍒",
"🍕",
"🍫",
"🎉",
"🎈",
"🍇",
"🍔",
"🌶",
"🍤",
"🍱",
"🥧",
"🍦",
"🍭",
"🍼",
"🍺",
"🎱",
"⚽",
"🏆"];

const randomizer = (min , max) => min + Math.round(Math.random()* max - min);

function arrayMix(arr){
    for(let item in arr){
        let temp = arr[item];
        let index = randomizer(0 , arr.length -1);
        arr[item] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

export function choseEmoji(num){
    var temp = [];
    var index = [];
    while(index.length < num){
        var random = randomizer(0,emoji.length -1);
        if(!index.includes(random)){
            temp.push(emoji[random]);
            index.push(random);
        }
    }
    temp = [...temp , ...temp];
    return arrayMix(temp);

}

