<template>
  <div>
    <section class="section-padding mt-5">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-9">
                    <div class="cart_product">
                        <div class="cart_product_heading">
                            <div class="row align-items-center">
                                <div class="col-sm-6 text-lg-left" style="padding: 10px 0px;">
                                    <h4 style="padding-left: 20px;">Shopping Cart
                                        <!-- <span>( 3 Item )</span> -->
                                    </h4>
                                </div>
                                <!-- <div class="col-sm-6 text-lg-right">
                                    <a href="#" class="btn btn-light btn-medium button-sm d-none d-md-inline-block"><i class="ti-trash"></i> Empty
                                        Cart</a>
                                </div> -->
                            </div>
                        </div>
    
                        <div v-for="item,index in cart" v-bind:key="index" class="cart_item">
                            <div class="cart_item_image">
                                <img :src="item.imgUrl" alt="shop">
                            </div>
                            <div class="c-item-body mt-4 mt-md-0">
                                <div class="cart_item_title mb-2">
                                    <h4>{{ item.name }}</h4>
                                    <p class="small mb-0 text-muted">{{ item.packType }}</p>
                                </div>
                                <div class="cart_item_price">
                                    <div class="product-price">
                                        <span>
                                            <strong>{{ item.price }} VND</strong>
                                            <!-- <del>₹1,000</del>
                                            <small class="product-discountPercentage">(50% OFF)</small> -->
                                        </span>
                                    </div>
                                    <div class="cart_product_remove">
                                        <a v-on:click="removeFromCart(index)" style="cursor: pointer;">
                                            <i class="ti-trash"></i> Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div class="qty-input btn mt-4 mt-md-0">
                                <span v-on:click="decreaseAmount(index)" class="less" style="padding-left: 10px;">-</span>
                                <input type="text" :value="item.amount" disabled="disabled"/>
                                <span v-on:click="increaseAmount(index)" class="more" style="padding-right: 10px;">+</span>
                            </div>
                        </div>
                        <!-- <div class="cart_item">
                            <div class="cart_item_image">
                                <img src="assets/img/product/product-2.png" alt="shop">
                            </div>
                            <div class="c-item-body  mt-4 mt-md-0">
                                <div class="cart_item_title mb-2">
                                    <h4>1mg Salmon Omega 3 Fish Oil Capsule</h4>
                                    <p class="small mb-0 text-muted">bottle of 60 capsules</p>
                                </div>
                                <div class="cart_item_price">
                                    <div class="product-price">
                                        <span>
                                        <strong>₹499 </strong>
                                            <del>₹1,000</del>
                                            <small class="product-discountPercentage">(50% OFF)</small>
                                        </span>
                                    </div>
                                    <div class="cart_product_remove">
                                        <a href="#">
                                            <i class="ti-trash"></i> Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div class="qty-input btn  mt-4 mt-md-0">
                                <i class="less">-</i>
                                <input type="text" value="2" />
                                <i class="more">+</i>
                            </div>
                        </div>
                        <div class="cart_item">
                            <div class="cart_item_image">
                                <img src="assets/img/product/product-3.png" alt="shop">
                            </div>
                            <div class="c-item-body  mt-4 mt-md-0">
                                <div class="cart_item_title mb-2">
                                    <h4>1mg Salmon Omega 3 Fish Oil Capsule</h4>
                                    <p class="small mb-0 text-muted">bottle of 60 capsules</p>
                                </div>
                                <div class="cart_item_price">
                                    <div class="product-price">
                                        <span>
                                        <strong>₹499 </strong>
                                            <del>₹1,000</del>
                                            <small class="product-discountPercentage">(50% OFF)</small>
                                        </span>
                                    </div>
                                    <div class="cart_product_remove">
                                        <a href="#">
                                            <i class="ti-trash"></i> Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div class="qty-input btn mt-4 mt-md-0">
                                <i class="less">-</i>
                                <input type="text" value="2" />
                                <i class="more">+</i>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="col-lg-3 mt-lg-0 mt-6">
                    <h6 class="font-weight-bold">Deliver to</h6>
                    <div class="mb-4">
                        <select class="form-control" disabled="disabled">
                            <!-- <option value="s">Siliguri - 734001</option> -->
                            <option value="s" selected>{{ this.name }}</option>
                            <!-- <option value="s">Kolkata - 700027</option> -->
                        </select>
                    </div>
                    <div class="cart-summary">
                        <div class="cart-summary-wrap">
                            <h4>Cart Summary</h4>
                            <p>Sub Total <span>{{ this.toltalPrice }} VND</span></p>
                            <p>Shipping Cost <span>$00.00</span></p>
                            <h2>Grand Total <span>{{ this.toltalPrice }} VND</span></h2>
                        </div>
                        <div class="cart-summary-button">
                            <button v-on:click="checkOut()" class="btn btn-primary btn-rounded btn-full btn-large">
                                Proceed to Checkout <i class="ti-arrow-right"></i> 
                            </button>
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
    data() { 
            return { 
                cart: [] 
            }; 
        }, 
        computed: { 
            cartFromLocalStorage() { 
                return JSON.parse(localStorage.getItem('cart') || '[]'); 
            },
            name() {
                return localStorage.getItem('username')
            },
            toltalPrice() {
                let sum = 0
                for (let index in this.cart) {
                    sum += parseInt(this.cart[index].amount) * parseInt(this.cart[index].price)
                }
                return sum
            } 
        },
        watch: { 
            cart(newcart) { 
                localStorage.setItem('cart', JSON.stringify(newcart)); 
            }, 
        },
        created() { 
            this.cart = this.cartFromLocalStorage; 
        },
        methods: {
            decreaseAmount(index){
                if(this.cart[index].amount-1>0) {
                    this.cart[index].amount--
                localStorage.setItem('cart', JSON.stringify(this.cart)); 
                }
            },
            increaseAmount(index){
                this.cart[index].amount++
                localStorage.setItem('cart', JSON.stringify(this.cart)); 
            },
            removeFromCart(index){
                this.cart.splice(index,1) 
                localStorage.setItem('cart', JSON.stringify(this.cart)); 
            },
            checkOut() {
                let tempArr = this.cart.map(({skuCode, price, amount, packType}) => ({skuCode, price, amount, packType}));
                let request = { userId: localStorage.getItem('ownerId'), items: tempArr }
                this.$store.dispatch('fetchPlaceOrder',request)
                localStorage.removeItem('cart')
            }
        },   
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