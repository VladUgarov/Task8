const output = document.querySelector('output')

const div = document.createElement('div')
div.classList.add('keyboard')
document.querySelector('.calculator').appendChild(div)


'7 8 9 / 4 5 6 - 1 2 3 + . 0 = * C CE'.split(' ').map(symbol => {
    div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
})


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        calc(this.value)
    })
})

document.addEventListener('keydown', event => {
    if ((event.key).match(/[0-9\/*\-+=]|Backspace|Enter/)) calc(event.key)
})


function calc(value) {

    if (value.match(/=|Enter/)) {

        if (output.textContent[output.textContent.length - 1] == 0 && output.textContent[output.textContent.length - 2] == "/") {
            output.textContent = "Деление на ноль невозможно"
        } else {
            let result = Number(eval(output.textContent).toFixed(8))
            if (result % 1 === 0) {
                output.textContent = Math.trunc(math.evaluate(output.textContent))
            } else {
                output.textContent = result
            }
        }


    } else if (value === 'C') {

        output.textContent = ''

    } else if (value.match(/CE|Backspace/)) {

        output.textContent = output.textContent.substring(0, output.textContent.length - 1)


    } else {

        if (output.textContent === undefined) {
            output.textContent = ""
        }
        let oldValue = output.textContent
        let pointCount = 0
        let mathSign = 0

        for (let i = 0; i < output.textContent.length; i++) {
            if (output.textContent[i] === ".") {
                pointCount++
            }
            if (output.textContent[i].match(/[%\/*\-+]/)) {
                mathSign++
            }
        }

        if (output.textContent === "" && value.match(/[%\/*\-+=.]|Backspace|Enter/)) {
            output.textContent = oldValue
        } else if (output.textContent.length >= 1 && output.textContent[output.textContent.length - 1].match(/[%\/*\-+=.]|Backspace|Enter/)
            && value.match(/[%\/!*\-+=.]|Backspace|Enter/)) {
            output.textContent = oldValue
        } else if (value !== "F1" && value !== "F2" && value !== "F3" && value !== "F4" && value !== "F5" && value !== "F6"
            && value !== "F7" && value !== "F8" && value !== "F9" && value !== "F10" && value !== "F11" && value !== "F12") {
            if(pointCount>=1 && value.match(/[.]/) && mathSign < pointCount){
                output.textContent = oldValue
            }else{
                output.textContent += value
            }

        }
    }
}
