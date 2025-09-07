"use strict";

var lazyLoadInstance = new LazyLoad();
$(document).ready(function () {
  var slider = $("#lightSlider").lightSlider({
    item: 1,
    autoWidth: false,
    slideMove: 1,
    // slidemove will be 1 if loop is true
    slideMargin: 0,
    addClass: '',
    mode: "slide",
    useCSS: true,
    cssEasing: 'ease',
    //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: 'linear',
    //'for jquery animation',////
    speed: 400,
    //ms'
    auto: false,
    loop: false,
    slideEndAnimation: true,
    pause: 2000,
    keyPress: false,
    controls: false,
    prevHtml: '',
    nextHtml: '',
    rtl: false,
    adaptiveHeight: true,
    vertical: true,
    verticalHeight: 500,
    vThumbWidth: 100,
    thumbItem: 10,
    pager: true,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: 'middle',
    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,
    responsive: [],
    onBeforeStart: function onBeforeStart(el) {},
    onSliderLoad: function onSliderLoad(el) {},
    onBeforeSlide: function onBeforeSlide(el) {},
    onAfterSlide: function onAfterSlide(el) {},
    onBeforeNextSlide: function onBeforeNextSlide(el) {},
    onBeforePrevSlide: function onBeforePrevSlide(el) {}
  });
});
var slider;

function initNewsSlider() {
  slider = $("#news_slider").lightSlider({
    item: 3,
    autoWidth: false,
    slideMove: 1,
    // slidemove will be 1 if loop is true
    slideMargin: 30,
    adaptiveHeight: false,
    controls: false,
    responsive: [{
      breakpoint: 1050,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 800,
      settings: {
        item: 1
      }
    }],
    onBeforeStart: function onBeforeStart(el) {},
    onSliderLoad: function onSliderLoad(el) {
      var showActiveSlides = function showActiveSlides(entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      };

      var imageWidth = el.find("li").outerWidth() + "px";
      var observer = new window.IntersectionObserver(showActiveSlides, {
        root: el.parent()[0],
        rootMargin: "0px " + imageWidth + " 0px " + imageWidth
      });
      el.find("li img").each(function () {
        observer.observe(this);
      });
    },
    onBeforeSlide: function onBeforeSlide(el) {},
    onAfterSlide: function onAfterSlide(el) {},
    onBeforeNextSlide: function onBeforeNextSlide(el) {},
    onBeforePrevSlide: function onBeforePrevSlide(el) {}
  });
  $('#nexSlide').click(function (e) {
    return slider.goToNextSlide();
  });
  $('#prevSlide').click(function (e) {
    return slider.goToPrevSlide();
  });
}

;
var headerScrolled = false;
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('scroll', function (e) {
    var header = document.querySelector('header');
    var heigth = window.innerHeight - 150;

    if (window.scrollY > heigth && !headerScrolled) {
      var activeSlide = document.querySelector('#lightSlider li.active');
      var gradient = window.getComputedStyle(activeSlide).backgroundImage.split(', ').splice(1).join(', ');
      headerScrolled = true;
      header.classList.add('scrolled-header');
      header.style.background = gradient;
    } else if (window.scrollY < heigth && headerScrolled) {
      headerScrolled = false;
      header.classList.remove('scrolled-header');
      header.style.background = '';
    }
  });
});
$('.header-navigation').click(function (e) {
  var a = e.target.tagName;
  if (a !== 'A') return;
  var links = $('.header-navigation a');

  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }

  e.target.classList.add('active');
});
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('.header-navigation a');
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // зняти "active" з усіх
      navLinks.forEach(function (link) {
        return link.classList.remove("active");
      }); // знайти відповідне посилання

      var id = entry.target.getAttribute("id");
      document.querySelector(".header-navigation a[href=\"#".concat(id, "\"]")).classList.add("active");
    }
  });
}, {
  threshold: 0.4
});
sections.forEach(function (section) {
  return observer.observe(section);
});
lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
  thumbnail: true,
  // вмикає превʼюшки внизу
  zoom: true // вмикає збільшення

});

