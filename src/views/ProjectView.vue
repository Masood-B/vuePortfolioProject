<template>
    <div class="main">
        <h2 class="display-2">Project</h2>
        <div class="container">
            <div class="row justify-content-center gap-2 d-flex" >
        <div class="card " v-for="data in project" :key="data.id">
            <img :src="data.background" alt="..." loading="lazy">
            <div class="card-body card-title">
              <h2 >
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
.main{
    align-items: center;
}
.card{
    height: 400px;
    width:500px;
    margin: 50px;
    box-shadow: 5px 5px 20px black;
    overflow:hidden;
}
img{
   width: 100%;
   border-radius: 3px;
   transition: .3s;
}
.card-title{
    height: 80px;
    width: 475px;
    padding: 6px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    background: rgb(27, 27, 27, .5);
    color: white;
    transition: .3s;
}
h1{
    margin: 10px;
    font-size: 40px;
}
p{
    margin: 20px;
    font-size: 20px;
    visibility: hidden;
    opacity: 0;
}
.card:hover{
    cursor: pointer;
}
.card:hover .card-title{
    height: 150px;
    bottom: 0px;
    background: black;
    opacity: 0.8
}
.card:hover p{
    opacity: 1;
    visibility: visible;
}
.card:hover img{
    transform: scale(1.1) rotate(-3deg);
}
</style>