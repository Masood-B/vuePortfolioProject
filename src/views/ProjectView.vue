<template>
    <div>
        <div class="container">
            <div class="row" >
                <div class="col-12 col-md-6 col-lg-4 py-2 animate__animated animate__fadeInUpBig animate__delay-2"  v-for="data in project" :key="data.id">
                    <div class="card">
                        <img :src="data.background" alt="..." loading="lazy">
                        <div class="card-body card-title">
                          <h2 class="title">
                           {{ data.title }}
                          </h2>
                          <p class="d-flex justify-content-between">
                          <a :href="data.githublink" target="_blank">
                            Github
                          </a>
                          <a :href="data.netlifylink" target="_blank">
                            Netlify
                        </a>
                        </p>
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
.title{
    font-size:medium;
}

</style>