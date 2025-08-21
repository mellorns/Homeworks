
const colors = ['red', 'yellow', 'green']

let index = 0




function nextColor() {
    let liList = document.querySelectorAll('.traffic-ligth li')

    liList.forEach((el, ind) => {
        if (ind === index) {
            el.style.backgroundColor = colors[ind]
        } else {
            el.style.backgroundColor = 'azure'
        }
    })
    if (index === 2) {
        index = 0
    } else {
        index++
    }
}