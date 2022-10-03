
// var elBox = document.querySelector(".box");
// var newList = document.createElement("ul");



// for (var pokemon of pokemons) {
//     var newItem = document.createElement("li");
//     var newNum = document.createElement("span");
//     var newName = document.createElement("strong");
//     var newImg = document.createElement("img");
//     var newCandyName = document.createElement("strong");
//     var newTime = document.createElement("time");
    
//     newNum.textContent = pokemon.num;
//     newName.textContent = pokemon.name;
//     newImg.src = pokemon.img;
//     newImg.width = "150";
//     newImg.height = "150";
//     newImg.alt = "Pokemon img";
//     newCandyName.textContent = pokemon.candy;
//     newTime.textContent = pokemon.spawn_time;
    
//     newList.classList.add("list-unstyled", "row", "justify-content-center",);
//     newItem.classList.add("d-flex", "flex-column", "align-items-center" ,"col-md-3","m-1", "bg-success", "position-relative", "rounded-4",);
//     newNum.classList.add("badge", "bg-danger", "position-absolute", );
//     newName.classList.add("mt-4", "text-white");
//     newCandyName.classList.add("mb-5", "text-white");
//     newTime.classList.add("position-absolute", "bottom-0", "badge", "bg-primary", );
    
//     newItem.appendChild(newNum);
//     newItem.appendChild(newName);
//     newItem.appendChild(newImg);
//     newItem.appendChild(newCandyName);
//     newItem.appendChild(newTime);
//     newList.appendChild(newItem);
//     elBox.appendChild(newList);
    
// }




// with fragment 

let elList = document.querySelector(".list");
let fragment = new DocumentFragment();

let elTemplate = document.querySelector(".template").content;

for (const pokemon of pokemons) {
    
    let cloneTemplate = elTemplate.cloneNode(true);

    cloneTemplate.querySelector(".item");
    cloneTemplate.querySelector(".number").textContent = pokemon.number;
    cloneTemplate.querySelector(".name").textContent = pokemon.name;
    cloneTemplate.querySelector(".img").src = pokemon.img;
    cloneTemplate.querySelector(".candy-name").textContent = pokemon.candy;
    cloneTemplate.querySelector("time").textContent = pokemon.spawn_time;

    fragment.appendChild(cloneTemplate);

}

elList.appendChild(fragment);
