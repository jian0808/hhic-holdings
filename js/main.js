$( document ).ready( function() {
    // header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".header").addClass("scrolled"); 
        } else {
            $(".header").removeClass("scrolled"); 
        }
    });
    
    // header nav
    $(".header .nav").mouseenter(function(){
        $(".header").addClass("on"); 
    });

    $(".header .nav").mouseleave(function(){
        $(".header").removeClass("on"); 
    });
            
    // language button 
    $(".lang-btn").click(function(e){
        e.stopPropagation(); 
        $(".language-list").toggleClass("on");
    });

    $(".language-list a").click(function(){
        $(".language-list").removeClass("on");
    });

    $(document).click(function() {
        $(".language-list").removeClass("on");
    });

    // all menu button
    $(".all-menu-btn").click(function(){
        $(this).toggleClass("on");
        $(".header").toggleClass("mo-view");
    });  

    // $(window).resize(function(){
    //     if ($(window).width() <= 1024) {
    //         $(".all-menu-btn").show();
    //     } else {
    //         $(".all-menu-btn").hide();
    //         $(".header").removeClass("mo-view");
    //         $(".all-menu-btn").removeClass("on");
    //     }
    // });
    
    // mobile menu
    $(".mo-menu .depth1 > li > a").on("click", function() {
        var $parentLi = $(this).parent(); // 클릭한 a 태그의 부모 li
        var $subMenu = $parentLi.find(".depth2");

        if ($subMenu.is(":visible")) { 
            $subMenu.slideUp(); // 이미 열려있다면 닫기
            $parentLi.removeClass("active");
        } else {
            $(".mo-menu .depth2").slideUp(); // 다른 메뉴 닫기
            $(".mo-menu .depth1 > li").removeClass("active");

            $subMenu.slideDown(); // 클릭한 메뉴 열기
            $parentLi.addClass("active");
        }        
    });

    // main visual Swiper slide
    var swiper = new Swiper(".main-slide", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });    





});

