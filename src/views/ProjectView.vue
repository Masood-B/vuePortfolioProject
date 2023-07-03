<template>
    <div>
        <h2 class="display-2">Project</h2>
        <div class="card" v-for="data in project" :key="data.id">
            <img :src="data.background" alt="..." loading="lazy">
            <div class="card-content">
              <h2 class="card-title">
               {{ data.title }}
              </h2>
              <a :href="data.githublink" target="_blank">
                Github
              </a>
              <a :href="data.netlifylink" target="_blank">
                Netlify
            </a>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        computed:{
        project(){
            return this.$store.state.project
        }
       },
       mounted() {
        this.$store.dispatch('fetchProject')
       }
    }
</script>

<style scoped>
img{
    width:10rem;
}
.card{
    width:20rem;
}
</style>