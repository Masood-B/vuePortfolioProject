<template>
  <div class="about-content p-2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-none d-md-block">
          <img
            class="profile-img"
            src="https://i.postimg.cc/wvd0VDyV/frontimage.jpg"
            alt=""
            loading="lazy"
            width="75%"
          />
        </div>

        <div class="col-md-6">
          <p class="lead about-me">
            I'm a 21-year-old guy living in Mitchell's Plain. I attended
            Meadowridge Primary School and Spine Road High School in my younger
            days. Although I spent 3 years at Cape Peninsula University of
            Technology, I didn't finish. Now, I'm pursuing my childhood dream
            of influencing the game world.
          </p>
          <p class="lead about-me">
            I'm motivated and driven to become a great person. I'm not afraid
            to take risks and learn new things. I enjoy interacting with people
            who help me become a better version of myself. I love reading
            books, learning new technology, exercising, playing games, and
            spending time alone to clear unwanted thoughts.
          </p>

          <div class="row second">
            <div class="col-md-4">
              <div class="card" style="width: 100%">
                <img
                  src="https://i.postimg.cc/76wj59ZX/top-10-books-every-college-student-read-1024x640.jpg"
                  class="card-img-top img-fluid"
                  alt="..."
                  loading="lazy"
                  style="height: 10rem"
                />
                <div class="card-body">
                  <h5 class="card-title">Books</h5>
                  <p class="card-text">Mystery</p>
                  <p class="card-text">Romance</p>
                  <p class="card-text">Fiction</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card" style="width: 100%">
                <img
                  src="https://i.postimg.cc/CKVQ27kY/y5dxp8yemlzc8bypgfsl.jpg"
                  class="card-img-top"
                  alt="..."
                  loading="lazy"
                  style="height: 10rem"
                />
                <div class="card-body">
                  <h5 class="card-title">Games</h5>
                  <p class="card-text">MOBA</p>
                  <p class="card-text">JRPG</p>
                  <p class="card-text">Visual Novel</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card" style="width: 100%">
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
  color: #080000;
  animation: backInRight;
  animation-duration: 2s;
}
.card{
  animation: backInRight;
  animation-duration: 2s;
}
img {
  width: 100%;
}
p {
  color: #080000;
}
h5 {
  text-decoration: underline;
}

.card {
  width: 100%;
  background: orange;
  border: 1px solid black;
}

@media screen and (max-width: 992px) {
  .second {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .col-md-4 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }
}

.profile-img {
  border: 5px solid #1b9dc5;
  padding: 2px;
  border-radius: 50%;
  border-top-color: #cf741f;
  border-left-color: #cf741f;
  width: 100%;
  margin-top: 5rem;
}

@media screen and (max-width: 992px) {
  .col-md-6 {
    width: 100%;
  }

  .profile-img {
    display: none;

    
  }

  .second .col-md-4 {
    width: 50%;
    padding-top: 1rem;
  }
 
}
</style>
