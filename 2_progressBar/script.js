const progress = document.getElementById('progress');
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


let currentActive = 1

next.addEventListener('click', ()=>{
    if(currentActive < circles.length){
        currentActive++
    }
    update()
    console.log(currentActive)
})

prev.addEventListener('click', ()=>{
    if(currentActive>1){
        currentActive--
    }

    update()
})


function update() {
    circles.forEach((circles, idx)=>{
        if(idx < currentActive){
            circles.classList.add('active')
        } else{
            circles.classList.remove('active')
        }

    })

    progress.style.width = ((currentActive-1)/(circles.length-1)) * 100 +'%'

    if(currentActive == 4){
        next.disabled = true;
    }
    else if(currentActive == 1){
        prev.disabled = true;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }
}