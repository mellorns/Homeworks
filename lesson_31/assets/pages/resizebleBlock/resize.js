



document.getElementById('drag_point').addEventListener('mousedown', function (e) {


    let pBlock = e.target.parentElement



    function resizeBlock(e) {

        let x = e.pageX
        let y = e.pageY

        pBlock.style.width = x + 'px'
        pBlock.style.height = y + 'px'
    }

    function stopResize() {
        document.removeEventListener('mouseup', resizeBlock)
        document.removeEventListener('mousemove', resizeBlock)

    }



    document.addEventListener('mousemove', resizeBlock)
    document.addEventListener('mouseup', stopResize)

})


