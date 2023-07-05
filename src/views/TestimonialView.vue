<template>
    <div>
        <h2 class="display-2">Testimonial</h2>
        <div class="row justify-content-center gap-2 d-flex">
<div class="card mb-3" v-for="data in testimonial" :key="data.id" style="max-width: 900px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="data.profile" class="img-fluid rounded-start" alt="..." loading="lazy">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ data.name }}</h5>
          <p class="card-text">{{ data.statement }}</p>
        </div>
      </div>
    </div>
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