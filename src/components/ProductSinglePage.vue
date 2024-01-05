<template>
    
    <section class="section-padding mt-4">
        <div class="container-fluid">
            <div class="row justify-content-between">
                <div class="col-lg-4">
                    <!--=======  product details slider area  =======-->
                    <div class="product-details-slider-area">
                        <div class="big-image-wrapper">
                            <div class="product-details-big-image-slider-wrapper slider-for" data-autoplay="false"
                                data-nav="false">
                                <div class="single-image">
                                    <img :src="detailProduct.imgUrl" alt="slider">
                                </div>
                                <!-- <div class="single-image">
                                    <img src="assets/img/product/product-2.png" alt="slider">
                                </div>
                                <div class="single-image">
                                    <img src="assets/img/product/product-3.png" alt="slider">
                                </div>
                                <div class="single-image">
                                    <img src="assets/img/product/product-4.png" alt="slider">
                                </div>
                                <div class="single-image">
                                    <img src="assets/img/product/product-5.png" alt="slider">
                                </div>
                                <div class="single-image">
                                    <img src="assets/img/product/product-6.png" alt="slider">
                                </div> -->
                            </div>
                            <!-- <div class="slider-nav product-details-small-image-slider-wrapper" data-slides-to-show="3"
                                data-autoplay="false" data-slick-center-mode="true" data-nav="false">
                                <div class="single-image">
                                    <img src="assets/img/product/product-1.png" alt="slider">
                                </div>
                                <div class="single-image">
                                    <img src="assets/img/product/product-2.png" alt="slider">
                                </div>
                                <div class="single-image">
                                    <img src="assets/img/product/product-3.png" alt="slider">
                                </div>
                                <div class="single-image">
                                    <img src="assets/img/product/product-4.png" alt="slider">
                                </div>
                                <div class="single-image">
                                    <img src="assets/img/product/product-5.png" alt="slider">
                                </div>
                                <div class="single-image">
                                    <img src="assets/img/product/product-6.png" alt="slider">
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <!--======= End of product details slider area =======-->
                </div>
                <div class="col-lg-8 mt-4">
                    <div class="row pl-lg-3">
                        <div class="col-lg-7">
                            <div class="single-product-content-description">
                                <!-- <p class="single-info">Brands <a href="category.html">BrandName</a> </p> -->
                                <h4 class="product-title">{{ detailProduct.name }}</h4>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <span class="review-count ml-3">4.5 (2,213)</span>
                                </div>
                                <p class="single-grid-product__price"><span class="discounted-price">{{ detailProduct.price }} VND</span> 
                                    <!-- <span
                                        class="main-price discounted">₹1699</span> -->
                                    </p>

                                <div class="single-info">
                                    <span class="d-block text-muted mb-2"><strong>SKU :</strong> {{ detailProduct.skuCode }}</span>
                                    <span class="d-block text-muted mb-2"><strong>DrugType :</strong> {{ detailProduct.drugType }}
                                        </span>
                                        <span class="d-block text-muted mb-2"><strong>DiseaseType :</strong> {{ detailProduct.diseaseType }}
                                        </span>

                                    <span class="d-block text-muted mb-2"><strong>Availability :</strong> In
                                        Stock</span>
                                </div>

                                <div class="varient mt-4">
                                    <h6 class="font-weight-bold text-dark mb-3">
                                        Product Varient
                                    </h6>
                                    <div class="row box-checkbox">
                                        <label v-for="item,index in inventoryProduct" v-bind:key="index" tabindex="0">
                                            <input tabindex="-1" type="checkbox" class="checkbox" @change="boxCheck(item,$event)"/>
                                            <div class="icon-box">
                                                <div class="label">{{ item.packType }}</div>
                                                <span class="value">{{ item.price }} VND</span>
                                            </div>
                                        </label>
                                        <!-- <label tabindex="0">
                                            <input tabindex="-1" type="checkbox" id="c" value="d" class="checkbox" @change="boxCheck"/>
                                            <div class="icon-box">
                                                <div class="label">997g</div>
                                                <span class="value">₹999</span>
                                            </div>
                                        </label> -->
                                    </div>
                                </div>

                                <div class="product-actions my-4 justify-content-between">
                                    <!-- Quantity -->
                                    <div class="qty-input btn">
                                        <i class="less">-</i>
                                        <input type="text" id="quantityProduct" value="1" />
                                        <i class="more">+</i>
                                    </div>
                                    <!-- End Quantity -->
                                    <div class="product-buttons ml-0 ml-md-3 mt-4 mt-md-0 text-md-left text-center">
                                        <a class="btn btn-rounded btn-soft-primary mr-2" href="wishlist.html"> <i
                                                class="fa fa-heart"></i> Add To Wishlist</a>
                                        <!-- <a class="btn btn-rounded btn-primary" href="cart.html"> <i
                                                class="fa fa-shopping-cart"></i> Add To Cart</a> -->
                                    </div>

                                </div>
                                <div class="mb-4">
                                    <div @click="placeOrder()"
                                        class="btn btn-block btn-primary btn-pill transition-3d-hover">Buy
                                        Now</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 mt-4 mt-lg-0">
                            <div class="bg-light p-3">
                                <h6>Delivery Options</h6>
                                <div class="media align-items-center">
                                    <span class="mr-2">
                                        <i class="ti-check text-primary small"></i>
                                    </span>
                                    <div class="media-body text-body small">
                                        <span class="font-weight-bold mr-1">Free Shipping</span>
                                    </div>
                                </div>
                                <div class="media align-items-center">
                                    <span class="mr-2">
                                        <i class="ti-check text-primary small"></i>
                                    </span>
                                    <div class="media-body text-body small">
                                        <span class="font-weight-bold mr-1"> Cash on Delivery Available</span>
                                    </div>
                                </div>
                                <div class="media align-items-center">
                                    <span class="mr-2">
                                        <i class="ti-check text-primary small"></i>
                                    </span>
                                    <div class="media-body text-body small">
                                        <span class="font-weight-bold mr-1"> 14 days Return</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <h6 class="font-weight-bold text-dark">Products highlights</h6>
                                <ul class="pl-3">
                                    <li>Comprise of WPC</li>
                                    <li>Helps in Muscle Building</li>
                                    <li>Generally Consumed With Water</li>
                                    <li>Helps to strengthen the immune system </li>
                                    <li>Supports healthy functioning of the cardiovascular system</li>
                                </ul>
                            </div>
                            <div class="mt-4">
                                <h6 class="font-weight-bold text-dark">Share on</h6>
                                <div class="social-links social-links-dark">
                                    <a href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-youtube"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-dribbble"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-behance"></i>
                                    </a>

                                </div>
                            </div>
                            <!-- <div class="form-group mt-5">
                                <h6 class="font-weight-bold text-dark">Delivery availability</h6>
                                <div class="input-group">
                                    <input type="text" class="form-control custom-location"
                                        placeholder="Delivery Pincode">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-primary text-white cursor-pointer">
                                            Check
                                        </span>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--=======  product description review   =======-->
        <div class="product-full-description">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="entry-product-section-heading">Description</h3>
                        <p> {{ detailProduct.description }}
                            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur culpa
                            quis aut, ex totam fugit nam consequuntur corporis deserunt quos
                            molestias temporibus sit aliquam, provident molestiae modi, rem
                            pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates
                            sunt tempore exer cum labore, delectus asperiores molestias saepe
                            consequatur totam sed. -->
                        </p>
                        <!-- <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis
                            fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa
                            massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit
                            est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere
                            nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
                            luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
                        </p> -->
                        <!-- <h3 class="entry-product-section-heading">Additional information</h3>
                        <div class="product-info-sec">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <td>Number of Servings</td>
                                        <td>33</td>
                                    </tr>
                                    <tr>
                                        <td>Serving Size</td>
                                        <td>30 g</td>
                                    </tr>
                                    <tr>
                                        <td>Protein per Serving</td>
                                        <td>12 g</td>
                                    </tr>
                                    <tr>
                                        <td>Vegetarian/Non-Vegetarian</td>
                                        <td>Vegetarian</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> -->
                        <h2 class="entry-product-section-heading"> Reviews </h2>
                        <div class="row justify-content-between">
                            <div class="col-lg-5">
                                <div class="review_content">
                                    <div class="mb-1">
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                            <i class="fa fa-star-o"></i>
                                            <span class="review-count ml-3">4.5 (2,213)</span>
                                        </div>
                                        <em>Published 54 minutes ago</em>
                                    </div>
                                    <h4>"Commpletely satisfied"</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                                        autem, distinctio hic omnis molestiae, perspiciatis deserunt labore nisi
                                        exercitationem non laudantium </p>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="review_content">
                                    <div class="mb-1">
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                            <i class="fa fa-star-o"></i>
                                            <span class="review-count ml-3">4.5 (2,213)</span>
                                        </div>
                                        <em>Published 1 day ago</em>
                                    </div>
                                    <h4>"Always the best"</h4>
                                    <p>dolor reiciendis repellat accusantium exercitationem placeat consequatur,
                                        labore laboriosam perferendis in inventore magnam excepturi.</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="row justify-content-between">
                            <div class="col-lg-5">
                                <div class="review_content">
                                    <div class="mb-1">
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                            <i class="fa fa-star-o"></i>
                                            <span class="review-count ml-3">4.5 (2,213)</span>
                                        </div>
                                        <em>Published 54 minutes ago</em>
                                    </div>
                                    <h4>"Commpletely satisfied"</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                                        autem, distinctio hic omnis molestiae, perspiciatis deserunt labore nisi
                                        exercitationem non laudantium </p>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="review_content">
                                    <div class="mb-1">
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                            <i class="fa fa-star-o"></i>
                                            <span class="review-count ml-3">4.5 (2,213)</span>
                                        </div>
                                        <em>Published 1 day ago</em>
                                    </div>
                                    <h4>"Always the best"</h4>
                                    <p>dolor reiciendis repellat accusantium exercitationem placeat consequatur,
                                        labore laboriosam perferendis in inventore magnam excepturi.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-between">
                            <div class="col-lg-5">
                                <div class="review_content">
                                    <div class="mb-1">
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                            <i class="fa fa-star-o"></i>
                                            <span class="review-count ml-3">4.5 (2,213)</span>
                                        </div>
                                        <em>Published 54 minutes ago</em>
                                    </div>
                                    <h4>"Commpletely satisfied"</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                                        autem, distinctio hic omnis molestiae, perspiciatis deserunt labore nisi
                                        exercitationem non laudantium </p>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="review_content">
                                    <div class="mb-1">
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                            <i class="fa fa-star-o"></i>
                                            <span class="review-count ml-3">4.5 (2,213)</span>
                                        </div>
                                        <em>Published 1 day ago</em>
                                    </div>
                                    <h4>"Always the best"</h4>
                                    <p>dolor reiciendis repellat accusantium exercitationem placeat consequatur,
                                        labore laboriosam perferendis in inventore magnam excepturi.</p>
                                </div>
                            </div>
                        </div> -->
                        <p class="text-right"><a href="leave-review.html" class="btn btn-primary">Leave a
                                review</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="single-row-slider-area pt-7">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 text-center mb-4">
                        <h2>Related Products</h2>
                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum
                            claram anteposuerit litterarum formas.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="slider  arrow-light slider-gap" data-slides-to-show="6" data-autoplay="true"
                            data-nav="true" data-dots="false">
                            <div v-for="item in listProduct" v-bind:key="item.id" class="product">
                                <div v-on:click="getDetailProductById(item)" class="product-img" style="cursor: pointer;">
                                    <img :src="item.imgUrl" class="" alt="">
                                </div>
                                <div class="product-info">
                                    <div class="product-rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <div class="review-count">4.5 (2,213)</div>
                                    </div>
                                    <h3>
                                        <div v-on:click="getDetailProductById(item)" style="cursor: pointer;"> {{ item.name }}</div>
                                    </h3>
                                    <div class="product-value">
                                        <div class="d-flex">
                                            <small class="regular-price">Sale </small>
                                            <div class="off-price">53% off</div>
                                        </div>
                                        <div class="current-price">{{ item.price}} VND</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import $ from 'jquery'
  import 'slick-carousel'
