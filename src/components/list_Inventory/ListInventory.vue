<template >
    <div>
        <h2>List Inventory</h2>
        <hr>
        <div>
            <div class="tableFixHead" style="height: 550px; width: 1200px; overflow-y: scroll; position: relative; margin-bottom: 20px;">
                <table class="table table-striped table-dark text-white table-hover" style="margin-bottom: 0;">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>skuCode</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>packType</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in listInventory" v-bind:key="item.id">

                            <td>{{ item.id }} </td>
                            <td>{{ item.skuCode }}</td>
                            <td>{{item.quantity}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.packType}}</td>
                            <!-- <td style="width: 200px; padding: auto;">
                                <DetailProduct v-bind:item=item></DetailProduct>
                                <button v-on:click="deleteProduct(item.id)" class="btn btn-danger" role="button" style="color: white; margin-left: 15px;">Delete</button>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style=" display: flex; justify-content: center; width: 100%; position: relative;">
                    <AddInventory></AddInventory>
            </div>
        </div>
    </div>
</template>

<script>

// import DetailProduct from './DetailProduct.vue';
import AddInventory from './AddInventory.vue';
// import Swal from 'sweetalert2'

export default {
    computed:{
        listInventory() {
            return this.$store.state.listInventory
        },
    },
    created(){
        this.$store.dispatch('fetchListInventory');
    },
    components: {
        // DetailProduct,
        AddInventory,
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