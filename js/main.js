$(document).ready(function() {
    function Timer() {
        function e(e) {
            var i = t(new Date(e).getHours()),
                o = t(new Date(e).getMinutes()),
                n = t(new Date(e).getSeconds());
            s.each(function() {
                $(this).find(".hours").text(i), $(this).find(".minutes").text(o), $(this).find(".seconds").text(n)
            })
        }

        function t(e) {
            return e >= 10 ? e : "0" + e
        }

        function i() {
            a == r ? clearInterval(d) : (a -= 1e3, e(a))
        }

        function o() {
            d = setInterval(i, 1e3)
        }
        var s = $(".timer"),
            n = new Date,
            r = 60 * n.getTimezoneOffset() * 1e3,
            l = new Date((new Date).getTime() + 864e5);
        l.setHours(0), l.setMinutes(0), l.setSeconds(0);
        var a = l - n + r;
        i(), o();
        var d
    }
    Timer();
    $(".js_slider-1").slick({
        infinite: false,
        slidesToShow: 3,
        prevArrow: $(".slider_1-left"),
        nextArrow: $(".slider_1-right"),
        responsive: [{
            breakpoint: 1240,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $(window).on('resize', function() {
        $('.js_slider-1').slick('resize');
    });
    $(".js_slider-2").slick({
        infinite: false,
        slidesToShow: 3,
        prevArrow: $(".slider_2-left"),
        nextArrow: $(".slider_2-right"),
        responsive: [{
            breakpoint: 1240,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $(window).on('resize', function() {
        $('.js_slider-2').slick('resize');
    });
    $('.block7__slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:true,
    adaptiveHeight: false,
    asNavFor: '.block7__slider1',
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1

        }
      }
  ]
  });

  $('.block7__slider1').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: '.block7__slider2',
    dots: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      }
      ]
  });
    // step anim
    (function(globalObj) {
        function animationDetect(animationsElements, innerElementsClass) {
            this.WINDOW = window;
            this.animateElements = $(animationsElements);
            this.innerElementsClass = innerElementsClass;
            this._setSizes();
            this._setEvents();
            return this
        };
        animationDetect.prototype._setSizes = function() {
            this.wh = this.WINDOW.innerHeight;
            this.whTop = this.wh * 0.1;
            this.whBottom = this.wh * 0.6
        };
        animationDetect.prototype._setAnimation = function(element) {
            var innerElements = $(element).find(this.innerElementsClass)
            $(element).addClass($(element).data("animation") + " animated");
            if (innerElements) {
                innerElements.each(function() {
                    $(this).addClass("delay " + $(this).data("animation") + " animated")
                })
            }
        };
        animationDetect.prototype._setEvents = function() {
            var _this = this;
            if (_this.WINDOW) {
                $(_this.WINDOW).on("scroll", function() {
                    var scrolled = $(this).scrollTop(),
                        scrollTop = scrolled + _this.whTop,
                        scrollBottom = scrollTop + _this.whBottom;
                    _this.animateElements.each(function() {
                        var offsetTopElement = $(this).offset().top,
                            offsetBottomElement = offsetTopElement + $(this).height();
                        if (offsetTopElement <= scrollBottom && offsetBottomElement >= scrollTop)
                            _this._setAnimation(this)
                    })
                }).scroll();
                $(this.WINDOW).on("resize", function() {
                    _this._setSizes()
                })
            }
        };
        $(globalObj).ready(function() {
            new animationDetect(".js-animate", ".js-animate-inner")
        })
    }(document));
    // step anim end
});
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
}); 