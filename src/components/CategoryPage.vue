<template>
  <div>
    <main>
        <section class="pt-5 pt-md-7">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-8 order-md-2">
                        <div class="row shop-header align-items-center">
                            <div class="col-lg-6">
                                <div class="grid-icons">
                                    <!-- <button class="three-column active"></button>
                                    <button class="four-column d-none d-lg-block"></button>
                                    <button class="five-column d-none d-lg-block"></button>
                                    <button class="list-view"></button> -->
                                </div>
                            </div>
            
                            <div class="col-lg-6 text-lg-right">
            
                                <div class="single-select-block d-inline-block">
                                    <span class="select-title">Show:</span>
                                    <select class="wide border-0">
                                        <option value="1">10</option>
                                        <option value="2">20</option>
                                        <option value="3">30</option>
                                        <option value="4">40</option>
                                    </select>
                                </div>
            
                                <div class="single-select-block d-inline-block">
                                    <span class="select-title">Sort By:</span>
                                    <select class="wide border-0">
                                        <option value="1">Default</option>
                                        <option value="2">Name (A-Z)</option>
                                        <option value="3">Price (min - max)</option>
                                        <option value="4">Color</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div v-for="item in listProduct" v-bind:key="item.id" class="col-md-4 col-sm-6 col-12">
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
                                            <div v-on:click="getDetailProductById(item)" style="cursor: pointer;">
                                                {{ item.name }}
                                            </div>
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
                            <!-- <div class="col-md-4 col-sm-6 col-12">
                                <div class="product">
                                    <a href="product-single.html" class="product-img">
                                        <span class="onsale">Sale!</span>
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
                                            <a href="product-single.html">Goodlife Nutrition Immunity Boosting
                                                Complex
                                                Capsule</a>
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
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-3 order-md-1">
                        <div class="sidebar-wrapper mt-5 mt-md-0">
                            <div class="sidebar-widget widget_categories">
                                <h6 class="widget-title">Drug Type</h6>
                                <ul class="widget-list widget-filter-list list-unstyled pt-1" style=""
                                    data-simplebar data-simplebar-auto-hide="false">
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input drugtype" type="checkbox" id="brand-1" value="KHANGSINH" @change="drugtypeCheck">
                                            <label class="form-check-label widget-filter-item-text" for="brand-1">KHANGSINH</label>
                                        </div>
                                        <!-- <span class="fs-xs text-muted">425</span> -->
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input drugtype" type="checkbox" id="brand-2" value="TPCN" @change="drugtypeCheck">
                                            <label class="form-check-label widget-filter-item-text" for="brand-2">TPCN</label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input drugtype" type="checkbox" id="Brandina" value="GIAMDAU" @change="drugtypeCheck">
                                            <label class="form-check-label widget-filter-item-text"
                                                for="Brandina">GIAMDAU</label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input drugtype" type="checkbox" id="Belleaeis" value="HASOT" @change="drugtypeCheck">
                                            <label class="form-check-label widget-filter-item-text"
                                                for="Belleaeis">HASOT
                                            </label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input drugtype" type="checkbox" id="bilabong" value="DADAY" @change="drugtypeCheck">
                                            <label class="form-check-label widget-filter-item-text"
                                                for="bilabong">DADAY</label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input drugtype" type="checkbox" id="birkenstock" value="XUONGKHOP" @change="drugtypeCheck">
                                            <label class="form-check-label widget-filter-item-text"
                                                for="birkenstock">XUONGKHOP</label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input drugtype" type="checkbox" id="klein" value="KHAC" @change="drugtypeCheck">
                                            <label class="form-check-label widget-filter-item-text" for="klein">KHAC</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- <div class="sidebar-wrapper mt-5 mt-md-0">
                            <div class="sidebar-widget widget_categories">
                                <h6 class="widget-title mb-2">Price
                                </h6>
                               <div class="px-3">
                                <div class="range-slider range-slider-ui" id="nouislider" data-start-min="250" data-start-max="680" data-min="0"
                                data-max="1000" data-step="1">
                            </div>
                               </div>
                            </div>
                        </div> -->
                        <div class="sidebar-wrapper mt-5 mt-md-0">
                            <div class="sidebar-widget widget_categories">
                                <h6 class="widget-title">Disease Type</h6>
                                <ul class="widget-list widget-filter-list list-unstyled pt-1" style=""
                                    data-simplebar data-simplebar-auto-hide="false">
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input diseasetype" type="checkbox" id="brand-1" value="OMSOT" @change="diseasetypeCheck">
                                            <label class="form-check-label widget-filter-item-text" for="brand-1">OMSOT</label>
                                        </div>
                                        <!-- <span class="fs-xs text-muted">425</span> -->
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input diseasetype" type="checkbox" id="brand-2" value="BENHMAT" @change="diseasetypeCheck">
                                            <label class="form-check-label widget-filter-item-text" for="brand-2">BENHMAT</label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input diseasetype" type="checkbox" id="Brandina" value="VIEM" @change="diseasetypeCheck">
                                            <label class="form-check-label widget-filter-item-text"
                                                for="Brandina">VIEM</label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input diseasetype" type="checkbox" id="Belleaeis" value="DIUNG" @change="diseasetypeCheck">
                                            <label class="form-check-label widget-filter-item-text"
                                                for="Belleaeis">DIUNG
                                            </label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input diseasetype" type="checkbox" id="bilabong" value="TRI" @change="diseasetypeCheck">
                                            <label class="form-check-label widget-filter-item-text"
                                                for="bilabong">TRI</label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input diseasetype" type="checkbox" id="birkenstock" value="TAOBON" @change="diseasetypeCheck">
                                            <label class="form-check-label widget-filter-item-text"
                                                for="birkenstock">TAOBON</label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input diseasetype" type="checkbox" id="klein" value="TIEUCHAY" @change="diseasetypeCheck">
                                            <label class="form-check-label widget-filter-item-text" for="klein">TIEUCHAY</label>
                                        </div>
                                    </li>
                                    <li
                                        class="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div class="form-check">
                                            <input class="form-check-input diseasetype" type="checkbox" id="klein" value="KHAC" @change="diseasetypeCheck">
                                            <label class="form-check-label widget-filter-item-text" for="klein">KHAC</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="btn btn-primary btn-sm" style="float: right" @click="searchbtn()">Search</div>
                    </div>
                </div>
            </div>
        </section>
    </main>

  </div>
