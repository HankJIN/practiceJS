const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;
        

        if( c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }else {
            counter.innerText = target;
        }
    }

    updateCounter();
})




// mine
// const counters = document.querySelectorAll('.counter');

// counters.forEach( (counter)=>{
//     const targetData = counter.getAttribute('data-target')
//     let times = 10;
//     let tempData = 0;
//     console.log(targetData);

//     const repeat = setInterval(()=>{    
//         counter.innerHTML = tempData;
//         tempData = tempData + targetData/10;
//         times = times -1;
//         if(times<0){
//             clearInterval(repeat);
//         }
//     },10)


// })