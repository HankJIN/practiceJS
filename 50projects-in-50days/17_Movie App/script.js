const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=45e3db80d0e17fb64fc24f53f28bc158&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=45e3db80d0e17fb64fc24f53f28bc158&query="';


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

//Get inintial movies
getMovie(API_URL);

async function getMovie(url){
    const res = await fetch(url);
    const data = await res.json();

    showMovie(data.results);
}

function showMovie(movies){
    main.innerHTML = '';

    movies.forEach((movie) =>{
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <div class="movie">
                <img src="${IMG_PATH + poster_path}" alt="">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}"> ${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>overview</h3>
                    ${overview}
                </div>
            </div>
        `
        
        main.appendChild(movieEl);
    })
    
}


function getClassByRate(vote){
    if(vote >= 8){
        return 'green';
    }else if(vote >= 5){
        return 'orange';
    }else{
        return 'red'
    }
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchTerm = search.value; 
    console.log(searchTerm)
    if(searchTerm && searchTerm !==''){
        getMovie(SEARCH_API + searchTerm);
        
        search.value = '';
    }else{
        window.location.reload();
    }

})