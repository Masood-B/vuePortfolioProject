<template>
    <div>
        <h2 class="display-2">Resume</h2>
        <h3 class="display-3">Education</h3>
        <div class="card" v-for="data in educations" :key="data.id">
            <h4 class="display-4">{{ data.year }}</h4>
            <div class="card-body">
                <p class=" ">
                     {{ data.description }} @ <span>{{ data.place }}</span> 
                     <router-link to="{{ data.certificate }}">{{ data.type }}</router-link>
                </p>
            </div>
        </div>
        <h3 class="display-3">Skill</h3>
        <div class="cards-wrapper" v-for="data1 in skill" :key="data1.id">
            <div class="images">
            <img :src="data1.picture" alt="..." loading="lazy">
            <h2>{{ data1.title }}</h2>
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

</style>