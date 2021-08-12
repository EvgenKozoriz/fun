let cells = document.querySelectorAll('.cell')
let player = 'x'
let restartBtn = document.querySelector('.start-button')
let setPlayer = document.querySelector('#player-move')
let data = []
let stepCounter = 0
let pause = false
let winX = document.querySelector('#win-x')
let winY = document.querySelector('#win-y')
let draw = document.querySelector('#draw')

let winIndex = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let stat = {
    winX: 0,
    winY: 0,
    draw: 0,
}
setPlayer.innerHTML = player

restartBtn.addEventListener('click', () => {
    for (let cell of cells) {
        cell.innerHTML = ''
    }
    data = []
    stepCounter = 0
    pause = false
})

for (let cell of cells) {
    cell.addEventListener('click', () => {
        if (!cell.innerHTML && !pause) {
            cell.innerHTML = player
            id = cell.getAttribute('data-id')
            data[id] = player
            stepCounter++
            console.log(data)
            if (checkWin()) {
                if (player === 'x') {
                    stat.winX = ++stat.winX
                } else {
                    stat.winY = ++stat.winY
                }
                pause = true
                updateStat()
                return alert('победил ' + player)
            }
            if (stepCounter >= 9) {
                alert('draw')
                stat.draw = ++stat.draw
                updateStat()
            }
            changePlayer()
        } else {
            alert('ячейка занята')
        }


    })
}


function changePlayer() {
    if (player === 'x') {
        player = 'y'
        setPlayer.innerHTML = player
    } else {
        player = 'x'
        setPlayer.innerHTML = player
    }
}

function checkWin() {
    for (let i = 0;i < winIndex.length;i++) {
        if (data[winIndex[i][0]] === 'x' && data[winIndex[i][1]] === 'x' && data[winIndex[i][2]] === 'x') {
            return true;
        }
        if (data[winIndex[i][0]] == 'y' && data[winIndex[i][1]] == 'y' && data[winIndex[i][2]] == 'y') {
            return true;
        }
    }
    return false
}

function updateStat() {
    winX.innerHTML = stat.winX
    winY.innerHTML = stat.winY
    draw.innerHTML = stat.draw
}