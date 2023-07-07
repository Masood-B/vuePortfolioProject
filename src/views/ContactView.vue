<template>
    <div class="con p-2">
            <div class="container p-4">
                <div class="row">
                    <div class="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" required>
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" required>
                              </div>
                              <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label" >Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write Here" required></textarea>
                              </div>
                              <div>
                                <button class="btn btn-info">Submit</button>
                              </div>
                        </form>
                    </div>
                    <div class="col-md-1">

                    </div>
                    <div class="col-md-5">
                        <p class="contact-text"><i class="bi bi-telephone"></i> 079 298 0631</p>
                        <p class="contact-text"><i class="bi bi-envelope"></i> masoodbasardien123@gmail.com</p>

                        <hr>
                        
                        <div class="media">
                            <ul class="d-flex justify-content-center">
                                <li><a href="https://www.linkedin.com/in/masood-basardien-6aa759282/" target="_blank" class="icon"><i class="bi bi-linkedin"></i></a></li>
                                <li><a href="https://github.com/Masood-B?tab=repositories" target="_blank" class="px-3"><i class="bi bi-github"></i></a></li>
                            </ul>
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
.container{
    background: orange;
}
.btn-info{
    width:50%;
    letter-spacing: 2px;
    background: transparent;
    transition: all 0.5s ease-in-out;
}
.btn-info:hover{
    transform: scale(1.1);
}
.contact-text{
    font-size:17px;
}
ul{
    list-style: none;
}
ul li a{
    float:left;
}
.icon:hover{
    color: blue;
}
</style>