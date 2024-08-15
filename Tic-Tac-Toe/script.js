
let boxes = document.querySelectorAll('.box');
let reserbtn = document.querySelector('.reset-btn');
let newbtn = document.querySelector('.new-btn');
let messagecontainer = document.querySelector('.message-container');
let msg = document.querySelector('#msg');

let turnO = true;
let count = 0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.style.color = 'black';
        }
        else {
            box.innerText = "X";
            turnO = true;
            box.style.color = "rgb(230, 57, 70)"
        }
        box.disabled = true;
        count++;

        let iswinner = checkwinner();

        if (count === 9 && !iswinner) {
            gamedraw();
        }
    })
})

checkwinner = () => {
    for (let patterns of winpatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
                return true;
            }
        }
    }
}

const showwinner = (winner) => {
    msg.innerText = `congratulations , winner is ${winner}`;
    messagecontainer.classList.remove('hide');
    disableboxes();
}

const gamedraw = () => {
    msg.innerText = `game was a draw.`;
    messagecontainer.classList.remove("hide");
    disableboxes();
}

const resetgame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    messagecontainer.classList.add('hide');
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

newbtn.addEventListener("click", resetgame);
reserbtn.addEventListener("click", resetgame);
