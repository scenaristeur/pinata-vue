<template>
  <div>
    <b-card
    title="Pinata Login"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    >
    <b-card-text>
      <b-input v-model="pinata.api_key" placeholder="pinata_api_key" />
      <b-input v-model="pinata.api_key_secret" placeholder="pinata_api_secret_key" />
      or
      <b-input v-model="pinata.jwt" placeholder="pinata_jwt" />

    </b-card-text>
    <b-button @click="pinata_login" variant="primary">Connect Pinata</b-button>
    <b-button href="https://www.pinata.cloud/" variant="outline-primary">I don't have Pinata</b-button>
    <b-button href="https://docs.ipfs.io/how-to/work-with-pinning-services/#use-an-existing-pinning-service" target="_blank">What is Pinata</b-button>
    <b-button @click="pinata_logout" variant="outline-warning">Logout Pinata</b-button>



  </b-card>
</div>
</template>

<script>
export default {
  name: "PinataLogin",
  data(){
    return {
      pinata: {}
    }
  },
  methods: {
    pinata_login(){
      this.$pinataTestAuthentication()
    },
    pinata_logout(){
      if (confirm("Are you sure you want to deconnect Pinata ? You probably will have to regenerate new keys if you don't have save them")) {
        console.log("todo logout")
      }
    },
    }
}
</script>

<style>

</style>
