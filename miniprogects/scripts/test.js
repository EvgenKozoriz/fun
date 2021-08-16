const newTestBtn = document.querySelector('.new-test');
const TestArea = document.querySelector('.test-area');
const checkBtn = document.querySelector('.check-btn');
const clearBtn = document.querySelector('.clear-btn')
let dataQuest = [];

newTestBtn.addEventListener('click', () => {
    let numOfQuest = setNum('questions')
    createQuestions(numOfQuest)
})

checkBtn.addEventListener('click', () => {
    let sumOfRight = 0
    for (let i = 0; i < dataQuest.length;i++) {
       let answers = document.getElementsByName(i)
       for (let answer of answers) {
           if (answer.checked == true && +answer.value + 1 == +dataQuest[i].right) {
                sumOfRight++
                answer.parentNode.classList.add('right')
           } else if (answer.checked == true) {
            answer.parentNode.classList.add('wrong')
           }
       }
    console.log(dataQuest[i].right)
    }
    alert(`You have ${sumOfRight} right answers`)
})

clearBtn.addEventListener('click', () => {
    TestArea.innerHTML = ''
})

function setNum(text) {
    let number = 0
    do {
        number = prompt('set number of ' + text, 1)
    } while (!Number(number) && number !== null)
    return number
}

function createQuestions(numOfQuest) {
    let nameId = 0
    for (let i = 0;i < numOfQuest;i++) {
        let rightAnswer = 0
        let ul = document.createElement('ul')
        ul.innerHTML = prompt('Text of question','How many fingers have human?')
        let objData = {}
         if (objData['textQ'] === undefined) {
             objData.textQ = ul.innerHTML
         }
        let numOfAnswer = setNum('answer')
        for (let i = 0; i < numOfAnswer;i++) {
            let li = document.createElement('li')
            let radioInput = document.createElement('input')
            radioInput.setAttribute('type', 'radio')
            radioInput.setAttribute('value', i)
            radioInput.setAttribute('name', nameId)
            li.innerHTML = prompt('Answer text','')
            li.appendChild(radioInput)
            ul.appendChild(li) 
        }
        nameId++
        TestArea.appendChild(ul)
        rightAnswer = prompt('What number is right?', '0')
        if (objData['right'] === undefined) {
            objData.right = rightAnswer
        }
        dataQuest.push(objData)
    }
    console.log(dataQuest)
}
