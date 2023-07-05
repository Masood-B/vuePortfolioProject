<template>
    <div>
        <h2 class="display-2">Resume</h2>
        <h3 class="display-3">Education</h3>
        <div class="card" v-for="data in educations" :key="data.id">
            <h4 class="display-4">{{ data.year }}</h4>
            <div class="card-body">
                <p class=" ">
                     {{ data.description }} @ <span>{{ data.place }}</span> 
                     <a href="{{ data.certificate }}" target="_blank">{{ data.type }}</a>
                </p>
            </div>
        </div>
        <h3 class="display-3">Skill</h3>
        <div class="row justify-content-center gap-2 d-flex">
        <div class="cards-wrapper" v-for="data in skill" :key="data.id">
            <div class="images">
            <img :src="data.picture" alt="..." loading="lazy" style="width:15rem">
            <h2 class="skill-title">{{ data.title }}</h2>
            </div>
            </div>
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
/* Education */
.education {
    width: 40em;
    margin: 5px auto;
    padding: 10px;
}
.card {
    border: 4px solid var(--green);
    margin: 10px 0;
    border-radius: 20px;
    padding: 10px;
    width: 50%;
    background-color: var(--alternative);
    border: 2px solid black;
}  
.card:nth-child(odd) {
    position: relative;
}

.card:nth-child(even) {
    box-shadow: .5vw .2vw .7vw var(--awesomeColor);
    margin-left: auto;
    position: relative;
}
 
/* Media query */
@media screen and (width < 900px) {
/* Education */
    .education {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        gap: 20px;
        align-items: center;
    }
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
   width: 20rem;
   border: 1px solid black;
}

.skill-title{
    font-size: 2rem;
}
</style>