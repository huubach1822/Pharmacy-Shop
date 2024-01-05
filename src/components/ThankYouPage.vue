<template>
      <section class="pt-4">
        <div class="container">
            <div class="row align-items-center mt-0 mt-md-4">
                <div class="col-sm-6 mb-4 mb-lg-0">
                    <div class="thank mb-3">
                        <span class="thank-title-top">Order placed</span>
                        <h2 class="thank-title text-dark ">Successfully</h2>
                        <p class="thank-desc">To say thank you would be an understatement, but we can’t exactly give a hug, so…thank you for your order!</p>
                    </div>
                    <router-link to="/OrdersPage" class="btn btn-primary btn-medium rounded">
                        <i class="ti-angle-left"></i> Track Your Order </router-link>
                </div>
                <div class="col-md-5 d-lg-block d-none offset-lg-1 text-md-center">
                    <img class="img-fluid" src="assets/img/thank.png" alt="thank">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>