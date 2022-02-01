const galleryUl = document.getElementById("movie-gallery");

// Different method:
// const addMoviesToDom = movies => {
//     movies.map(movie => {
//         galleryUl.innerHTML = "";
//     });
    
//     movies.map(movie => {
//     const galleryLi = document.createElement("li");
//     const img = document.createElement('img');
//     const a = document.createElement('a')
//     a.href = "https://www.imdb.com/title/" + movie.imdbID + "/";
//     a.target = "_blank";
//     img.src = movie.poster;
//     galleryUl.appendChild(galleryLi);
//     galleryLi.appendChild(a);
//     a.appendChild(img);
//     });
// };

const addMoviesToDom = movies => {
    movies.map(movie => {
        galleryUl.innerHTML = "";
    });
    const addListElement = movies.map(movie => {
        const newLi = document.createElement("li");
        const a = document.createElement("a");
        a.target = "_blank";
        a.href = "https://www.imdb.com/title/" + movie.imdbID + "/";
        const img = document.createElement("img");
        img.src = movie.poster;
        a.appendChild(img);
        newLi.appendChild(a);
        return newLi;
    });
        addListElement.forEach(newLi => galleryUl.appendChild(newLi));
};

addMoviesToDom(movies);

window.addEventListener('load', (event) => {
const radios = document.querySelectorAll('input[type=radio]');
radios.forEach(radio => radio.addEventListener('change', (radio) => {
    radio.target
if (document.getElementById('xmen').checked) {
    const xmenMovies = movies.filter(function(movie) {
        return movie.title.includes("X-Men");
    });
    
    addMoviesToDom(xmenMovies);
    
} else if (document.getElementById('avengers').checked) {
    const avengersMovies = movies.filter(function (movie) {
        return movie.title.includes("Avengers");
    });

    addMoviesToDom(avengersMovies);

} else if (document.getElementById('superman').checked) {
    const latestMovies = movies.filter(function (movie) {
        return movie.year >= 2014;
    });
    
    addMoviesToDom(latestMovies);

} else if (document.getElementById('batman').checked) {
    const batmanMovies = movies.filter(function (movie) {
        return movie.title.includes("Batman");
    });
   
    addMoviesToDom(batmanMovies);

} else if (document.getElementById('princess').checked) {
    const princessMovies = movies.filter(function (movie) {
        return movie.title.includes("Princess");
    });

    addMoviesToDom(princessMovies);

} else if (document.getElementById('all').checked) {
  
    addMoviesToDom(movies);

} else {
}
}));
});
