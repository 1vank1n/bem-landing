modules.define('slider', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {

                    var $slider = this.domElem,
                        $slides = $slider.find('.slider__slide'),
                        $slider__nav = $slider.find('.slider__nav'),
                        $slider__circle = $slider.find('.slider__circle'),
                        timeChange = 5000,
                        sliderTimer;

                    // переключение слайдов
                    $slider__nav.on('click', '.slider__circle', function (e) {
                        $slides.siblings('.active').removeClass('active');
                        $slides.eq( $slider__circle.index(e.target) ).addClass('active');
                        $slider__circle.siblings('.active').removeClass('active');
                        $(this).addClass('active');
                    });

                    // автопереключение
                    var changeSlide = function () {
                        var idx = $slides.index( $slides.siblings('.active') );
                        idx++;

                        if (idx === $slides.length) {
                            idx = 0;
                        }

                        $slider__circle.eq(idx).trigger('click');
                    };

                    // запуск автопереключения
                    function autoSlideChange () {
                        sliderTimer = setInterval(changeSlide, timeChange);
                    }
                    autoSlideChange();

                    // остановить автопереключение при наведении на слайдер
                    $slider.on('mouseover', function () {
                        clearInterval(sliderTimer)
                    }).on('mouseout', function () {
                        autoSlideChange()
                    });

                    // показываем первый слайд
                    $slider__circle.first().trigger('click');

                }
            }
        }
    }))
});