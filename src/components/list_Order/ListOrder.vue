<template>
    <div>
        <!-- <div class="form-group has-search" style="width: 250px; position: absolute; top: 50px; right: 240px;">
            <span class="fa fa-search form-control-feedback"></span>
            <input v-model="search" type="text" class="form-control" placeholder="Search" style="border: 2px solid #808080;">
        </div> -->
        <h2 style="display: inline-block;">List Order</h2>
        <!-- <div style="display: inline-block; float: right; position: absolute; top: 20px; right: 60px;">
            <div style="font-size: 18px; font-weight: bold;">Filter by</div>

            <input id="toggle-on" class="toggle toggle-left" name="toggle" value="false" type="radio" checked v-on:change="waitingOder()" ref="wait">
            <label for="toggle-on" class="btn1">Waiting</label>
            <input id="toggle-off" class="toggle toggle-right" name="toggle" value="true" type="radio" v-on:change="completedOder()" ref="comp">
            <label for="toggle-off" class="btn1">Completed</label>

        </div> -->

        <hr>
        <div class="table-responsive">
            <div class="tableFixHead" style="max-height: 550px; width: 1200px; overflow-y: scroll; position: relative; margin-bottom: 20px;">
                <table class="table table-striped table-dark text-white table-hover" style="margin-bottom: 0;">
                    <thead>
                        <tr>
                            <th class="headerLstOrder">Id</th>
                            <th class="headerLstOrder">orderNumber</th>
                            <th class="headerLstOrder">status</th>
                            <th class="headerLstOrder">orderDate</th>
                            <!-- <th class="headerLstOrder">Employee</th> -->
                            <!-- <th class="headerLstOrder">Status</th> -->
                            <!-- <th class="headerLstOrder"></th>-->
                            <th class="headerLstOrder"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in listOrder" v-bind:key="item.id">
                            <td>{{item.id}}</td>
                            <td>
                                <h6>{{item.orderNumber}}</h6>
                            </td>
                            <td>{{item.status}}</td>
                            <td>{{item.orderDate.split("T")[0]}}</td>
                            <!-- <td>{{item.userId}}</td> -->
                            <!-- <td>{{item.owner.name}}</td> -->
                            <!-- <td>{{item.status}}</td> -->
                            <td>
                                <DetailOrder v-bind:orderInfo=item></DetailOrder>
                            </td>
                            <!-- <td>
                                <button v-if="item.status=='PROCESS'" v-on:click="confirmOrder(item.id)" class="btn btn-danger" role="button" style="color: white; display: inline-block; float: right;">Cancel</button>
                                <button v-if="item.status=='PROCESS'" v-on:click="confirmOrder(item.id)" class="btn btn-primary" role="button" style="color: white; display: inline-block; float: right; margin-right: 20px;">Confirm</button>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import DetailOrder from './DetailOrder.vue';
    export default {
        data() {
            return {
                toggle: true,
                search: ""
            }
        },
        computed:{
            listOrder() {
                return this.$store.state.listOrder
            }
        },
        created(){
            this.$store.dispatch('fetchListOrder');
            this.$store.dispatch('fetchListProduct')
        },
        components: {
            DetailOrder,
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
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
.headerLstOrder {
    position: sticky;
    top: 0;
    background-color: #343A40;
    border: none;
}

.btn1{
    border: 3px solid #43494E;
    display: inline-block;
    padding: 5px;
    position: relative;
    text-align: center;
    transition: background 600ms ease, color 600ms ease;
}

input[type="radio"].toggle {
    display: none;
    & + label{
        cursor: pointer;
        width: 85px;
        height: 40px;
        &:hover{
            background: none;
            color: #43494E;
        }
        &:after{
            background: #43494E;
            content: "";
            height: 100%;
            position: absolute;
            top: 0;
            transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
            width: 100%;
            z-index: -1;
        }
    }
    &.toggle-left + label {
        border-right: 0;
        &:after{
            left: 100%
        }
    }
    &.toggle-right + label{
        margin-left: -3px;
        &:after{
            left: -100%;
        }
    }
    &:checked + label {
        cursor: default;
        color: #fff;
        transition: color 200ms;
        &:after{
            left: 0;
        }
    }
}

</style>