function getNews() {
  var response, data;
  return regeneratorRuntime.async(function getNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('assets/mocks/news.json'));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          createNewsList(data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function createNewsList(data) {
  var slider = $('#news_slider');
  data.forEach(function (news) {
    var li = $("li");
    var html = "\n        <li>\n        <div class=\"news-item\"> \n             <div class=\"img-container\">\n                <img data-src=\"".concat(news.newsImg, "\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\"\n                 alt=\"news img\" class='lazy'>\n              </div>\n              <div class=\"content\">\n                <hgroup>\n                  <h4>").concat(news.title, "</h4>\n                  <p class=\"news-text\">").concat(news.text, "</p>\n                </hgroup>\n                <div class=\"news-author\">\n                  <div class=\"author-img-container\">\n                    <img data-src=\"").concat(news.authorImg, "\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\"\n                    alt=\"author img\" class='lazy'>\n                  </div>\n                  <div class=\"author-info-container\">\n                    <p class=\"author-name\">").concat(news.author, "</p>\n                    <div class=\"news-date\">\n                      <data value=\"\">").concat(news.data, "</data>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <a href=\"#\" class=\"news-link\"></a>\n              </div>\n              </li>\n              ");
    slider.append(html);
  });
  initNewsSlider();
}

$(document).ready(getNews());
$('#hamburger').click(function (e) {
  $('body').addClass('open-mobile-menu');
});
$('#close-mm').click(function (e) {
  $('body').removeClass('open-mobile-menu');
});
window.addEventListener('resize', function (e) {
  if (document.body.classList.contains('open-mobile-menu') && window.innerWidth > 1050) {
    $('body').removeClass('open-mobile-menu');
  }
});
var form = document.getElementById('subscr');
var formElementsValidation = [{
  id: "name",
  conditions: [{
    condition: function condition(value) {
      return value === '';
    },
    msg: "Enter your name"
  }]
}, {
  id: "email",
  conditions: [{
    condition: function condition(value) {
      return value === '';
    },
    msg: "Enter email"
  }]
}];

function validate() {
  var isValid = true;
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  formElementsValidation.forEach(function (el) {
    var elem = document.getElementById(el.id);
    var value = elem.value;
    el.conditions.forEach(function (item) {
      if (item.condition(value)) {
        isValid = false;
        elem.classList.add('invalid');
        elem.parentElement.previousElementSibling.innerText = item.msg;
      }
    });
  });
  return isValid;
}

document.addEventListener('keydown', function (e) {
  if (e.target.classList.contains('invalid')) {
    resetError(e.target);
  }
});

function resetError(el) {
  el.classList.remove('invalid');
  el.parentElement.previousElementSibling.innerText = '';
}

form.addEventListener('submit', function _callee(e) {
  var BOT_TOKEN, CHAT_ID, name, email, loadingBtn, msg, resp;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          e.preventDefault();

          if (validate()) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return");

        case 3:
          BOT_TOKEN = '8265859828:AAEwWUw8V8y4UrOstvtKdD4ADxEWmNbjaRI';
          CHAT_ID = '-4957231386';
          name = document.getElementById('name').value;
          email = document.getElementById('email').value;
          loadingBtn = document.getElementById('loadingBtn');
          e.submitter.style.display = 'none';
          loadingBtn.style.display = 'block';
          msg = "<b>Name: </b>:".concat(name, "%0a") + "<b>Email: </b>".concat(email);
          _context2.next = 13;
          return regeneratorRuntime.awrap(fetch("https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage?chat_id=").concat(CHAT_ID, "&text=").concat(msg, "&parse_mode=html")));

        case 13:
          resp = _context2.sent;

          if (resp.ok) {
            $.toast({
              heading: "Succes",
              icon: 'success',
              position: 'top-right'
            });
            loadingBtn.style.display = 'none';
            e.submitter.style.display = 'block';
            form.reset();
          } else {
            $.toast({
              heading: "Error ocured!",
              text: 'Please check information entered or try again later',
              icon: 'error',
              position: 'top-right'
            });
            e.submitter.style.display = 'block';
            loadingBtn.style.display = 'none';
          }

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  });
});
var wow = new WOW({
  animateClass: 'animate__animated'
});
wow.init();