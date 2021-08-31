// text = document.querySelector('.text')
// speedText = document.querySelector('.speed')
// up = document.querySelector('.fa-caret-up')
// down = document.querySelector('.fa-caret-down')

// speed = 0
// outText = "We love Programming"
// text.innerText = outText
// lastIndex = 0

// function text_effect() {
//     text.innerText = outText.slice(0,++lastIndex)
//     if(lastIndex > outText.length){
//         lastIndex = 0
//     }
//     counter = 1000- speed*100
//     setTimeout(text_effect,counter)
// }

// down.addEventListener('click',(e)=>{
//     if(speed > 0){
//         speed--
//     }
//     speedText.innerHTML = speed
// })

// up.addEventListener('click',(e)=>{
//     if(speed < 9){
//         speed++
//     }
//     speedText.innerHTML = speed
// })

// setTimeout(text_effect,1000)
// Upper is my code before learn
// -----------------------------

const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300/ e.target.value)
