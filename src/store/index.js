import { createStore } from 'vuex'
const dataURL = "https://masood-b.github.io/vueJsonPortfolioProject/"
export default createStore({
  state: {
    education: null,
    skill: null,
    project: null
  },
  getters: {
  },
  mutations: {
    setEducation (state, dataEducation){
      state.education = dataEducation
    },
    setSkill (state, dataSkill){
      state.skill = dataSkill
    },
    setProject (state, dataProject){
      state.project = dataProject
    }
  },
  actions: {
    async fetchEducation (context){
      try{
        let book = await fetch(dataURL);
        let {Education} = await book.json();
        if (Education){
          context.commit('setEducation', Education);
        }
      }catch (event){
        console.log(event.message);
      }
    },
    async fetchSkill (context){
      try{
        let talent = await fetch (dataURL);
        let {Skills} = await talent.json();
        if (Skills){
          context.commit('setSkill', Skills);
      }
    }catch(event){
      console.log(event.message);
    }
    },
    async fetchProject (context){
      try{
        let prototype = await fetch(dataURL);
        let {Projects} = await prototype.json();
        if (Projects){
          context.commit('setProject', Projects);
        }
      }catch(event){
        console.log(event.message);
      }
    }
  },
  modules: {
  }
})
