let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelectorAll(".reset-btn");
let winMessage = document.querySelector("#winner");
let winBox = document.querySelector(".msg-container");

let turnO = true;
let count = 0;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log("clicked");
        if (turnO) {//player O
            box.innerText = "O";
            turnO = false;
        }
        else {//Player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        showWinner(count);
    });
});

const showWinner = (count) => {
    if (count == 9) {
        winBox.classList.remove("hide");
        winMessage.innerText = "Match Draw";

    }
    winningCombos.forEach((combo) => {
        // console.log(combo[0], combo[1], combo[2]);
        // let pois1 = combo[0];
        // let pois2 = combo[1];
        // let pois3 = combo[2];
        // console.log(boxes[combo[0]].innerText, boxes[combo[1]].innerText, boxes[combo[2]].innerText);
        let pois1 = boxes[combo[0]].innerText;
        let pois2 = boxes[combo[1]].innerText;
        let pois3 = boxes[combo[2]].innerText;

        if (pois1 != "" && pois2 != "" && pois3 != "") {
            if (pois1 == pois2 && pois2 == pois3) {
                winBox.classList.remove("hide");
                count = 0;
                winMessage.innerText = `${pois1} is the winner`;
                boxes.forEach((box) => {
                    box.disabled = true;
                });

            }
        }

    })
}

resetBtn[0].addEventListener('click', () => {
    winBox.classList.add("hide");
    count = 0;

    boxes.forEach((box) => {

        turnO = true;
        box.innerText = "";
        box.disabled = false;
    });
});
resetBtn[1].addEventListener('click', () => {
    winBox.classList.add("hide");
    turnO = true;
    count = 0;

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
});