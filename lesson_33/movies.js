const DEV_MODE = false


const API_key = '9d69102e'


async function searchMovie(search, type, year) {


    const url = DEV_MODE ? 'assets/mocks/movies.json' : `https://www.omdbapi.com/?apikey=${API_key}&s=${search}&type=${type}&y=${year}`


    const response = await fetch(url)

    const data = await response.json()

    if (data.Response === 'False') {
        alert("Error")
        return
    }

    showMoviesList(data.Search)

}


function createMovieList(movies) {

    let list = ''

    movies.forEach(movie => {
        list += ` 
        <div class="card">
    <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}" onerror=''>
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">Year: <b>${movie.Year}</b></p>
      <button href="#" class="btn btn-primary" onclick='additionalInfo("${movie.imdbID}")'>Detailed</button>
      <button href="#" class="btn btn-warning" data-id='${movie.imdbID}'>★</button>
    </div>
  </div>`
    });

    return list

}

function showMoviesList(movies) {

    const list = createMovieList(movies)


    document.getElementById('movies-list').innerHTML = list

    addToFavBtn(movies)

}

function addToFavBtn(movies) {
    document.querySelectorAll('.card .btn-warning').forEach(el => {
        el.addEventListener('click', (e) => {
            let localMovies = JSON.parse(localStorage.getItem('favMovies'))
            movies.forEach(movie => {
                if (movie.imdbID === e.currentTarget.dataset.id) {
                    if (!localMovies || localMovies.length === 0) {
                        addToFav(movie)
                    } else {
                        let duplicate = false
                        for (let i = 0; i < localMovies.length; i++) {
                            if (localMovies[i].imdbID === movie.imdbID) {
                                favMovies = localMovies.toSpliced(i, 1)
                                localStorage.setItem('favMovies', JSON.stringify(favMovies))
                                duplicate = true
                         
                                break
                            }
                        }
                        if (!duplicate) {
                            addToFav(movie)
                        }

                    }
                }
            })
        })
    })
}
let favMovies = []

function addToFav(movie) {

    favMovies.push(movie)
    localStorage.setItem('favMovies', JSON.stringify(favMovies))

}


async function additionalInfo(movieID) {

    const responce = await fetch(`https://www.omdbapi.com/?apikey=${API_key}&i=${movieID}`)

    const data = await responce.json()

    if (data.Response === 'False') {
        alert("Some error")
        return
    }

    showAdditionalInfo(data)
}


function showAdditionalInfo(info) {

    let html = `
        <div class='card'>
    <div class="card-body">
      <div class="row">
        <div class="col-4">
            <div class='img-container'>
            <img src=${info.Poster} alt="${info.Title}">
            </div>
        </div>
         <div class="col-8 p-5">
            <h3 class="card-title">${info.Title}</h3>
            <p class="card-text m-b-3">Year: <b>${info.Year}</b></p>
            <p class="card-text">Released: <b>${info.Released}</b></p>
            <p class="card-text">Runtime: <b>${info.Runtime}</b></p>
            <p class="card-text">Genre: <b>${info.Genre}</b></p>
            <p class="card-text">Director: <b>${info.Director}</b></p>
            <p class="card-text">Writer: <b>${info.Writer}</b></p>
            <p class="card-text">Actors: <b>${info.Actors}</b></p>
            <p class="card-text">Plot: <b>${info.Plot}</b></p>
            <p class="card-text">Language: <b>${info.Language}</b></p>

            <p class="card-text">Ratings:</p>
             <ul id='rating-list' class="d-flex justify-content-between""> 
`
    let ratingsHtml = ''
    info.Ratings.forEach(rating => {
        ratingsHtml += `
        <li class='border border-info flex-fill p-3'>
            <p class='text-center '>${rating.Source}</p>
            <p class='text-center'>${rating.Value}</p>
            </li>
        `
    })
    html += ratingsHtml

    html += `
     </ul>
     <button class='btn btn-secondary close' onclick='closeModaInfo(this)'>Close</button>
        </div >
       </div > 
    </div >
  </div >
        `
    openModalInfo(html)
}


function closeModaInfo(elem) {
    const modal = elem.closest('div.modal-info')
    modal.remove()
}


function openModalInfo(html, type) {
    const modal = document.querySelector('modal-info')

    if (modal) modal.remove()

    const div = document.createElement('div')
    div.classList.add('modal-info')


    if (type) {
        div.classList.add(type)
        div.insertAdjacentHTML('afterbegin', `<button class='btn btn-secondary close' onclick='closeModaInfo(this)'>Close</button>`)
    }


    div.insertAdjacentHTML('afterbegin', html)

    document.getElementById('movie-container').append(div)
}

const form = document.getElementById('search-form')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const search = document.getElementById('search-inp').value.trim()
    const type = document.getElementById('type').value
    const year = document.getElementById('year').value

    if (search === '') {
        console.log("Enter movie name");

    } else {
        searchMovie(search, type, year)
    }
})


document.getElementById('year').setAttribute('max', new Date().getFullYear())


document.getElementById('show-fav').addEventListener('click', (e) => {

    const movies = JSON.parse(localStorage.getItem('favMovies'))

    const list = createMovieList(movies)

    openModalInfo(list, 'fav-list');

    addToFavBtn(movies)
})


