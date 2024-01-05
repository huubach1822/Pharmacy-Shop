import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
import router from './router'
import Swal from 'sweetalert2'
export const store = new Vuex.Store({
    state:{
        userLogined:{
            id:'',
            token:'',
            name:'',
            email:'',
            role:'',
            password:''
        },
        
        listProduct:[],
        listOrderForUser: [],
        listProductForUser: [],
        drugType: "",
        diseaseType: "",
        cart: [],
        inventoryProduct: [],
        listOrder:[],
        listInventory:[],

    },
    getters: {

    },
    mutations: {
        loginServer(state, user) {
            state.userLogined = user;
         
            console.log(state.userLogined)
            localStorage.setItem('accessToken',state.userLogined.token);
            localStorage.setItem('role',state.userLogined.role)
            localStorage.setItem('username',state.userLogined.name);
            localStorage.setItem('useremail',state.userLogined.email);
            localStorage.setItem('ownerId',state.userLogined.id);

        },
        getListProduct(state, lstProduct) {
            state.listProduct = lstProduct;
        },
        getInventoryProduct(state, inventory) {
            state.inventoryProduct = inventory;
        },
        getListProductForUser(state, lstProduct) {
            state.listProductForUser = lstProduct;
        },
        getDetailProductForUser(state, product) {
            state.detailProduct = product;
        },
        getListOrderForUser(state, lstOrder){
            state.listOrderForUser = lstOrder
        },
        getListOrder(state, lstOrder) {
            state.listOrder = lstOrder;
        },
        getListInventory(state, lstInven) {
            state.listInventory = lstInven;
        },
    },
    actions: {
        async fetchLogin(context, username, password) {
            try {
            const response = await axios.post('auth/token',
                username, password);

            context.commit('loginServer', response.data);
            if(response.data.role=="admin") {
                router.push({ path: '/ListProduct' }).then(() => { 
                    router.go() 
                })
            }
            else {
                router.push({ path: '/' }).catch(()=>{window.location.reload();})
                window.location.reload();
            }

            } catch(err) {
            Swal.fire(
                'Error',
                'Failed.',
                'error'
              )
            }
        },
        async fetchListProduct(context) {
            var response = await axios.get('api/product/relates', 
            );
            context.commit('getListProduct', response.data);
        },
        async fetchListProductForUser(context) {
            var response = await axios.get('api/product/relates', 
            );
            context.commit('getListProductForUser', response.data);
        },
        async fetchListProductForUserWithCategory(context) {
            var response;
            response = await axios.get('api/product/relates', 
            {
                params: { drugType: context.state.drugType, diseaseType: context.state.diseaseType }
            }
            );
            console.log(response.data);
            context.commit('getListProductForUser', response.data);
        },

        async fetchPlaceOrder(context,order) {
            var response;
            response = await axios.post('api/order', order,
            {
                headers: {
                    'Authorization': localStorage.getItem('accessToken')
                }
              });
            if (response.data=='Order place successfully') {
                router.push({ path: '/ThankYouPage' })
            } else {
                Swal.fire(
                    'Error',
                    response.data,
                    'error'
                  )
            }    
            
        },

        async fetchInventoryProduct(context,code) {
            var response;
            response = await axios.get('api/product/getbyskucode', 
            {
                params: { skuCode: code }
            }
            );
            console.log(response.data);
            context.commit('getInventoryProduct', response.data);
        },
        async fetchRegister(context, account) {
            await axios.post('auth/register',
                account);

                this.dispatch('fetchLogin',{
                    username: account.name,
                    password: account.password
                  });

        },
        async fetchAddProduct(context,payload){
            const response = await axios.post('api/product',payload.product, {

              });
            console.log(response.data);

            this.dispatch('fetchListProduct');
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product added successfully!',
              });
        },
        async fetchListOrderForUser(context,id) {
            var response;
            response = await axios.get('api/order/user', 
            {
                params: { userID: id },
                headers: {
                    'Authorization': localStorage.getItem('accessToken')
                }
            },
            );
            context.commit('getListOrderForUser', response.data);
        },
        async fetchListOrder(context){
            const response = await axios.get('api/order', {
                headers: {
                    'Authorization': localStorage.getItem('accessToken')
                }
              });
            console.log(response.data);
            context.commit('getListOrder',response.data);
        },
        async fetchUpdateOrder(context,payload){
            const response = await axios.put('api/order', payload, {
                headers: {
                    'Authorization': localStorage.getItem('accessToken')
                }
              });
            console.log(response.data);
            this.dispatch('fetchListOrder');
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Order updated successfully!',
              });
        },
        async fetchListInventory(context){
            const response = await axios.get('api/product/allinvenitem', {

              });
            console.log(response.data);
            context.commit('getListInventory',response.data);
        },
        async fetchAddInventory(context,payload){
            const response = await axios.post('api/product/inven', payload.inventory, {

              });
            console.log(response.data);
            this.dispatch('fetchListInventory');
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Inventory updated successfully!',
              });
        },


    }


})