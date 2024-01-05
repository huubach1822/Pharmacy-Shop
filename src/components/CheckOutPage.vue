<template>
  <div>
    <section class="section-padding mt-5">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-body">
                            <div class="row pb-4">
                                <div class="col-sm-6">
                                    <div class="form-group mb-4">
                                        <label class="form-label">First name <span class='text-danger'>*</span></label>
                                        <input class="form-control" type="text" value="Jhon">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group mb-4">
                                        <label class="form-label">Last name <span class='text-danger'>*</span></label>
                                        <input class="form-control" type="text" value="Doe">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mb-4">
                                        <label class="form-label">Email address <span
                                                class='text-danger'>*</span></label>
                                        <input class="form-control" type="email" value="jhon@doe.com">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group mb-4">
                                        <label class="form-label">Company</label>
                                        <input class="form-control" type="text" value="Dsahathemes">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group mb-4">
                                        <label class="form-label">Country <span class='text-danger'>*</span></label>
                                        <select class="form-control">
                                            <option value>Select country</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="France">France</option>
                                            <option value="India" selected>India</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Spain">Spain</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="USA">USA</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="accordion">
                                <div class="accordion-item">
                                    <div class="accordion-title">
                                        <h5 class="mb-0" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true"> Pay with Credit Card</h5>
                                    </div>
                                    <div class="accordion-content collapse show" id="collapseOne"
                                        data-parent="#accordion">
                                        <div class="accordion-content-inner">
                                            <p class="py-4">We accept following credit cards:&nbsp;&nbsp;<img class="d-inline-block align-middle" src="assets/img/payment-methods.png" style="width: 187px;" alt="Cerdit Cards"></p>
                                            <form class="credit-card-form row g-3">
                                                <div class="col-sm-6 mb-4">
                                                    <input class="form-control" type="text"
                                                        name="number" placeholder="Card Number" required="">
                                                </div>
                                                <div class="col-sm-6 mb-4">
                                                    <input class="form-control" type="text" name="name"
                                                        placeholder="Full Name" required="">
                                                </div>
                                                <div class="col-sm-3 mb-4">
                                                    <input class="form-control" type="text"
                                                        name="expiry" placeholder="MM/YY" required="">
                                                </div>
                                                <div class="col-sm-3 mb-4">
                                                    <input class="form-control" type="text" name="cvc"
                                                        placeholder="CVC" required="">
                                                </div>
                                                <div class="col-sm-6 mb-4">
                                                        <router-link to="/ThankYouPage" class="btn btn-primary d-block w-100">Place
                                                        order</router-link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <!-- accordion Title -->
                                    <div class="accordion-title">
                                        <h5 class="mb-0" data-toggle="collapse" data-target="#collapseTwo">Pay with
                                            PayPal</h5>
                                    </div>
                                    <!-- accordion Content -->
                                    <div class="collapse accordion-content" id="collapseTwo" data-parent="#accordion">
                                        <div class="accordion-content-inner">
                                            <p class="pt-4 mb-0 pb-2"><span class="font-weight-bold">PayPal</span> - the safer, easier way to pay</p>
                                            <a href="thak-you.html" class="btn btn-primary">Checkout with PayPal</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <!-- accordion Title -->
                                    <div class="accordion-title">
                                        <h5 class="mb-0" data-toggle="collapse" data-target="#collapseThree"> Pay later
                                        </h5>
                                    </div>
                                    <!-- accordion Content -->
                                    <div class="collapse accordion-content" id="collapseThree" data-parent="#accordion">
                                        <div class="accordion-content-inner">
                                            <p class="pt-4 mb-0 pb-3"><span class="font-weight-bold">Cash On Delevary</span> -Buy Now Pay Later for all your shopping</p>
                                            <router-link to="/ThankYouPage" class="btn btn-primary">Place order</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-lg-0 mt-6">
                    <h6 class="font-weight-bold">Deliver to</h6>
                    <div class="mb-4">
                        <select class="form-control">
                            <option value="s">Siliguri - 734001</option>
                            <option value="s" selected>Delhi - 110002</option>
                            <option value="s">Kolkata - 700027</option>
                        </select>
                    </div>
                    <div class="cart-summary">
                        <div class="cart-summary-wrap">
                            <h4>Cart Summary</h4>
                            <p>Sub Total <span>$1250.00</span></p>
                            <p>Shipping Cost <span>$00.00</span></p>
                            <h2>Grand Total <span>$1250.00</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
  import $ from 'jquery'
  import 'slick-carousel'
