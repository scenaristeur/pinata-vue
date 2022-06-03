<template>

  <b-card
  title="Pinata List"
  tag="article"
  style="max-width: 60rem;"
  class="mb-2"
>
  <b-card-text>
    <b-list-group v-if="pinataList!= null">
      <b-list-group-item v-for="i in pinataList.data.rows" :key="i.id" button>{{i}}</b-list-group-item>
    </b-list-group>
  </b-card-text>

  <b-button @click="list" variant="outline-warning">Pinata List</b-button>
  <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
</b-card>

</template>

<script>
export default {
  name: "PinataList",
  methods:{
    list(){
      this.$pinataPinList()
    }
  },
  computed: {
  pinataList() {
    return this.$store.state.data.pinataList
  },
}
}
</script>

<style>

</style>
