<template>
    <div>
        <div class="container ">
        <h3 class="display-3">Education</h3>
        <div class="card animate__animated animate__flipInX animate__delay-0s" v-for="data in educations" :key="data.id">
            <h4 class="display-4">{{ data.year }}</h4>
            <div class="card-body">
                <p>
                     {{ data.description }} @ <span>{{ data.place }}</span> 
                </p>
            </div>
        </div>
    </div>
        <h3 class="display-3">Skill</h3>
        <div class="container" v-motion-slide-visible-bottom>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 py-2" v-for="data in skill" :key="data.id">
        <div class="cards-wrapper" >
            <div class="skill-card">
            <img :src="data.picture" alt="..." loading="lazy" style="width:10rem" class="img-fluid">
            <h2 class="skill-title">{{ data.title }}</h2>
            </div>
            </div>
        </div>
            </div>
        </div>
        <div>
            <a href="https://drive.google.com/uc?export=download&id=1uvnYLlBVXDAuVk_i8MerYvzm0PP170DI" class="download-cv" style="font-size:2rem">Download CV</a>
        </div>
    </div>
</template>

<script>
    export default {
       computed:{
        educations(){
            return this.$store.state.education
        },
        skill(){
            return this.$store.state.skill
        }
       },
       mounted() {
        this.$store.dispatch('fetchEducation'),
        this.$store.dispatch('fetchSkill')
       }
    }
</script>

<style scoped>

.card {
    margin: 5px 0;
    border-radius: 20px;
    padding: 5px;
    width: 50%;
    border: 2px solid black;
    background:orange;
}  
.cards-wrapper:hover{
    transform: scale(1.1);
  transition: 0.7s;
}
.card:nth-child(odd) {
    position: relative;
    box-shadow: .5vw .2vw .7vw;
}

.card:nth-child(even) {
    box-shadow: .5vw .2vw .7vw;
    margin-left: auto;
    position: relative;
}
 

@media screen and (width < 900px) {
    .card{
        width: 100%;
        flex-wrap: wrap;
    }
    .card a , .card p, footer p{
        font-size: small;
    }
    .card:nth-child(odd) {
        margin-left: 0;
    }
    .card:nth-child(odd)::after {
        content: none;
    }
    .card:nth-child(even) {
        margin-left: 0;
    }
    .card:nth-child(even)::after {
        content: none;
    }
}
.cards-wrapper{
    background:orange;
   border: 1px solid black;
   color: white;
}

.skill-title{
    font-size: 2rem;
}
h3{
    color: white;
    padding: 1rem;
}
.download-cv{
    text-decoration: none;
}
</style>