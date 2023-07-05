<template>
  <div>
  <h2 class="display-2" >Home</h2>
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-md-8 col-lg-4">
          <img src="https://i.postimg.cc/wvd0VDyV/frontimage.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="animate-wrapper col-10 col-md-8 col-lg-8">
          <div class="animated-title">
            <div class="text-top">
              <div>
                <span>I am Masood Basardien</span>
                <span>Im pursuing my passion of becoming a game developer</span>
              </div>
            </div>
            <div class="text-bottom">
              <div><button type="button" class="btn btn-secondary btn-lg px-4 me-md-2"><router-link to="/about">About Me</router-link></button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

</template>

<script>
  export default {
    
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.animate-wrapper {
  position: relative;
}
.animated-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 50vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  font-size: 2rem;
  padding: 1rem 0;
  position: absolute;
}
.animated-title > div div span {
  display: block;
}
.animated-title > div.text-top {
  border-bottom: 1vmin solid #000;
  top: 0;
}
.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: #767676;
}
.animated-title > div.text-bottom {
  bottom: 0;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}
@media (width < 1230px) {

}
</style>