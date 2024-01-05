<template>
  <div>
    <main>
        <div class="accounnt_header">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-auto col-12 order-md-2">
                        <nav aria-label="breadcrumb">
                            <!-- <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a class="text-nowrap" href="index.html"><i class="fa fa-home mr-2"></i>Home</a>
                                </li>
                                <li class="breadcrumb-item text-nowrap"><a href="account.html">Account</a>
                                </li>
                                <li class="breadcrumb-item text-nowrap active" aria-current="page">Order</li>
                            </ol> -->
                        </nav>
                    </div>
                    <div class="order-md-1 text-center text-md-left col-lg col-12">
                        <h1 class="h3 mb-0">Orders</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="accounnt_body">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-4 col-md-4 col-12">
                        <nav class="navbar navbar-expand-md mb-4 mb-lg-0 sidenav">
                            <!-- Menu -->
                            <a class="d-xl-none d-lg-none d-md-none text-inherit fw-bold" href="#">Sidebar Menu</a>
                            <!-- Button -->
                            <button class="navbar-toggler d-md-none rounded bg-primary text-light" type="button" data-toggle="collapse" data-target="#sidenav" aria-controls="sidenav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="ti-menu"></span>
                            </button>
                            <!-- Collapse navbar -->
                            <div class="collapse navbar-collapse" id="sidenav">
                                <div class="navbar-nav flex-column">
                                    <!-- List -->
                                    <div class="border-bottom">
                                        <div class="m-4">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="avater btn-soft-primary">DS</div>
                                                </div>
                                                <div class="col-auto">
                                                    <h6 class="d-block font-weight-bold mb-0">{{ this.name}}</h6>
                                                    <small class="text-muted">{{ this.email}}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled mb-0">
                                        <li class="nav-item">
                                            <router-link class="nav-link" to="/AccountPage"><i class="fa fa-user"></i> My Account</router-link>
                                        </li>
                                        <!-- <li class="nav-item">
                                            <a class="nav-link" href="change-password.html"><i class="fa fa-lock"></i> Password</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="address.html"><i class="fa fa-address-book"></i> Address</a>
                                        </li> -->
                                        <li class="nav-item active">
                                            <a class="nav-link"><i class="fa fa-shopping-cart"></i> Order</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link"><i class="fa fa-heart"></i> Wishlist</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" v-on:click="logout" style="cursor: pointer;"><i class="fa fa-sign-out"></i> Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                        <div class="ml-0 ml-md-4">
                            <div class="d-none d-md-block">
                            <div class="row mb-md-5">
                                <div class="col">
                                    <h5 class="mb-1 text-white">Orders</h5>
                                    <p class="mb-0 text-white small">
                                        You have full control to manage your own orders.
                                    </p>
                                </div>
                                <!-- <div class="col-auto">
                                    <a href="orders.html" class="btn btn-primary btn-sm"> <i class="ti-angle-left"></i> Go Back</a>
                                </div> -->
                            </div>
                            </div>
                            <div class="card">
                                <div class="table-responsive">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Order #</th>
                                                <th>Date Purchased</th>
                                                <th>Status</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in listOrder" v-bind:key="item.orderNumber">
                                                <td class="py-3"><a style="cursor: pointer;" class="nav-link-style fw-medium fs-sm" v-on:click="getDetailOrder(item.orderNumber)"  data-bs-toggle="modal">{{ item.orderNumber }}</a></td>
                                                <td class="py-3">{{ item.orderDate.split("T")[0] }}</td>
                                                <td class="py-3"><span v-bind:class="{ 'bg-soft-info': item.status=='PROCESS',
                                                    'bg-soft-danger': item.status=='CANCEL', 'bg-soft-success': item.status=='APPROVE'}"
                                                    class="badge m-0">{{ item.status }}</span></td>
                                                <td class="py-3">{{ totalPrice(item) }} VND</td>
                                            </tr>
                                            <!-- <tr>
                                                <td class="py-3"><a class="nav-link-style fw-medium fs-sm" href="orders-details.html" data-bs-toggle="modal">78A643CD409</a></td>
                                                <td class="py-3">December 09, 2018</td>
                                                <td class="py-3"><span class="badge bg-soft-danger m-0">Canceled</span></td>
                                                <td class="py-3"><span>$760.50</span></td>
                                            </tr>
                                            <tr>
                                                <td class="py-3"><a class="nav-link-style fw-medium fs-sm" href="orders-details.html" data-bs-toggle="modal">112P45A90V2</a></td>
                                                <td class="py-3">October 15, 2018</td>
                                                <td class="py-3"><span class="badge bg-soft-warning m-0">Delayed</span></td>
                                                <td class="py-3">$1,264.00</td>
                                            </tr>
                                            <tr>
                                                <td class="py-3"><a class="nav-link-style fw-medium fs-sm" href="orders-details.html" data-bs-toggle="modal">28BA67U0981</a></td>
                                                <td class="py-3">July 19, 2018</td>
                                                <td class="py-3"><span class="badge bg-soft-success m-0">Delivered</span></td>
                                                <td class="py-3">$198.35</td>
                                            </tr>
                                            <tr>
                                                <td class="py-3"><a class="nav-link-style fw-medium fs-sm" href="single_order.html" data-bs-toggle="modal">502TR872W2</a></td>
                                                <td class="py-3">April 04, 2018</td>
                                                <td class="py-3"><span class="badge bg-soft-success m-0">Delivered</span></td>
                                                <td class="py-3">$2,133.90</td>
                                            </tr>
                                            <tr>
                                                <td class="py-3"><a class="nav-link-style fw-medium fs-sm" href="orders-details.html" data-bs-toggle="modal">47H76G09F33</a></td>
                                                <td class="py-3">March 30, 2018</td>
                                                <td class="py-3"><span class="badge bg-soft-success m-0">Delivered</span></td>
                                                <td class="py-3">$86.40</td>
                                            </tr> -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
export default {
    computed: {
    listOrder() {
      return this.$store.state.listOrderForUser;
        },
        name() {
            return localStorage.getItem('username')
        },
        email() {
            return localStorage.getItem('useremail')
        },
    },
    created() {
        this.$store.dispatch('fetchListOrderForUser', localStorage.getItem('ownerId'));
    },
    methods: {
        totalPrice(order) {
            let sum = 0
                for (let index in order.items) {
                    sum += parseInt(order.items[index].price)
                }
            return sum
        },
        getDetailOrder(orderNumber) {
        this.$router.push({ path: '/OrdersDetailsPage', query: { orderNumber: orderNumber } })
        },
        logout(){
        this.$store.state.userLogined = '';
        localStorage.setItem('accessToken', '')
        localStorage.setItem('role', '')
        localStorage.setItem('username', '')
        localStorage.setItem('useremail', '')
        localStorage.setItem('id', '')
        localStorage.removeItem('cart')
        this.$router.push({ path: '/' }).catch(()=>{window.location.reload();})
        window.location.reload();
        },
    }
}
</script>

<style>

</style>