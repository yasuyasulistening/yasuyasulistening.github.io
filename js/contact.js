const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    //#region navigation
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();
    //#endregion

    //#region form
    
    //#endregion

    //#region quotes
    // AUTOLOAD A QUOTE
    fetch("https://stoic-quotes.com/api/quote")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `"${data.text}"`;
        author.innerHTML = `- ${data.author}`;

    });
    //LOAD ON CLICK
    const quote = document.querySelector("#quote");
    const author = document.querySelector("#author");
    const btn = document.querySelector("#quote-btn");

    btn.addEventListener("mouseup", getQuote);

    function getQuote() {
        fetch("https://stoic-quotes.com/api/quote")
        .then(res => res.json())
        .then(data => {
            quote.innerHTML = `"${data.text}"`;
            author.innerHTML = `- ${data.author}`;

        })
        
    }
    //#endregion
    

});