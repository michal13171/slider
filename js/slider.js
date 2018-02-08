'use strict';
//const może wywalić błąd console.log(slideshow);
//let działa lokanie console.log(slideindex);
//const zmienna której nie mozna zmienić
//w es6 slideshow.css('width',`${slidecount}*100+"%"`)
//console.log(slideshow.css('width'));
//iteracja po wszystkich slajdach
$(function () {
    var tabDots = ['.dots_one', '.dots_two', '.dots_three', '.dots_four', '.dots_five'];
    const slideshow = $('.slider');
    const slidecount = $('.slide').length;
    const slidewidth = 100 / slidecount;
    let slideindex = 0;
    //szerokosc kontenera
    slideshow.css('width', slidecount * 100 + "%");
    console.log(slideshow.css('width'));
    const a = slideshow.find('.slide');
    console.log(a);
    slideshow.find('.slide').each(function (index) {
        $(this).css({
            width: slidewidth + "%"
            , marginLeft: index * slidewidth + "%"
        });
    });
    //przycisk poprzedni
    $('.prev').on("click", function () {
        //$(this).removeClass(this);
        slide(slideindex - 1);
    });
    $('.next').on("click", function () {
        slide(slideindex + 1);
    });
    //dots
    for (let i = 0; i < tabDots.length; i++) {
        console.log(tabDots[3]);
    }
    $(tabDots[0]).on("click", function () {
        slide(slideindex = 0);
    });
    $(tabDots[1]).on("click", function () {
        slide(slideindex = 1);
    });
    $(tabDots[2]).on("click", function () {
        slide(slideindex = 2);
    });
    $(tabDots[3]).on("click", function () {
        slide(slideindex = 3);
    });
    $(tabDots[4]).on("click", function () {
        slide(slideindex = 4);
    });

    function slide(newSlideIndex) {
        //        if (newSlideIndex < 0 || newSlideIndex >= slidecount) {
        //            return;
        //        }
        if (newSlideIndex === 0) {
            $('.prev').hide();
        }
        else {
            $('.prev').show();
        }
        if (newSlideIndex >= 0 + 4) {
            $('.next').hide();
        }
        else {
            $('.next').show();
        }
        const textCaption = $('.caption').eq(newSlideIndex);
        textCaption.toggle();
        const margleft = (newSlideIndex * (-100) + "%");
        slideshow.animate({
            marginLeft: margleft
        }, 1000, function () {
            slideindex = newSlideIndex;
            textCaption.fadeIn("slow");
        });
    }
});