//   import noUiSlider from 'nouislider';
  import moment from 'moment'
  import 'select2'
export default {
    mounted() {
        "use strict";
    // ---------------------------------------------//
    //  Background
    //--------------------------------------------- //
    $("[data-background]").each(function () {
        $(this).attr('style', 'background-image:url(' + $(this).attr("data-background") + ')');
    });
    // ---------------------------------------------//
    //  Background
    //--------------------------------------------- //
    // if ($('.range-slider').length > 0) {
    //     var nonLinearSlider = $('.range-slider');
    //     var startMin = parseInt(nonLinearSlider.data('start-min'));
    //     var startMax = parseInt(nonLinearSlider.data('start-max'));
    //     var min = parseInt(nonLinearSlider.data('min'));
    //     var max = parseInt(nonLinearSlider.data('max'));
    //     var step = parseInt(nonLinearSlider.data('step'));

    //     var slider = document.getElementById('nouislider');

    //     noUiSlider.create(slider, {
    //         connect: true,
    //         behaviour: 'tap',
    //         'step': step,
    //         start: [startMin, startMax],
    //         tooltips: [true, true],
    //         range: {
    //             'min': [min],
    //             'max': [max]
    //         },
    //         pips: {
    //             mode: 'positions',
    //             values: [0, 25, 50, 75, 100],
    //             density: 3
    //         }
    //     });
    // }
    //-------------------------------------------------------
    // Date Picker
    //-------------------------------------------------------*/
    if ($('.date_range_picker').length > 0) {
        var today0 = moment();
        $('.date_range_picker').daterangepicker({
            // "autoApply": true,
            "alwaysShowCalendars": true,
            "startDate": today0,
            "opens": "center"
        }, function (start, end, label) {
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });
    }
    if ($('.date_picker').length > 0) {
        var today = moment();
        $('.date_picker').daterangepicker({
            "autoApply": true,
            "singleDatePicker": true,
            "alwaysShowCalendars": true,
            "startDate": today,
            "opens": "center"
        }, function (start, end, label) {
            console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });
    }
    // -------------------------------------------//
    //  Custom Select
    // -------------------------------------------//
    if ($("select").length > 0) {
        $('select:not(.ignore)').select2({
            selectionCssClass: ':all:'
        });
        $(".select2-selection--single.wide").parent().addClass("wide");
        $(".selection.wide").parent().addClass("wide");
    }

    // ---------------------------------------------//
    // Slick Slider
    // ---------------------------------------------//
    $('.slider').each(function () {
        var play = $(this).data('autoplay');
        var playSpeed = $(this).data('autoplay-speed');
        var nav = $(this).data('nav');
        var dot = $(this).data('dots');
        var slidesToshow = $(this).data('slides-to-show');
        var slidesToscroll = $(this).data('slides-to-scroll');
        var slideCenter = $(this).data('slick-center-mode');
        $(this).slick({
            arrows: nav,
            dots: dot,
            slidesToShow: slidesToshow,
            autoplay: play,
            autoplaySpeed: playSpeed,
            centerMode: slideCenter,
            slidesToScroll: slidesToscroll,
            responsive: [{
                breakpoint: 500,
                settings: {
                    slidesToShow: slidesToshow < 2 ? slidesToshow : 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: slidesToshow < 2 ? slidesToshow : 3
                }
            }]
        });
    });
    $('.slider-for').each(function () {
        var play = $(this).data('autoplay');
        var playSpeed = $(this).data('autoplay-speed');
        var nav = $(this).data('nav');
        var dot = $(this).data('dots');
        var slidesToshow = $(this).data('slides-to-show');
        var slidesToscroll = $(this).data('slides-to-scroll');
        var slideCenter = $(this).data('slick-center-mode');
        $(this).slick({
            arrows: nav,
            dots: dot,
            slidesToShow: slidesToshow,
            autoplay: play,
            autoplaySpeed: playSpeed,
            centerMode: slideCenter,
            slidesToScroll: slidesToscroll,
            asNavFor: ".slider-nav",
            responsive: [{
                breakpoint: 500,
                settings: {
                    slidesToShow: slidesToshow < 2 ? slidesToshow : 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: slidesToshow < 2 ? slidesToshow : 3
                }
            }]
        });
    });
    $('.slider-nav').each(function () {
        var play = $(this).data('autoplay');
        var playSpeed = $(this).data('autoplay-speed');
        var nav = $(this).data('nav');
        var dot = $(this).data('dots');
        var slidesToshow = $(this).data('slides-to-show');
        var slidesToscroll = $(this).data('slides-to-scroll');
        var slideCenter = $(this).data('slick-center-mode');
        $(this).slick({
            arrows: nav,
            dots: dot,
            slidesToShow: slidesToshow,
            autoplay: play,
            autoplaySpeed: playSpeed,
            centerMode: slideCenter,
            slidesToScroll: slidesToscroll,
            asNavFor: ".slider-for",
            focusOnSelect: true
        });
    });


    // ---------------------------------------------//
    // add Remove item
    // ---------------------------------------------//
    $('.qty-input i').on('click', function () {
        var val = parseInt($('.qty-input input').val());

        if ($(this).hasClass('less')) {
            val = val - 1;
        } else if ($(this).hasClass('more')) {
            val = val + 1;
        }

        if (val < 1) {
            val = 1;
        }

        $('.qty-input input').val(val);
    })

    // ---------------------------------------------//
    // File Upload name add
    // ---------------------------------------------//
    $('.custom-input-file').each(function () {
        var $input = $(this),
            $label = $input.next('label'),
            labelVal = $label.html();

        $input.on('change', function (e) {
            var fileName = '';

            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else if (e.target.value)
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                $label.find('span').html(fileName);
            else
                $label.html(labelVal);
        });

        // Firefox bug fix
        $input
            .on('focus', function () {
                $input.addClass('has-focus');
            })
            .on('blur', function () {
                $input.removeClass('has-focus');
            });
    });

    var websiteWidth = $(document).width();
    $(".header-links-item .header-childrenItem-parent").on("mouseover", function () {
        var liparent = $(this.parentElement);
        var ulChild = liparent.find('.header-childrenItem-child-category-links');
        var xOffset = liparent.offset().left;
        var alignRight = ($(document).width() - xOffset) < xOffset;
        console.log(alignRight)
        if ($(document).width() > websiteWidth) {
            ulChild.addClass("dropdown-menu-right");
        }
    });

    $(".header-search input.custom-search").on("click", function () {
        if ($(".search-content .search-product").hasClass("d-none")) {
            $(".search-content").find('.search-product').removeClass('d-none');
            if ($('.search_overlay').length > 0 == false) {
                $("body").append('<div class="search_overlay"></div>');
            }
            $(".header , .announcement-header").css({ "zIndex": "99999" });
            $("body").css({ "overflow": "hidden" });
        } else {
            $(".search-content").find('.search-product').addClass('d-none');
            $("body").find('.search_overlay').remove();
            $(".header , .announcement-header").attr({ "style": "" });
            $("body").attr({ "style": "" });
        }
    });
    $(document).on("click", ".search_overlay", function () {
        $(".search-content").find('.search-product').addClass('d-none');
        $("body").find('.search_overlay').remove();
        $(".header , .announcement-header").attr({ "style": "" });
        $("body").attr({ "style": "" });
    });

    $(".open-sidebar").on("click", function () {
        $('.menu-sidebar').addClass("show");
        $('.overlay').addClass("show");
    });
    $(".close").on("click", function () {
        $('.menu-sidebar').removeClass("show");
        $('.overlay').removeClass("show");
    });
    $(".overlay").on("click", function () {
        $('.menu-sidebar').removeClass("show");
        $('.overlay').removeClass("show");
    });

    }
}
</script>

<style>

</style>