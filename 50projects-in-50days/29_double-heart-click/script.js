// const loveMe = document.getElementsByClassName("loveMe")[0];
// const times = document.getElementById("times");

// console.log(loveMe);
// console.log(times);
// time = 0

// loveMe.addEventListener('dblclick', e=>{
//     let x, y;

//     x = e.pageX;
//     y = e.pageY;

//     // console.log(x);
    
//     addHaert(x, y)
//     time += 1
//     times.innerHTML = `${time}`
// });


// function addHaert(x, y){
//     heart = document.createElement('div');
//     heart.className='fas fa-heart'
//     heart.style.left = x + "px"
//     heart.style.top = y + "px"
//     // console.log(heart)
//     loveMe.appendChild(heart)

//     setTimeout(()=>{
//         heart.remove()
//     },1000)    
// }


// just fllow up ->
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')


let clickTime = 0
let timesClicked = 0
loveMe.addEventListener('click', (e)=>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
        
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else{
            clickTime = new Date().getTime()
            timesClicked = 0
        
        }
    }
})

const createHeart = (e) =>{
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    //fix
    const leftOffset = loveMe.offsetLeft
    const topOffset = loveMe.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset
    console.log(x, y,leftOffset,topOffset, xInside, yInside)

    heart.style.left = `${xInside}px`
    heart.style.top = `${yInside}px`

    console.log(heart)
    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(()=>{
        heart.remove()
    }, 1000)
}