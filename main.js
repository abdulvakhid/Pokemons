// var elForm = document.querySelector(".from");
// var elInput = elForm.querySelector(".form-control");
// var elSpan = document.querySelector(".length");

// var letters = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "o'", "O'"];


// elForm.addEventListener("submit", function(evt){

//     evt.preventDefault();
//     var inputValue = elInput.inputValue;

//     for (var letter of letters) {
//         if (letter === inputValue) {
//             console.log(letter.length);
//         } else {

//         }
//     }

// })


// 2 masala 
// console.log("2-masala");
// var arrs = [5, 16,  7,  4, 10,  3,  4,  4, 14,  5, 14,  4,  44,  4];





// // 3 masala 
// console.log("3-masala");
// var numbers = [5,6,3,7,1,4,9];
// console.log(numbers);

// for (var number of numbers) {
//     if (number % 2 === 0) {
//         number ++;
//     } else {
//         number -- ;       
//     }
//     console.log(number);
// }


// // 4 masala 

// console.log("4-masala");
// var arrNums = [3,5,7,9];
// var result = arrNums[0] + arrNums[arrNums.length - 1];
// console.log(result);















var elBox = document.querySelector(".box");
var newList = document.createElement("ul");



for (var pokemon of pokemons) {
    var newItem = document.createElement("li");
    var newNum = document.createElement("span");
    var newName = document.createElement("strong");
    var newImg = document.createElement("img");
    var newCandyName = document.createElement("strong");
    var newTime = document.createElement("time");
    
    newNum.textContent = pokemon.num;
    newName.textContent = pokemon.name;
    newImg.src = pokemon.img;
    newImg.width = "150";
    newImg.height = "150";
    newImg.alt = "Pokemon img";
    newCandyName.textContent = pokemon.candy;
    newTime.textContent = pokemon.spawn_time;
    
    newList.classList.add("list-unstyled", "row", "justify-content-center",);
    newItem.classList.add("d-flex", "flex-column", "align-items-center" ,"col-md-3","m-1", "bg-success", "position-relative", "rounded-4",);
    newNum.classList.add("badge", "bg-danger", "position-absolute", );
    newName.classList.add("mt-4", "text-white");
    newCandyName.classList.add("mb-5", "text-white");
    newTime.classList.add("position-absolute", "bottom-0", "badge", "bg-primary", );
    
    newItem.appendChild(newNum);
    newItem.appendChild(newName);
    newItem.appendChild(newImg);
    newItem.appendChild(newCandyName);
    newItem.appendChild(newTime);
    newList.appendChild(newItem);
    elBox.appendChild(newList);
    
}
