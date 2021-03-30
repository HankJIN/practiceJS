const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout( getDate, 2500)

function getDate(){
    header.innerHTML = '<img src="/50projects-in-50days/images/baemin.jpg" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit ';
    excerpt.innerHTML= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, architecto!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt=""/>';
    name.innerHTML = 'Jone Doe'
    date.innerHTML = 'Oct 08, 2020'


    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}