<template>
    <div>
        <h2 class="display-2">Testimonial</h2>
        <div class="card" v-for="data in testimonial" style="width: 18rem;" :key="data.id">
  <img :src="data.profile" class="card-img-top" alt="..." loading="lazy">
  <div class="card-body">
    <h5 class="card-title">{{ data.name }}</h5>
    <p class="card-text lead">{{ data.statement }}</p>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        computed:{
        testimonial(){
            return this.$store.state.testimonial
        }
       },
       mounted() {
        this.$store.dispatch('fetchTestimonial')
       }
    }
</script>

<style scoped>

</style>