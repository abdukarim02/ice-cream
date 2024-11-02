"use strict";

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs-content__item');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    })

    tabTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach(function(item){
        item.classList.remove('tabs-content__item--active');
    });

    document.querySelector(`#${button}`).classList.add('tabs-content__item--active');
}

$(document).ready(function () {

    $(window).scroll(function () {
        let height = $(window).scrollTop ();
        if (height > 100) {
            $(".scroller").addClass("active");
        } else {
            $(".scroller").removeClass("active");
        }
    });

    $('.scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 4000);
        return false;
    });
});