$(document).ready(function () {
    var $offCanvas = $("#mobile-menu");
    var $hamburger = $(".hamburger");
    var current = location.pathname;

    //Add active class to current link
    var $activeLink = $('#nav a[href="' +current+ '"]');
    $activeLink.parent().addClass('uk-active');

    //Add active class to parent
    $activeLink.parents("li").addClass('uk-active');

    //Repeat for Mobile menu
    $activeLink = $('#mobile-nav a[href="' +current+ '"]');
    $activeLink.parents("li").addClass('uk-active');

    //Fade In Body
    $("body").css("display", "none");
    $("body").fadeIn(250);

    //Fade Out on navigation link clicks (not # links)
    $(".uk-nav a[href!=\"#\"], .uk-navbar a[href!=\"#\"], .uk-notification a[href!=\"#\"]").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(250, redirectPage);
    });

    $offCanvas.on("hide", function(e) {
        $hamburger.removeClass("is-active");
    })
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
    });
});