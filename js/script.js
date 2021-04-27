$(document).ready(function() {
    $('ul.header__wrap_menu').on('click', 'li:not(.header__wrap-item_active)', function() {
        $(this)
            .addClass('header__wrap-item_active').siblings().removeClass('header__wrap-item_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
});