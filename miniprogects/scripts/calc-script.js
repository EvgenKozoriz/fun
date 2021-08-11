let buttC = document.querySelector(".butt-delete")
let buttons = document.querySelectorAll(".buttons")
let display = document.querySelector('#display')
let operators = document.querySelectorAll('.operators')
let result = '';
let lastSymbol = '';

for (let button of buttons) {
    button.addEventListener('click', () => {
        let value = button.innerHTML
        if (value === "=") {
            display.value = eval(result)
            result = display.value;
        } else {
            display.value += value
            result += value
            lastSymbol = value
            
            console.log('last symbol:' + lastSymbol)
            console.log('result:' + result)
    
 
            if (isNaN(lastSymbol) === false) {
                for (let operator of operators) {
                    operator.disabled = false
                }
            } 
        }
    })
    }
    
for (let operator of operators) {
    operator.addEventListener('click', () => {
        let valueOp = operator.value
        lastSymbol = valueOp
        display.value += valueOp
        result += valueOp

        console.log('last symbol:' + lastSymbol)
        console.log('result:' + result)

        if (lastSymbol === '/' || '*' || '-' ||'+' || '.') {
            for (let operator of operators) {
                operator.disabled = true
            }
        }
    })
}



buttC.addEventListener('click', () => {
    display.value = ''
    result = '';
    for (let operator of operators) {
        operator.disabled = true
    }
})