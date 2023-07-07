<template>
  <div class="about-content p-2">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img class="profile-img animate__animated animate__bounceInDown animate__delay-2"
            src="https://i.postimg.cc/wvd0VDyV/frontimage.jpg"
            alt=""
            loading="lazy"
            width="75%"
          />
        </div>

        <div class="col-md-6">
          <p class="lead about-me animate__animated animate__backInRight animate__delay-1s">
            I'm a guy who is 21 year at age. I live in Mitchell's Plain where i
            attended Meadowridge Primary School and went to Spine Road High
            School during my young days. I went to Cape Peninsula University of
            Technology for 3 years but never got to finished it. Now im
            following a dream that i had as a kid, to have influence over the
            game world I want to make.
          </p>
          <p class="lead about-me animate__animated animate__backInRight animate__delay-2s">
            I'm the type of person who's motivated and driven to be a great
            person someday. I'm not afraid to take a risk to learn new stuff. I
            always like to interact with people that would help me become a
            better version of myself. I love reading books, learning new
            technology, doing exercises and playing games. Also, I really do
            enjoy spend time with myself. To clear unwanted thought that might
            affect me.
          </p>

          <div class="row second animate__animated animate__lightSpeedInRight animate__delay-3s">
            <div class="col-md-4">
              <div class="card " style="width: 15rem">
                <img
                  src="https://i.postimg.cc/76wj59ZX/top-10-books-every-college-student-read-1024x640.jpg"
                  class="card-img-top img-fluid"
                  alt="..."
                  loading="lazy"
                  style="height: 10rem"
                />
                <div class="card-body">
                  <h5 class="card-title">Books</h5>
                  <p class="card-text">Mysteries</p>
                  <p class="card-text">Romance</p>
                  <p class="card-text">Fiction</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card" style="width: 15rem">
                <img
                  src="https://i.postimg.cc/CKVQ27kY/y5dxp8yemlzc8bypgfsl.jpg"
                  class="card-img-top"
                  alt="..."
                  loading="lazy"
                  style="height: 10rem"
                />
                <div class="card-body">
                  <h5 class="card-title">Games</h5>
                  <p class="card-text">Horror</p>
                  <p class="card-text">JRPG</p>
                  <p class="card-text">Visual Novel</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card" style="width: 15rem">
                <img
                  src="https://i.postimg.cc/MpBLtNcd/adobestock-4437974.jpg"
                  class="card-img-top"
                  alt="..."
                  loading="lazy"
                  style="height: 10rem"
                />
                <div class="card-body">
                  <h5 class="card-title">Sports</h5>
                  <p class="card-text">Golf</p>
                  <p class="card-text">Cricket</p>
                  <p class="card-text">Basketball</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-me {
  color: white;
}
img {
  width: 100%;
}
p {
  color: black;
}
h5{
  text-decoration: underline;
}

.card{
  width: 13rem !important;
  background:orange;
  border: 1px solid black;
}

@media screen and (max-width: 760px) {
  .second{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  
  .col-md-4{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
}
.profile-img{
  border: 5px solid #1b9dc5;
  padding: 2px;
  border-radius: 50%;
  border-top-color: #cf741f;
  border-left-color: #cf741f;
  width: 100%;
  margin-top: 5rem;
}
</style>
