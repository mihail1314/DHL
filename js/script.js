$('ul.inform__elem_wrap').on('click', 'li:not(.inform__elem_title_active)', function() {
    $(this)
        .addClass('inform__elem_title_active').siblings().removeClass('inform__elem_title_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});