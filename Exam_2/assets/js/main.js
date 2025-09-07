import { BOT_TOKEN, CHAT_ID } from './telegram_data.js';


var lazyLoadInstance = new LazyLoad();

$(document).ready(function () {
    const slider = $("#lightSlider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 400, //ms'
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

        onBeforeStart: function (el) { },
        onSliderLoad: function (el) { },
        onBeforeSlide: function (el) { },
        onAfterSlide: function (el) { },
        onBeforeNextSlide: function (el) { },
        onBeforePrevSlide: function (el) { }
    });
});

let slider
function initNewsSlider() {


    slider = $("#news_slider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 30,
        adaptiveHeight: false,
        responsive: [{
            breakpoint: 1050,
            settings: {
                item: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                item: 1
            }
        },],

        onBeforeStart: function (el) { },
        onSliderLoad: function (el) {
            var showActiveSlides = function (entries) {
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
            })
        },


        onBeforeSlide: function (el) { },
        onAfterSlide: function (el) { },
        onBeforeNextSlide: function (el) { },
        onBeforePrevSlide: function (el) { }
    })


    $('#nexSlide').click((e) => slider.goToNextSlide())
    $('#prevSlide').click((e) => slider.goToPrevSlide())



};


let headerScrolled = false
document.addEventListener('scroll', function (e) {

    const header = document.querySelector('header')
    let heigth = window.innerHeight - 150


    if (window.scrollY > heigth && !headerScrolled) {
        const activeSlide = document.querySelector('#lightSlider li.active')
        const gradient = window.getComputedStyle(activeSlide).backgroundImage.split(', ').splice(1).join(', ')
        headerScrolled = true
        header.classList.add('scrolled-header')
        header.style.background = gradient
    } else if (window.scrollY < heigth && headerScrolled) {
        headerScrolled = false
        header.classList.remove('scrolled-header')
        header.style.background = ''
    }
})


$('.header-navigation').click((e) => {

    const a = e.target.tagName

    if (a !== 'A') return

    const links = $('.header-navigation a')

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active')
    }
    e.target.classList.add('active')

})

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.header-navigation a')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // зняти "active" з усіх
            navLinks.forEach(link => link.classList.remove("active"));
            // знайти відповідне посилання
            const id = entry.target.getAttribute("id");
            document.querySelector(`.header-navigation a[href="#${id}"]`).classList.add("active");
        }
    });
}, { threshold: 0.4 });


sections.forEach(section => observer.observe(section))

lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    thumbnail: true,   // вмикає превʼюшки внизу
    zoom: true,        // вмикає збільшення
});


async function getNews() {

    const response = await fetch('assets/mocks/news.json')

    const data = await response.json()

    createNewsList(data)

}

function createNewsList(data) {

    const slider = $('#news_slider')

    data.forEach(news => {
        const li = $("li")

        const html = `
        <li>
        <div class="news-item"> 
             <div class="img-container">
                <img data-src="${news.newsImg}"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                 alt="news img" class='lazy'>
              </div>
              <div class="content">
                <hgroup>
                  <h4>${news.title}</h4>
                  <p class="news-text">${news.text}</p>
                </hgroup>
                <div class="news-author">
                  <div class="author-img-container">
                    <img data-src="${news.authorImg}"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    alt="author img" class='lazy'>
                  </div>
                  <div class="author-info-container">
                    <p class="author-name">${news.author}</p>
                    <div class="news-date">
                      <data value="">${news.data}</data>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" class="news-link"></a>
              </div>
              </li>
              `
        slider.append(html)
    })

    initNewsSlider()
}

$(document).ready(getNews())

$('#hamburger').click(function (e) {
    $('body').addClass('open-mobile-menu')
})

$('#close-mm').click(function (e) {
    $('body').removeClass('open-mobile-menu')
})

window.addEventListener('resize', function (e) {
    if (document.body.classList.contains('open-mobile-menu') && window.innerWidth > 1050) {
        $('body').removeClass('open-mobile-menu')
    }
})

const form = document.getElementById('subscr')
const formElementsValidation = [
    {
        id: "name",
        conditions: [
            {
                condition: (value) => value === '',
                msg: "Enter your name"
            }
        ]
    },
    {
        id: "email",
        conditions: [
            {
                condition: (value) => value === '',
                msg: "Enter email"
            },
        ]
    }
]

function validate() {

    let isValid = true

    const name = document.getElementById('name')
    const email = document.getElementById('email')


    formElementsValidation.forEach(el => {
        const elem = document.getElementById(el.id)
        const value = elem.value


        el.conditions.forEach(item => {
            if (item.condition(value)) {
                isValid = false
                elem.classList.add('invalid')
                elem.parentElement.previousElementSibling.innerText = item.msg
            }
        })

    })

    return isValid


}

document.addEventListener('keydown', function (e) {
    if (e.target.classList.contains('invalid')) {
        resetError(e.target)
    }
})

function resetError(el) {
    el.classList.remove('invalid')
    el.parentElement.previousElementSibling.innerText = ''

}


form.addEventListener('submit', async function (e) {
    e.preventDefault()
    if (!validate()) return



    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    const loadingBtn = document.getElementById('loadingBtn')

    e.submitter.style.display = 'none'
    loadingBtn.style.display = 'block'

    const msg = `<b>Name: </b>:${name}%0a` + `<b>Email: </b>${email}`

    const resp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}&parse_mode=html`)

    if (resp.ok) {
        $.toast({
            heading: "Succes",
            icon: 'success',
            position: 'top-right',
        })

        loadingBtn.style.display = 'none'
        e.submitter.style.display = 'block'
        form.reset()
    } else {
        $.toast({
            heading: "Error ocured!",
            text: 'Please check information entered or try again later',
            icon: 'error',
            position: 'top-right',
        })
        loadingBtn.style.display = 'none'
        e.submitter.style.display = 'block'
    }
})

const wow = new WOW(
    {
        animateClass: 'animate__animated'
    }
)
wow.init();