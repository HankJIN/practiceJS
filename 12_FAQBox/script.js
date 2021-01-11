// const chevronDowns = document.querySelectorAll('.fa-chevron-down')
// const times = document.querySelectorAll('.fa-times')

// console.log(times)

// chevronDowns.forEach(btn =>{
//   const faq = btn.parentElement.parentElement;
//     btn.addEventListener('click', e =>{
//       faq.classList.add('active')
//     }
//   )
// })

// times.forEach(btn =>{
//   const faq = btn.parentElement.parentElement;
//   btn.addEventListener('click', e =>{
//     faq.classList.remove('active')
//   }
// )
// })

///// 위에는 내가 연습한 코드 실제 강의 코드

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
  toggle.addEventListener('click', () =>{
    toggle.parentNode.classList.toggle('active')
  })
})

