<template>
    <div style="display: inline-block; color: black !important;">
        <button class="btn btn-primary" role="button" v-on:click="restAll()">Detail</button>

        <div v-if="toggle" class="popup">
            <div class="container clearfix popup-inner" style="position: relative;">
                <div style="padding-left: 10px; padding-right: 25px; position: relative;">
                    <h2 style="color: black; display: inline-block;">Order Detail</h2>
                    <!-- <div style="color: black; float: right; margin-top: 10px; font-size: 18px; font-weight: 500;">Customer: </div> -->
                </div>
            <div class="card-body">
                <div>  
                    <div class="table-responsive" style="max-height: 400px; overflow-y: auto; border: 1px solid black;">
                        <table class="table table-bordered m-0" >
                            <thead>
                            <tr >
                                <th class="text-center py-2 px-4" style="width: 200px; color: black; position: sticky; top: 0;">Product Name &amp; Details</th>
                                <th class="text-center py-2 px-4" style="width: 50px; color: black; position: sticky; top: 0;">Quantity</th>
                                <th class="text-center py-2 px-4" style="width: 50px; color: black; position: sticky; top: 0;">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                    
                            <tr v-for="item in orderInfo.orderCarts" :key="item.id">
                                <td class="p-4">
                                <div class="media align-items-center" style="display: flex;">
                                    <img :src="findProductBySkuCode(item.skuCode).imgUrl" class="ui-w-40 ui-bordered mr-4" alt=""> 
                                    <div class="media-body" style="display: inline-block; margin: auto;">
                                        <span href="#" class="d-block darktext" style="font-size: 15px; font-weight: 500;">{{ findProductBySkuCode(item.skuCode).name }}</span>
                                        <small>
                                            <span class="text-muted darktext" style="width: 110px; display: inline-block;">PackType: {{ item.packType }}</span>
                                            <!-- <span class="text-muted darktext">Category: {{ item.id }}</span> -->
                                        </small>
                                    </div>
                                </div>
                                </td>
                                <td class="text-center font-weight-semibold align-middle p-4 text-muted darktext">{{item.amount}}</td>
                                <td class="text-center font-weight-semibold align-middle p-4 text-muted darktext">{{item.price}} <br>VND</td>
                            </tr>        
                    
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- / Shopping cart table -->
            
                <div class="d-flex flex-wrap justify-content-between align-items-center" style="position: absolute; bottom: 12%; left: 6%;">

                    <div class="d-flex" style="width: 100%;">
                        <!-- <div class="text-right mr-5" style="width: 50%;">
                            <label class="text-muted font-weight-normal m-0" style="font-size: 18px; text-align: left; width: 100%;">Payment method</label>
                            <div class="text-large text-muted" style="text-align: left;"><strong style="color: black; font-size: 18px;">{{orderInfo.paymentMethod}}</strong></div>
                        </div> -->
                        <div  style="">
                            <label class="text-muted font-weight-normal m-0 darktext" style="font-size: 18px;">Total Price</label>
                            <div class="text-large text-muted darktext"><strong style="color: black; font-size: 18px;">{{totalPrice(orderInfo)}} VND</strong></div>
                        </div>
                    </div>

                    
                </div>
            
                <div v-if="this.orderInfo.status=='PROCESS'" style="position: absolute; bottom: 3%; right: 4%">
                <button type="button" class="btn btn-success mt-2" style="color: white; display: inline-block; margin-right: 15px;" v-on:click="updateOrder(1)">Confirm order</button>
                <button type="button" class="btn btn-warning mt-2" style="color: white; display: inline-block;" v-on:click="updateOrder(2)">Cancel order</button>    
                </div>

                <div style="position: absolute; top: 0; right: 0; cursor: pointer;" v-on:click="closeDetail()">
                    <div class="close"></div>
                <!-- <button type="button" class="btn btn-danger mt-2" style="color: white; float: right;" v-on:click="closeDetail()">Close</button>    -->
                </div>
            
            
            </div>

            </div>
        
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                toggle: false,
            }
        },
        props: {
            orderInfo: Object,
        },
        computed: {
        listProduct() {
            return this.$store.state.listProduct;
        }
        },
        created() {
            this.$store.dispatch('fetchListProduct')
        },
        methods: {
            restAll: function() {
            this.toggle = true; 
        },
        closeDetail: function(){
            this.toggle = false; 
            this.$store.dispatch('fetchListOrder');
            this.$store.dispatch('fetchListProduct')
        },
        findProductBySkuCode(code){
            return this.listProduct.find(p => p.skuCode == code)   
        },
        totalPrice(order) {
            let sum = 0
                for (let index in order.orderCarts) {
                    sum += parseInt(order.orderCarts[index].price)
                }
            return sum
        },
        updateOrder(statusOrder){
            this.$store.dispatch('fetchUpdateOrder',{id: this.orderInfo.id, status: statusOrder});
        }
        }
    }
</script>

<style lang="scss" scoped>

.darktext {
    color: black !important;
}

 select {
 font-family: 'FontAwesome', 'Second Font name'
 }
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.2);
	
	display: flex;
	align-items: center;
	justify-content: center;
}
.popup-inner {
	background: #FFF;
    padding: 35px;
    width: 900px;
    height: 650px;
    border-radius: 1%;
}


.text-muted{
    color: black;
    font-size: 14px;
}
.ui-w-40 {
    width: 80px !important;
    height: auto;
}

.card{
    box-shadow: 0 1px 15px 1px rgba(52,40,104,.08);
    width: 100%;    
}

// .ui-product-color {
//     display: inline-block;
//     overflow: hidden;
//     margin: .144em;
//     width: .875rem;
//     height: .875rem;
//     border-radius: 10rem;
//     -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;
//     box-shadow: 0 0 0 1px rgba(0,0,0,0.15) inset;
//     vertical-align: middle;
// }

th:after,
th:before {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
}

th:before {
  top: -1px;
  border-top: 1px solid black;
}

th:after {
  bottom: -1px;
  border-bottom: 2px solid black;
}

.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

</style>