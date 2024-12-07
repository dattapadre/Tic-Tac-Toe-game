let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let text = true;

boxes.forEach((box) => {
    box.addEventListener("click", function() {
        if (text) {
            box.innerHTML = "O";
            box.style.color = "red";
            text = false;
        } else {
            box.innerHTML = "X";
            box.style.color = "green";
            text = true;
        }
        checkWinner();
    });
});

let checkWinner = () => {
    for (let pattern of patterns) {
        let pos1 = boxes[pattern[0]];
        let pos2 = boxes[pattern[1]];
        let pos3 = boxes[pattern[2]];

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("विजेता: ");
            return; // विजेता सापडल्यानंतर बाहेर पडा
        }
    }
};
