<template>
    <div>
        <SiteHeader></SiteHeader>
        <router-view></router-view>
        <SiteFooter></SiteFooter>
    </div>
</template>
  
  <script>
  import SiteFooter from './SiteFooter.vue';
  import SiteHeader from './SiteHeader.vue';



  export default {
    name: 'UserPage',

    components: {
    SiteFooter,
    SiteHeader,
    },


    

  }
  </script>
  

  <style>

  </style>
  