//   import noUiSlider from 'nouislider';
  import moment from 'moment'
  import 'select2'
  import Swal from 'sweetalert2'
export default {
    data() {
        return {
            inven: "",
        };
    },
    created() {
    this.$store.dispatch('fetchListProductForUser');
  },
    computed: {
        listProduct() {
            return this.$store.state.listProductForUser;
        },
        inventoryProduct() {
            return this.$store.state.inventoryProduct;
        },
        detailProduct() {
            let p = this.listProduct.find(p => p.id == this.$route.query.id)
            try{
                this.$store.dispatch('fetchInventoryProduct',p.skuCode) 
            } catch(err) {
                console.log(err)
            }
            return p
        }
    },
    methods: {
        getDetailProductById(item) {
            this.inven = ""
            const collection = document.getElementsByClassName("checkbox");
            for (let x of collection) {
                x.checked = false
            }
            this.$router.push({ path: '/ProductSinglePage', query: { id: item.id } }).catch(()=>{});
            window.scrollTo(0, 0)
        },
        boxCheck(item,e){
                if(e.target.checked == true) {
                    const collection = document.getElementsByClassName("checkbox");
                for (let x of collection) {
                    x.checked = false
                }
                this.inven = item
                e.target.checked = true
                } else {
                    e.target.checked = false
                    this.inven = ''
                }
        },
        placeOrder() {
            let quantity = parseInt(document.getElementById("quantityProduct").value)
            let cart = []
            let item

            if(localStorage.getItem('username').length>0) {
                if(this.inven == "") {
                Swal.fire(
                    'Error',
                    'You have to choose at least one product variant!',
                    'error'
                )
                } else {

                    if(parseInt(this.inven.quantity) >= quantity) {

                    item = {skuCode: this.inven.skuCode, price: this.inven.price, amount: quantity, packType: this.inven.packType,
                            name: this.detailProduct.name, imgUrl: this.detailProduct.imgUrl}

                    if(localStorage.getItem('cart')) {
                        cart = JSON.parse(localStorage.getItem('cart'));
                        let exists = cart.find(p => p.skuCode == item.skuCode && p.packType == item.packType)
                        // console.log(exists)
                        if(exists == undefined) { // doesn't exists yet
                        cart.push(item)
                        Swal.fire('Success','Added product to cart','success')
                        } else {
                        if(parseInt(this.inven.quantity) >= (exists.amount + item.amount) ) {
                            exists.amount += item.amount 
                            Swal.fire('Success','Added product to cart','success')
                            } else {
                            Swal.fire('Error','There are not enough products in stock!','error')
                            }     
                        }    
                        localStorage.setItem('cart', JSON.stringify(cart));
                    } else { //Chua co cart
                        cart.push(item)
                        localStorage.setItem('cart', JSON.stringify(cart));
                        Swal.fire('Success','Added product to cart','success')
                    }

                    } else {
                        Swal.fire(
                        'Error',
                        'There are not enough products in stock!',
                        'error'
                        )
                    }    
                }
            } else {
                Swal.fire(
                    'Error',
                    'You have to login!',
                    'error'
                )
            }


            // console.log(this.inven)
            //         console.log(this.detailProduct)
                    // console.log(quantity)
                    console.log(localStorage.getItem('username'))
                    // console.log(item)
                    console.log(cart)
            },
            
    },
    mounted() {
                window.scrollTo(0, 0)
        this.$store.dispatch('fetchListProductForUser').then(() => {

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
        })
    }
}
</script>

<style>
.slick-slide {
    margin: 0 1px
}
</style>