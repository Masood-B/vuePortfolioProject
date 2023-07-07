<template>
    <div>
      <div class="container">
        <div class="row justify-content-around gap-2 p-2">
<div class="card col-lg-4" v-for="data in testimonial" :key="data.id">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="data.profile" class="img-fluid rounded-start img-fit" alt="..." loading="lazy">
      </div>
      <div class="col-md-8" id="testimonial_paragraph">
        <div class="card-body">
          <h5 class="card-title">{{ data.name }}</h5>
          <p class="card-text">{{ data.statement }}</p>
        </div>
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

img{
  height: 20rem;
}
.card{
  width:40rem;
  background: orange;
  border: 2px solid black;
}
.img-fit{
  object-fit: cover;
}
#testimonial_paragraph{
  display: flex;
  justify-content: center;
  align-items: center;
}
h5,p{
  color: black
}
</style>