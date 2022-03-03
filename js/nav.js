$(document).ready(function () {

    $('.header-nav-bars').on('click', function () {

        $('.header-nav-popup').toggleClass('header-nav-hidden');
        $('.header-nav-toggler-icon').toggleClass('d-none');
        $('.header-nav-close-icon').toggleClass('d-none');
    });

    $(window).on("scroll", function (e) {

        let nav = $("nav");

        if (!nav.hasClass("scrolled") && e.currentTarget.pageYOffset > 150) {

            nav.addClass("scrolled");

        } else if (nav.hasClass("scrolled") && e.currentTarget.pageYOffset <= 100) {

            nav.removeClass("scrolled");

        }
        // console.log(e);

    });

    // console.log(window.scrollY);
    if (window.scrollY > 150) {

        $("nav").addClass("scrolled");

    }

    {
        let links = $("ul li a");
        console.log(links);

        for(let i = 0; i < links.length; i++){
            if(window.location.href == links[i].href ||
                window.location.href.includes(links[i].href)){
                // console.log("window location: "+window.location.href);
                // console.log("link: "+links[i].href);
                // console.log(links[i]);

                $(links[i]).addClass("underline");
            }
        }
    }
});
