<template >
    <div>
        <h2>List Product</h2>
        <hr>
        <div>
            <div class="tableFixHead" style="height: 550px; width: 1200px; overflow-y: scroll; position: relative; margin-bottom: 20px;">
                <table class="table table-striped table-dark text-white table-hover" style="margin-bottom: 0;">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>img</th>
                            <th>description</th>
                            <th>price</th>
                            <th>skuCode</th>
                            <th>drugType</th>
                            <th>diseaseType</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in listProduct" v-bind:key="item.id">

                            <td>{{ item.name }} </td>
                            <td><img :src="item.imgUrl" width="100px" height="100px"></td>
                            <td>{{ item.description }}</td>
                            <td>{{item.price}} VND</td>
                            <td>{{item.skuCode}}</td>
                            <td>{{item.drugType}}</td>
                            <td>{{item.diseaseType}}</td>
                            <!-- <td style="width: 200px; padding: auto;">
                                <DetailProduct v-bind:item=item></DetailProduct>
                                <button v-on:click="deleteProduct(item.id)" class="btn btn-danger" role="button" style="color: white; margin-left: 15px;">Delete</button>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style=" display: flex; justify-content: center; width: 100%; position: relative;">
                    <AddProduct></AddProduct>
            </div>
        </div>
    </div>
</template>

<script>

import AddProduct from './AddProduct.vue';
// import Swal from 'sweetalert2'

export default {
    computed:{
        listProduct() {
            return this.$store.state.listProduct
        },
    },
    created(){
        this.$store.dispatch('fetchListProduct');
    },
    components: {
        AddProduct,
    },
    
}
</script >

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Assistant');
body {
    background: #eee;
    font-family: Assistant, sans-serif
}
.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
.tableFixHead thead th {
    position: sticky;
    top: 0;
    background-color: #343A40;
    border: none;
}
</style>