</template>

<script>
//   import $ from 'jquery'
//   import 'slick-carousel'
//   import noUiSlider from 'nouislider';
//   import moment from 'moment'
//   import 'select2'

export default {
    computed: {
    listProduct() {
      return this.$store.state.listProductForUser;
        }
    },
    created() {
    this.$store.dispatch('fetchListProductForUserWithCategory')
  },
  methods: {
    getDetailProductById(item) {
    this.$router.push({ path: '/ProductSinglePage', query: { id: item.id } })
    },
    drugtypeCheck(e){
        if(e.target.checked == true) {
            const collection = document.getElementsByClassName("drugtype");
        for (let x of collection) {
            x.checked = false
        }
        this.$store.state.drugType = e.target.value
        e.target.checked = true
        console.log(this.$store.state.drugType)
        } else {
            e.target.checked = false
            this.$store.state.drugType = ""
        }
    },
    diseasetypeCheck(e){
        if(e.target.checked == true) {
            const collection = document.getElementsByClassName("diseasetype");
        for (let x of collection) {
            x.checked = false
        }
        this.$store.state.diseaseType = e.target.value
        e.target.checked = true
        console.log(this.$store.state.diseaseType)
        } else {
            e.target.checked = false
            this.$store.state.diseaseType = ""
        }
    },
    searchbtn() {
        let flag1 = false
        const collection1 = document.getElementsByClassName("drugtype");
        for (let x of collection1) {
            if ( x.checked == true) {
                flag1 = true
            }
        }
        if (flag1 == false) {
            this.$store.state.drugType = ""
        }
        let flag2 = false
        const collection2 = document.getElementsByClassName("diseasetype");
        for (let x of collection2) {
            if ( x.checked == true) {
                flag2 = true
            }
        }
        if (flag2 == false) {
            this.$store.state.diseaseType = ""
        }
        window.scrollTo(0, 0)
        this.$store.dispatch('fetchListProductForUserWithCategory');
    }
  },

}
</script>

<style>

</style>