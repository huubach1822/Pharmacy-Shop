<template>
  <div>
    <AdminPage v-if="this.role == 'admin'"></AdminPage>
    <UserPage v-else></UserPage>
    
  </div>
</template>

<script>
import UserPage from './components/UserPage.vue';
import AdminPage from './components/AdminPage.vue';

export default {
  name: 'App',
  computed: {
    role() {
      return localStorage.getItem('role')
    }
  },
  components: {
    UserPage,
    AdminPage
  }
}
</script>

<style>

</style>
