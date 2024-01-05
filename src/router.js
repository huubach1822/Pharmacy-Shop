import Vue from "vue"
import Router from 'vue-router'

import HomePage from './components/HomePage.vue'
import CategoryPage from './components/CategoryPage.vue'
import AccountPage from './components/AccountPage.vue'
import CartPage from './components/CartPage.vue'
import CheckOutPage from './components/CheckOutPage.vue'
import OrdersDetailsPage from './components/OrdersDetailsPage.vue'
import OrdersPage from './components/OrdersPage.vue'
import ProductSinglePage from './components/ProductSinglePage.vue'
import ThankYouPage from './components/ThankYouPage.vue'

import ListProduct from './components/list_Product/ListProduct.vue'
import ListOrder from './components/list_Order/ListOrder.vue'
import ListInventory from './components/list_Inventory/ListInventory.vue'


Vue.use(Router)

export default new Router({ 
    routes: [

            { path: '/', component: HomePage },
            { path: '/CategoryPage', component: CategoryPage },
            { path: '/AccountPage', component: AccountPage },
            { path: '/CartPage', component: CartPage },
            { path: '/CheckOutPage', component: CheckOutPage },
            { path: '/OrdersDetailsPage', component: OrdersDetailsPage },
            { path: '/OrdersPage', component: OrdersPage },
            { path: '/ProductSinglePage', component: ProductSinglePage },
            { path: '/ThankYouPage', component: ThankYouPage },

            { path: '/ListProduct', component: ListProduct },
            { path: '/ListOrder', component: ListOrder },
            { path: '/ListInventory', component: ListInventory },

    ]
})
