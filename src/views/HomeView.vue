<template>
  <div>
    <div class="container p-2">
      <div class="row">
        <div class="col">
        <div class="animate-wrapper" >
          <div class="animated-title" >
            <div class="text-top">
              <div>
                <p class="name-heading">I Am Masood Basardien</p>
                <p>Im Pursuing My Passion Of Becoming Game Developer</p>
              </div>
            </div>
            <div class="text-bottom">
              <div><button type="button" class="btn btn-secondary btn-lg px-4 me-md-2"><router-link to="/about" style="color:black">About Me</router-link></button></div>
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
p{
  font-size: 1.6rem;
}
button{
  background:orange;
}
button:hover{
  background:white;
  color: orange;
  transform: scale(1.1);
  transition: 0.7s;
}
.animated-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 50vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
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

.animated-title > div.text-bottom {
  bottom: 0;
  display: flex;
  justify-content: center;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
 
  transform: translate(0, -100%);
}
.name-heading {
  padding-bottom: 1rem;
}

@media (width < 646px) {

  .animated-title > div{
    width: 100%;
  }
  .animated-title{
    left:68%;
    width:100%;
    position: static;
    transform: translate(0,0);
  }
  .animated-title > div.text-top div{
    top:0%;
    widows: 100%;
  }
  p{
    font-size:1.3rem;
  }
}
.row{
  align-content: center;
  height:78vh;
}

@media (width < 529px) {
  p{
    font-size:1rem;
    display: flex;
    justify-content: center;
  }
  .animated-title > div.text-top div{
    width: 100%;
  }

  @media (width < 412px){
    p{
      font-size:.9rem;
      display: flex;
      justify-content: center;
    }
    .animated-title > div.text-top div{
      width: 100%;
    }
  }
  @media (width < 351px){
    p{
      font-size:.7rem;
      display: flex;
      justify-content: center;
      margin-bottom: 0rem;
    }
    .animated-title > div.text-top div{
      width: 100%;
    }
  }
}
</style>