<template>
    <div class="con p-2">
      <div class="container p-4 animate__animated animate__fadeInLeftBig animate__delay-2">
        <div class="row">
          <div id="form_left" class="col-md-6">
            <form action="https://formspree.io/f/xbjewvba" method="POST">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input name="name" type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" required oninvalid="this.setCustomValidity('You need to put your name here')" oninput="this.setCustomValidity('')"/>
                <label for="exampleFormControlInput2" class="form-label">Email address</label>
                <input name="email" type="email" class="form-control" id="exampleFormControlInput2" placeholder="Your Email" required oninvalid="this.setCustomValidity('You need to put your email here')" oninput="this.setCustomValidity('')"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Write Here" required oninvalid="this.setCustomValidity('You need to write here')" oninput="this.setCustomValidity('')"></textarea>
              </div>
              <div>
                <button type="submit" class="btn btn-info">Submit</button>
              </div>
            </form>
          </div>
          <div id="form_right" class="col-md-6 d-flex flex-column align-items-center justify-content-center py-3">
            <div class="text-center">
              <p class="contact-text">
                <i class="bi bi-telephone"></i> 079 298 0631
              </p>
              <p class="contact-text">
                <i class="bi bi-envelope"></i> masoodbasardien123@gmail.com
              </p>
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
  #form_left {
    margin-top: 2rem;
  }
  
  #form_right {
    margin-top: 2rem;
  }
  
  @media (max-width: 768px) {
    #form_left {
      margin-top: 0;
    }
  
    #form_right {
      margin-top: 0;
    }
  
    .btn-info {
      width: 100%;
    }
  }
  
  .container {
    background: orange;
    height: auto;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 2rem;
  }
  
  .btn-info {
    letter-spacing: 2px;
    background: brown;
    transition: all 0.5s ease-in-out;
    border: 1px solid black;
    color: white;
  }
  
  .btn-info:hover {
    transform: scale(1.1);
  }
  
  .contact-text {
    font-size: 17px;
  }
  
  ul {
    list-style: none;
  }
  
  ul li a {
    float: left;
  }
  
  .icon:hover {
    color: blue;
  }
  </style>
  