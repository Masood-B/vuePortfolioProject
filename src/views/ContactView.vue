<template>
    <div class="con">
        <h2 class="display-2">Contact</h2>
        <div class="container" id="contact_form">
<div class="mb-4">
    <div class="row">
        <div class="col-md- mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="name" class="">Name</label>
                            <input type="text" id="name" name="name" class="form-control m-2" placeholder="Enter Your Name:">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="surname" class="">Surname</label>
                            <input type="text" id="surname" name="surname" class="form-control m-2" placeholder="Enter Your Surname:">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="email" class="">E-mail</label>
                            <input type="text" id="email" name="email" class="form-control m-2" placeholder="Enter Your E-mail:">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form">
                            <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea m-2" placeholder="Enter A Message:"></textarea>
                        </div>

                    </div>
                </div>
            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>

    </div>

</div>
    </div>
    <div class="contact_me">
        <h2>contact me</h2>
        <div class="d-flex justify-content-around">
        <span>Telephone: 079 298 0631</span>
        <span>Email: masoodbasardien123@gmail.com</span>
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
    border: 1px solid black;
    background:gray;
}

.con{
    height: 85vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5.8rem;
}
.display-2 {
    margin-bottom: 5vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
#contact_form {
    height: 30rem;
    padding-top: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-right: 2rem;
}
.contact_me{
    padding-top:2rem;
}
</style>