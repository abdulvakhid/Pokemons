// dom elementlari
const elForm = document.querySelector(".pokemon-form");
const elInput = elForm.querySelector(".search-input");
const elSelectWeakness = elForm.querySelector("#weakness");
const elSelectType = elForm.querySelector("#type");
const elSelectSorting = elForm.querySelector(".sorting");
const elList = document.querySelector(".list");
const weaknessLists = [];
const typeList = [];

// template 
let elTemplate = document.querySelector(".template").content;

// weaknessni yig'ib oluvchi funksiya
function collectWeakness() {
    pokemons.forEach(item => {
        const findWeakness = item.weaknesses;

        findWeakness.forEach(element => {
            if (!weaknessLists.includes(element)) {
                weaknessLists.push(element);
            }
        });
    });
    weaknessLists.sort();
};

// selectga render qiluvchi funksiya
function showWeakness() {
    const newFragment = document.createDocumentFragment();
    weaknessLists.forEach(item => {
        const newOption = document.createElement("option");

        newOption.textContent = item;
        newOption.value = item;
        newFragment.appendChild(newOption);
    });
    elSelectWeakness.appendChild(newFragment);
}

// TYPE larni yig'uvchi funksiya
// function collectType() {
//     pokemons.forEach(item => {

//         const findType = item.type;
//         findType.forEach(element => {
//             if (!typeList.includes(element)) {
//                 typeList.push(element);
//             }
//         });
//     });
//     typeList.sort();
// };

// typelarni render qiluvci funksiya
// function showType() {
//     const typeFragment = document.createDocumentFragment();

//     typeList.forEach(item => {
//         const newOption = document.createElement("option");

//         newOption.textContent = item;
//         newOption.value = item;
//         typeFragment.appendChild(newOption);
//     });
//     elSelectType.appendChild(typeFragment);
// };

// pokemonni render qiluvchi funksiya
function showPokemons(pokemons, titleRegex = "") {
    elList.innerHTML = "";
    const fragment = new DocumentFragment();

    for (const pokemon of pokemons) {

        let cloneTemplate = elTemplate.cloneNode(true);

        cloneTemplate.querySelector(".idnum").textContent = pokemon.num;
        cloneTemplate.querySelector(".number").textContent = pokemon.number;

        if (titleRegex.source !== "(?:)" && titleRegex) {
            cloneTemplate.querySelector(".name").innerHTML = pokemon.name.replace(titleRegex,
                `<mark class="bg-warning"> ${titleRegex.source}</mark>`);
        } else {
            cloneTemplate.querySelector(".name").textContent = pokemon.name;
        }
        cloneTemplate.querySelector(".img").src = pokemon.img;
        cloneTemplate.querySelector(".candy-name").textContent = pokemon.weaknesses;
        cloneTemplate.querySelector(".type").textContent = pokemon.type;
        cloneTemplate.querySelector(".weight").textContent = pokemon.weight;
        cloneTemplate.querySelector(".time").textContent = pokemon.candy_count;

        fragment.appendChild(cloneTemplate);
    }
    elList.appendChild(fragment);
};

// search qiluvchi funksiya
function searchPokemon(item) {
    return pokemons.filter(element => {
        return element.name.match(item) && (elSelectWeakness.value === "all" || element.weaknesses.includes(elSelectWeakness.value))
        //  &&    (elSelectType.value === "all" || element.type.includes(elSelectType.value))
    });
};

// sorting function
function sorting(sorted, type) {
    if (type === "a_z") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "z_a") {
        sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (type === "low_high") {
        sorted.sort((a, b) => a.candy_count - b.candy_count);
    } else if (type === "high_low") {
        sorted.sort((a, b) => b.candy_count - a.candy_count);
    } else if (type === "light_heavy") {
        sorted.sort((a, b) => a.weight.split(" ")[0] - b.weight.split(" ")[0]);
    } else if (type === "heavy_light") {
        sorted.sort((a, b) => b.weight.split(" ")[0] - a.weight.split(" ")[0]);
    }
};

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const searchElement = new RegExp(elInput.value.trim(), `gi`);
    const searchlist = searchPokemon(searchElement);

    const sortFunction = pokemons.filter(item => item.candy_count);
    if (elSelectSorting.value == "low_high" || elSelectSorting.value == "high_low") {
        sorting(sortFunction, elSelectSorting.value);
        showPokemons(sortFunction, searchElement)
    } else {
        if (searchlist.length > 0) {
            sorting(searchlist, elSelectSorting.value);
            showPokemons(searchlist, searchElement)
        } else {
            alert("NOT FOUND");
        }
    }

});

collectWeakness();
showWeakness();
// collectType();
// showType();
showPokemons(pokemons);