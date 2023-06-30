const diceEl = document.querySelector("#dice");
const buttonEl = document.querySelector(".roll-btn");
const diceRolls = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;",
];
const rollHistoryEl = document.querySelector("#roll-history");
let historyList = [];

function getDiceFace() {
    let result = Math.floor(Math.random() * 6); // give a number between 0-5
    // console.log(diceRolls[result]);
    historyList.push(diceRolls[result]); 
    // console.log(historyList)
    return diceRolls[result];
}

function updateHistoryList() {
    rollHistoryEl.innerHTML = "";

    for (i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${historyList[i]}</span> `;
        rollHistoryEl.appendChild(listItem);
    }
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        diceEl.innerHTML = `<div class="dice" id="dice">${getDiceFace()}</div>`;
        updateHistoryList();
        // console.log(updateHistoryList);
    }, 1000);
});
