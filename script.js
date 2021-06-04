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
    if ((event.key).match(/[0-9%\/*\-+=]|Backspace|Enter/)) calc(event.key)
})


function calc(value) {

    if (value.match(/=|Enter/)) {

        if (output.textContent[output.textContent.length - 1] == 0 && output.textContent[output.textContent.length - 2] == "/") {
            alert("на 0 делить не зя")
        }else{
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

        let oldValue = output.textContent
        if (output.textContent.length >= 1) {
            if (output.textContent[output.textContent.length - 1].match(/[%\/*\-+=]|Backspace|Enter/) && value.match(/[%\/*\-+=]|Backspace|Enter/)) {
                output.textContent = oldValue
            } else {
                output.textContent += value
            }
        } else {
            output.textContent += value
        }


    }
}
