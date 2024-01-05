<template>
  <div>
    <div class="slider" data-autoplay="true" data-autoplay-speed="4000">
        <router-link to="/CategoryPage">
            <img src="assets/img/slider/slider-1.svg" alt="">
        </router-link>
        <router-link to="/CategoryPage">
            <img src="assets/img/slider/slider-2.jpg" alt="">
        </router-link>
        <router-link to="/CategoryPage">
            <img src="assets/img/slider/slider-3.jpg" alt="">
        </router-link>
    </div>

    <!-- //category -->
    <div class="pt-5">
        <div class="container-fluid theme-container">
            <div class="slider  arrow-light slider-gap" data-slides-to-show="4" data-autoplay="true" data-nav="true"
                data-dots="false">
                <div class="product-categories-grid">
                    <div class="product-img">
                        <img src="assets/img/category/category-1.png" class="" alt="">
                        <div class="cat-info">
                            <h5 class="cat-name">
                                Tetanus Injection
                            </h5>
                            <a href="" class="cat-link">
                                View All <i class="ti-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-categories-grid">
                    <div class="product-img">
                        <img src="assets/img/category/category-2.png" class="" alt="">
                        <div class="cat-info">
                            <h5 class="cat-name">
                                Darjeeling Teas
                            </h5>
                            <a href="" class="cat-link">
                                View All <i class="ti-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-categories-grid">
                    <div class="product-img">
                        <img src="assets/img/category/category-3.png" class="" alt="">
                        <div class="cat-info">
                            <h5 class="cat-name">
                                Whey Protein
                            </h5>
                            <a href="" class="cat-link">
                                View All <i class="ti-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-categories-grid">
                    <div class="product-img">
                        <img src="assets/img/category/category-4.png" class="" alt="">
                        <div class="cat-info">
                            <h5 class="cat-name">
                                Sport Nutrition
                            </h5>
                            <a href="" class="cat-link">
                                View All <i class="ti-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-categories-grid">
                    <div class="product-img">
                        <img src="assets/img/category/category-5.png" class="" alt="">
                        <div class="cat-info">
                            <h5 class="cat-name">
                                Covid Masks
                            </h5>
                            <a href="" class="cat-link">
                                View All <i class="ti-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-categories-grid">
                    <div class="product-img">
                        <img src="assets/img/category/category-6.png" class="" alt="">
                        <div class="cat-info">
                            <h5 class="cat-name">
                                Beauty Serum
                            </h5>
                            <a href="" class="cat-link">
                                View All <i class="ti-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-categories-grid">
                    <div class="product-img">
                        <img src="assets/img/category/category-7.png" class="" alt="">
                        <div class="cat-info">
                            <h5 class="cat-name">
                                Natural Cream
                            </h5>
                            <a href="" class="cat-link">
                                View All <i class="ti-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-categories-grid">
                    <div class="product-img">
                        <img src="assets/img/category/category-8.png" class="" alt="">
                        <div class="cat-info">
                            <h5 class="cat-name">
                                Hand Sanitizer
                            </h5>
                            <a href="" class="cat-link">
                                View All <i class="ti-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- //product slider -->
    <div class="pt-5">
        <div class="container-fluid theme-container">
            <div class="row mb-4">
                <div class="col">
                    <h5 class="product-heading">Flash deals</h5>
                </div>
                <div class="col-auto text-md-right">
                    <router-link to="/CategoryPage" class="btn btn-primary btn-sm product-heading-btn">See All</router-link>
                </div>
            </div>
            <div class="slider  arrow-light slider-gap" data-slides-to-show="6" data-autoplay="true" data-nav="true"
                data-dots="false">
                <div class="product" v-for="item in listProduct" v-bind:key="item.id">
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

    <!-- //Offer-->
    <div class="pt-5">
        <div class="offers-list bg-light py-5 offers-grid-2">
            <div class="container">
                <ul>
                    <li>
                        <div class="offer-image">
                            <img src="assets/img/offer/offer-1.png" alt="">
                        </div>
                        <div class="offer-info">
                            <h2 class="offer-title">
                                True Basics Flat 10% off
                            </h2>
                            <p class="offer-subtitle">
                                Clinically Researched Essentials
                            </p>
                            <router-link to="/CategoryPage" class="btn btn-primary btn-sm">Shop now</router-link>
                        </div>
                    </li>
                    <li>
                        <div class="offer-image">
                            <img src="assets/img/offer/offer-2.png" alt="">
                        </div>
                        <div class="offer-info">
                            <h2 class="offer-title">
                                True Basics Flat 10% off
                            </h2>
                            <p class="offer-subtitle">
                                Clinically Researched Essentials
                            </p>
                            <router-link to="/CategoryPage" class="btn btn-primary btn-sm">Shop now</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- //product Grid -->
    <div class="pt-5">
        <div class="container-fluid theme-container">
            <div class="row mb-4">
                <div class="col">
                    <h5 class="product-heading">Deals of the day</h5>
                </div>
                <div class="col-auto text-md-right">
                    <router-link to="/CategoryPage" class="btn btn-primary btn-sm product-heading-btn">See All</router-link>
                </div>
            </div>
            <div class="row">
                <div v-for="item in listProduct.slice(0, 12)" v-bind:key="item.id" class="col-md-2 col-sm-4 col-6">
                    <div class="product">
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

    <!-- //brand -->
    <!-- <div class="pt-5">
        <div class="py-5 bg-light">
            <div class="container-fluid theme-container">
                <div class="row mb-2">
                    <div class="col">
                        <h5 class="product-heading">Popular brands</h5>
                    </div>
                    <div class="col-auto text-md-right">
                        <a href="" class="btn btn-primary btn-sm product-heading-btn">See All</a>
                    </div>
                </div>
                <div class="slider arrow-light slider-gap" data-slides-to-show="8" data-autoplay="true" data-nav="true"
                    data-dots="false">
                    <div class="product-brand">
                        <a href="" class="product-img">
                            <img src="assets/img/brand/brand-1.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Summer Essentials
                        </a>
                    </div>
                    <div class="product-brand">
                        <a href="" class="product-img">
                            <img src="assets/img/brand/brand-2.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                    <div class="product-brand">
                        <a href="" class="product-img">
                            <img src="assets/img/brand/brand-3.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Summer Essentials
                        </a>
                    </div>
                    <div class="product-brand">
                        <a href="" class="product-img">
                            <img src="assets/img/brand/brand-4.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                    <div class="product-brand">
                        <a href="" class="product-img">
                            <img src="assets/img/brand/brand-5.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Summer Essentials
                        </a>
                    </div>
                    <div class="product-brand">
                        <a href="" class="product-img">
                            <img src="assets/img/brand/brand-6.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                    <div class="product-brand">
                        <a href="" class="product-img">
                            <img src="assets/img/brand/brand-7.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                    <div class="product-brand">
                        <a href="" class="product-img">
                            <img src="assets/img/brand/brand-8.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                    <div class="product-brand">
                        <a href="" class="product-img">
                            <img src="assets/img/brand/brand-9.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="py-5">
        <div class="container-fluid theme-container">
            <div class="row mb-4">
                <div class="col">
                    <h5 class="product-heading">Flash deals</h5>
                </div>
                <div class="col-auto text-md-right">
                    <a href="" class="btn btn-primary btn-sm product-heading-btn">See All</a>
                </div>
            </div>
            <div class="slider  arrow-light slider-gap" data-slides-to-show="6" data-autoplay="true" data-nav="true"
                data-dots="false">
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-1.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-2.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-3.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-4.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-5.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-6.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-7.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- //categories -->
    <!-- <div class="pt-5">
        <div class="py-5 bg-light">
            <div class="container-fluid theme-container">
                <div class="row mb-2">
                    <div class="col">
                        <h5 class="product-heading">Popular Category</h5>
                    </div>
                    <div class="col-auto text-md-right">
                        <a href="" class="btn btn-primary btn-sm product-heading-btn">See All</a>
                    </div>
                </div>
                <div class="slider  arrow-light slider-gap" data-slides-to-show="8" data-autoplay="true" data-nav="true"
                    data-dots="false">
                    <div class="product-categories">
                        <a href="" class="product-img bg-white">
                            <img src="assets/img/category/category-1.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Summer Essentials
                        </a>
                    </div>
                    <div class="product-categories">
                        <a href="" class="product-img bg-white">
                            <img src="assets/img/category/category-2.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                    <div class="product-categories">
                        <a href="" class="product-img bg-white">
                            <img src="assets/img/category/category-3.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Summer Essentials
                        </a>
                    </div>
                    <div class="product-categories">
                        <a href="" class="product-img bg-white">
                            <img src="assets/img/category/category-4.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                    <div class="product-categories">
                        <a href="" class="product-img bg-white">
                            <img src="assets/img/category/category-5.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Summer Essentials
                        </a>
                    </div>
                    <div class="product-categories">
                        <a href="" class="product-img bg-white">
                            <img src="assets/img/category/category-6.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                    <div class="product-categories">
                        <a href="" class="product-img bg-white">
                            <img src="assets/img/category/category-7.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                    <div class="product-categories">
                        <a href="" class="product-img bg-white">
                            <img src="assets/img/category/category-1.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                    <div class="product-categories">
                        <a href="" class="product-img bg-white">
                            <img src="assets/img/category/category-2.png" class="" alt="">
                        </a>
                        <a href="" class="product-info">
                            Healthcare Devices
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pt-5">
        <div class="container-fluid theme-container">
            <div class="row mb-4">
                <div class="col">
                    <h5 class="product-heading">Flash deals</h5>
                </div>
                <div class="col-auto text-md-right">
                    <a href="" class="btn btn-primary btn-sm product-heading-btn">See All</a>
                </div>
            </div>
            <div class="slider  arrow-light slider-gap" data-slides-to-show="6" data-autoplay="true" data-nav="true"
                data-dots="false">
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-1.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-2.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-3.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-4.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-5.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-6.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a href="product-single.html" class="product-img">
                        <img src="assets/img/product/product-7.png" class="" alt="">
                    </a>
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
                            <a href="product-single.html"> TruRadix Curcumin Oral Strip Orange Mango</a>
                        </h3>
                        <div class="product-value">
                            <div class="d-flex">
                                <small class="regular-price">MRP <del>₹250.99</del></small>
                                <div class="off-price">53% off</div>
                            </div>
                            <div class="current-price">₹237.99</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'slick-carousel'
  import noUiSlider from 'nouislider';
  import moment from 'moment'
  import 'select2'

export default {
    computed: {
    listProduct() {
      return this.$store.state.listProductForUser;
        }
    },
    created() {
    this.$store.dispatch('fetchListProductForUser');
  },
  methods: {
    getDetailProductById(item) {
        this.$router.push({ path: '/ProductSinglePage', query: { id: item.id } })
    },
  },
    mounted() {
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
    if ($('.range-slider').length > 0) {
        var nonLinearSlider = $('.range-slider');
        var startMin = parseInt(nonLinearSlider.data('start-min'));
        var startMax = parseInt(nonLinearSlider.data('start-max'));
        var min = parseInt(nonLinearSlider.data('min'));
        var max = parseInt(nonLinearSlider.data('max'));
        var step = parseInt(nonLinearSlider.data('step'));

        var slider = document.getElementById('nouislider');

        noUiSlider.create(slider, {
            connect: true,
            behaviour: 'tap',
            'step': step,
            start: [startMin, startMax],
            tooltips: [true, true],
            range: {
                'min': [min],
                'max': [max]
            },
            pips: {
                mode: 'positions',
                values: [0, 25, 50, 75, 100],
                density: 3
            }
        });
    }
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

</style>