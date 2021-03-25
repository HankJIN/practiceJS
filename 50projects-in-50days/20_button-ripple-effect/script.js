const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button=>{
    button.addEventListener('click', function (e){
        let x = e.clientX
        let y = e.clientY
    
        let buttonTop = e.target.offsetTop
        let buttonLeft = e.target.offsetLeft

        console.log(x,y, buttonTop, buttonLeft)

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        console.log(xInside, yInside)

        let circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)
        //중요. this를 쓰려면 함수형태여야함. 화살표함수의 경우 this를 다르게 인식.

        setTimeout(() => circle.remove(), 500)
    })
})