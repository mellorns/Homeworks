"use strict";

var DEV_MODE = false;
var API_key = '9d69102e';

function searchMovie(search, type, year) {
  var url, response, data;
  return regeneratorRuntime.async(function searchMovie$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = DEV_MODE ? 'assets/mocks/movies.json' : "http://www.omdbapi.com/?apikey=".concat(API_key, "&s=").concat(search, "&type=").concat(type, "&y=").concat(year);
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;

          if (!(data.Response === 'False')) {
            _context.next = 10;
            break;
          }

          alert("Error");
          return _context.abrupt("return");

        case 10:
          showMoviesList(data.Search);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

function createMovieList(movies) {
  var list = '';
  movies.forEach(function (movie) {
    list += " \n        <div class=\"card\">\n    <img src=\"".concat(movie.Poster, "\" class=\"card-img-top\" alt=\"").concat(movie.Title, "\" onerror=''>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(movie.Title, "</h5>\n      <p class=\"card-text\">Year: <b>").concat(movie.Year, "</b></p>\n      <button href=\"#\" class=\"btn btn-primary\" onclick='additionalInfo(\"").concat(movie.imdbID, "\")'>Detailed</button>\n      <button href=\"#\" class=\"btn btn-warning\" data-id='").concat(movie.imdbID, "'>\u2605</button>\n    </div>\n  </div>");
  });
  return list;
}

function showMoviesList(movies) {
  var list = createMovieList(movies);
  document.getElementById('movies-list').innerHTML = list;
  addToFavBtn(movies);
}

function addToFavBtn(movies) {
  document.querySelectorAll('.card .btn-warning').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var localMovies = JSON.parse(localStorage.getItem('favMovies'));
      movies.forEach(function (movie) {
        if (movie.imdbID === e.currentTarget.dataset.id) {
          if (!localMovies || localMovies.length === 0) {
            addToFav(movie);
          } else {
            var duplicate = false;

            for (var i = 0; i < localMovies.length; i++) {
              if (localMovies[i].imdbID === movie.imdbID) {
                favMovies = localMovies.toSpliced(i, 1);
                localStorage.setItem('favMovies', JSON.stringify(favMovies));
                duplicate = true;
                break;
              }
            }

            if (!duplicate) {
              addToFav(movie);
            }
          }
        }
      });
    });
  });
}

var favMovies = [];

function addToFav(movie) {
  favMovies.push(movie);
  localStorage.setItem('favMovies', JSON.stringify(favMovies));
}

function additionalInfo(movieID) {
  var responce, data;
  return regeneratorRuntime.async(function additionalInfo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("http://www.omdbapi.com/?apikey=".concat(API_key, "&i=").concat(movieID)));

        case 2:
          responce = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(responce.json());

        case 5:
          data = _context2.sent;

          if (!(data.Response === 'False')) {
            _context2.next = 9;
            break;
          }

          alert("Some error");
          return _context2.abrupt("return");

        case 9:
          showAdditionalInfo(data);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function showAdditionalInfo(info) {
  var html = "\n        <div class='card'>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-4\">\n            <div class='img-container'>\n            <img src=".concat(info.Poster, " alt=\"").concat(info.Title, "\">\n            </div>\n        </div>\n         <div class=\"col-8 p-5\">\n            <h3 class=\"card-title\">").concat(info.Title, "</h3>\n            <p class=\"card-text m-b-3\">Year: <b>").concat(info.Year, "</b></p>\n            <p class=\"card-text\">Released: <b>").concat(info.Released, "</b></p>\n            <p class=\"card-text\">Runtime: <b>").concat(info.Runtime, "</b></p>\n            <p class=\"card-text\">Genre: <b>").concat(info.Genre, "</b></p>\n            <p class=\"card-text\">Director: <b>").concat(info.Director, "</b></p>\n            <p class=\"card-text\">Writer: <b>").concat(info.Writer, "</b></p>\n            <p class=\"card-text\">Actors: <b>").concat(info.Actors, "</b></p>\n            <p class=\"card-text\">Plot: <b>").concat(info.Plot, "</b></p>\n            <p class=\"card-text\">Language: <b>").concat(info.Language, "</b></p>\n\n            <p class=\"card-text\">Ratings:</p>\n             <ul id='rating-list' class=\"d-flex justify-content-between\"\"> \n");
  var ratingsHtml = '';
  info.Ratings.forEach(function (rating) {
    ratingsHtml += "\n        <li class='border border-info flex-fill p-3'>\n            <p class='text-center '>".concat(rating.Source, "</p>\n            <p class='text-center'>").concat(rating.Value, "</p>\n            </li>\n        ");
  });
  html += ratingsHtml;
  html += "\n     </ul>\n     <button class='btn btn-secondary close' onclick='closeModaInfo(this)'>Close</button>\n        </div >\n       </div > \n    </div >\n  </div >\n        ";
  openModalInfo(html);
}

function closeModaInfo(elem) {
  var modal = elem.closest('div.modal-info');
  modal.remove();
}

function openModalInfo(html, type) {
  var modal = document.querySelector('modal-info');
  if (modal) modal.remove();
  var div = document.createElement('div');
  div.classList.add('modal-info');

  if (type) {
    div.classList.add(type);
    div.insertAdjacentHTML('afterbegin', "<button class='btn btn-secondary close' onclick='closeModaInfo(this)'>Close</button>");
  }

  div.insertAdjacentHTML('afterbegin', html);
  document.getElementById('movie-container').append(div);
}

var form = document.getElementById('search-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var search = document.getElementById('search-inp').value.trim();
  var type = document.getElementById('type').value;
  var year = document.getElementById('year').value;

  if (search === '') {
    console.log("Enter movie name");
  } else {
    searchMovie(search, type, year);
  }
});
document.getElementById('year').setAttribute('max', new Date().getFullYear());
document.getElementById('show-fav').addEventListener('click', function (e) {
  var movies = JSON.parse(localStorage.getItem('favMovies'));
  var list = createMovieList(movies);
  openModalInfo(list, 'fav-list');
  addToFavBtn(movies);
});