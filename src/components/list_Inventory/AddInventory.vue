<template>
    <div style="display: inline-block;">
        <button class="btn btn-primary" href="#" role="button" v-on:click="restAll()" style="position: absolute; right: 3px; top: 0;">Add to Inventory</button>
        <div v-if="toggle" class="popup">
            <div class="popup-inner">
                <form id="result-form" class="form-vertical">
                    <div class="form-group textbox boxright">
                        <label for="skuCode" class="label">SkuCode</label>
                        <div class="controls">
                            <input ref="prodSkuCode" type="text" class="form-control" name="skuCode" id="skuCode" >
                        </div>
                    </div>
                    <div class="form-group textbox">
                        <label for="quantity" class="label">Quantity</label>
                        <div class="controls">
                            <input ref="prodQuantity" type="text" class="form-control" name="quantity" id="quantity" >
                        </div>
                    </div>
                    <div class="form-group textbox boxright">
                        <label for="price" class="label">Price</label>
                        <div class="controls">
                            <input ref="prodPrice" type="text" class="form-control" name="price" id="price">
                        </div>
                    </div>
                    <div class="form-group textbox">
                        <label for="packType" class="label">PackType</label>
                        <div class="controls">
                            <select ref="prodPackType" name="packType" id="packType" class="form-control"> 
                                <option v-for="item in listPackType" v-bind:key="item" :value=item >{{ item }}</option> 
                            </select>
                        </div>
                    </div>
                    <div style="margin-top: 15px;">
                        <button type="button" class="btn btn-danger" style="color: white; float: right;" v-on:click="closeDetail()">Close</button>
                        <button v-on:click="addInventory()" type="button" id="btnsubmit" class="btn btn-primary "  style="margin-right: 15px; float: right;">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// import { VueEditor } from "vue2-editor";
import Swal from 'sweetalert2'
    export default {
        props: {
            orderInfo: Object,
        },
        data() {
            return {
                toggle: false,
                inventory: new Object(),
                listPackType: [
                'HỘP','VỈ','TUÝP','GÓI'
                ],
            }
        },
        methods: {
            restAll: function() {
                this.toggle = true; 
            },
            addInventory: function(){
                this.inventory = new Object({
                        skuCode: this.$refs.prodSkuCode.value,
                        quantity: this.$refs.prodQuantity.value,
                        price: parseInt(this.$refs.prodPrice.value),
                        packType: this.$refs.prodPackType.value,
                    })
                if (this.inventory.skuCode.length>0&&this.inventory.quantity.length>0&&this.inventory.price>0) {
                            this.$store.dispatch('fetchAddInventory',{ inventory: this.inventory});
                            this.toggle = false; 
                } else {
                    Swal.fire(
                        'Warning',
                        'Please fill all fields correctly!',
                        'warning'
                        )
                }
            },
            closeDetail: function(){
                this.toggle = false; 
                this.$store.dispatch('fetchListInventory');
            },
        }, 
    }
</script>

<style lang="scss" scoped>
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
	padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 15px;
    width: 900px;
    border-radius: 1%;
}
.label {
    color: black;
    font-weight: bold;
    text-align: left;
}
.textbox {
    margin-top: 15px;
    display: inline-block;
    width: 45%;
}
.boxright {
    margin-right: 10%;
}
</style>