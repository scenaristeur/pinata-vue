<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-container>
      <b-row>
        <PinataLogin class="m-2" />
        <PinataList class="m-2" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    'PinataLogin': ()=>import('@/views/PinataLogin'),
    'PinataList': ()=>import('@/views/PinataList'),
  },
  mounted(){
    this.$pinataGetCredentials()
  }
}
</script>
