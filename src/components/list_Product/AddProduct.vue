<template>
    <div style="display: inline-block;">
        <button class="btn btn-primary" href="#" role="button" v-on:click="restAll()" style="position: absolute; right: 3px; top: 0;">Add Product</button>
        <div v-if="toggle" class="popup">
            <div class="popup-inner">
                <form id="result-form" class="form-vertical">
                    <div class="form-group textbox boxright" style="margin-top: 5px;">
                        <label for="name" class="label">Name</label>
                        <div class="controls">
                            <input ref="prodName" type="text" class="form-control" name="name" id="name" >
                        </div>
                    </div>
                    <div class="form-group textbox" style="margin-top: 5px;">
                        <label for="id" class="label">ID</label>
                        <div class="controls">
                            <input disabled="false" value="Auto" type="text" class="form-control" name="id" id="id" >
                        </div>
                    </div>
                    <div class="form-group textbox boxright">
                        <label for="price" class="label">Price</label>
                        <div class="controls">
                            <input ref="prodPrice" type="number" class="form-control" name="price" id="price" >
                        </div>
                    </div>
                    <div class="form-group textbox">
                        <label for="description" class="label">Description</label>
                        <div class="controls">
                            <input ref="prodDescription" type="text" class="form-control" name="description" id="description" >
                        </div>
                    </div>
                    <div class="form-group textbox boxright">
                        <label for="imgurl" class="label">ImgUrl</label>
                        <div class="controls">
                            <input ref="prodImgUrl" type="text" class="form-control" name="imgurl" id="imgurl">
                        </div>
                    </div>
                    <div class="form-group textbox">
                        <label for="skuCode" class="label">SkuCode</label>
                        <div class="controls">
                            <input ref="prodSkuCode" type="text" class="form-control" name="skuCode" id="skuCode">
                        </div>
                    </div>
                    <div class="form-group textbox boxright">
                        <label for="drugType" class="label">DrugType</label>
                        <div class="controls">
                            <select ref="prodDrugType" name="drugType" id="drugType" class="form-control"> 
                                <option v-for="item in listDrugType" v-bind:key="item" :value=item >{{ item }}</option> 
                            </select>
                        </div>
                    </div>
                    <div class="form-group textbox">
                        <label for="diseaseType" class="label">DiseaseType</label>
                        <div class="controls">
                            <select ref="prodDiseaseType" name="diseaseType" id="diseaseType" class="form-control" > 
                                <option v-for="item in listDiseaseType" v-bind:key="item" :value=item >{{ item }}</option> 
                            </select>
                        </div>
                    </div>
                    <div style="margin-top: 15px;">
                        <button type="button" class="btn btn-danger" style="color: white; float: right;" v-on:click="closeDetail()">Close</button>
                        <button v-on:click="addProduct()" type="button" id="btnsubmit" class="btn btn-primary "  style="margin-right: 15px; float: right;">Submit</button>
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
                product: new Object(),
                listDrugType: [
                    'KHANGSINH','TPCN','GIAMDAU','HASOT','DADAY','XUONGKHOP','KHAC'
                ],
                listDiseaseType: [
                    'OMSOT','BENHMAT','VIEM','DIUNG','TRI','TAOBON','TIEUCHAY','KHAC'
                ],
            }
        },
        methods: {
            restAll: function() {
                this.toggle = true; 
            },
            addProduct: function(){
                this.product = new Object({
                        name: this.$refs.prodName.value,
                        description: this.$refs.prodDescription.value,
                        price: parseFloat(this.$refs.prodPrice.value),
                        imgUrl: this.$refs.prodImgUrl.value,
                        skuCode: this.$refs.prodSkuCode.value,
                        drugType: this.$refs.prodDrugType.value,
                        diseaseType: this.$refs.prodDiseaseType.value,
                    })
                if (this.product.name.length>0&&this.product.description.length>0&&this.product.price>0&&this.product.imgUrl.length>0&&
                this.product.skuCode.length>0&&this.product.drugType.length>0&&this.product.diseaseType.length>0) {
                            this.$store.dispatch('fetchAddProduct',{ product: this.product});
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
                this.$store.dispatch('fetchListProduct');
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