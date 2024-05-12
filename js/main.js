$(function () {
    const navO = $("nav .overlay"),
        navH = navO.innerHeight(),
        goUp = $(".go-up");

    // Add Overlay for Navbar if Scroll-Y Bigger Than Navbar Height and Vice Versa
    $(window).scroll(() => {
        $(window).scrollTop() >= navH
            ? navO.addClass("show")
            : navO.removeClass("show");
        window.scrollY <= 600 ? goUp.fadeOut(500) : goUp.fadeIn(500);
    });

    // Add Overlay For Navbar in Mobile & Tablet Screen When you click you bars icon
    $(".navbar-toggler").on("click", () => navO.addClass("show"));

    // Go To The Top of Website
    goUp.on("click", () => {
        $("html,body").animate(
            {
                scrollTop: 0
            },
            900
        );
    });

    //Go to The Section That You Clicked on the Navbar
    $("nav .nav-link , footer .two ul li").on("click", function () {
        let dataset = $(this).data("class");
        $("html,body").animate(
            {
                scrollTop: $(`${dataset}`).offset().top
            },
            900
        );
    });

    // Set a Background Color For The Card Title form data-bg-color
    $(".card-title").each(function () {
        $(this).css("background-color", $(this).data("bg-color"));
    });

    // Set a Border Color  For The Step Number form data-border-color
    $(".step").each(function () {
        $(this).css("border-color", $(this).data("border-color"));
    });
    $(".step").hover(
        function () {
            $(this).css("background-color", $(this).data("border-color"));
        },
        function () {
            $(this).css("background-color", "#fff");
        }
    );

    // Remove Loading Page
    $(".loading img").fadeIn(1500);
    setTimeout(() => {
        $("body").removeClass("is-loading");
        $(".loading").fadeOut(600);
    }, 2000);

    // Activate Wow.js
    wow = new WOW({
        offset: 150
    });
    wow.init();

    // Change The Type of animation on mobile screen
    if (window.innerWidth <= 767) {
        $(".how-to-start")
            .find(".animate__fadeInLeft, .animate__fadeInRight")
            .removeClass("animate__fadeInLeft animate__fadeInRight")
            .addClass("animate__fadeInUp");
    }
});
