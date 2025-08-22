document.addEventListener('keydown', (e) => {

    if (document.querySelector('.card-text')) {
        if (e.key === 'e' && e.ctrlKey) {


            let div = document.querySelector('.card-text')

            let textArea = document.createElement('textarea')
            textArea.id = 'textarea'

            textArea.value = div.innerText


            div.replaceWith(textArea)

        }
    }




})



document.addEventListener('keydown', (e) => {

    if (document.getElementById('textarea')) {
        if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()


            let textArea = document.getElementById('textarea')


            let div = document.createElement('div')
            div.classList.add('card-text')


            div.innerText = textArea.value


            textArea.replaceWith(div)
        }
    }



})