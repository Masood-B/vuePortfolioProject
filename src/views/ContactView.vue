<template>
    <div>
        <h2 class="display-2">Contact</h2>
        <div class="container">
           <!--Section: Contact v.2-->
<section class="mb-4">

    
    <div class="row">

        <!--Grid column-->
        <div class="col-md- mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="name" class="">Name</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="Enter Your Name:">
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="surname" class="">Surname</label>
                            <input type="text" id="surname" name="surname" class="form-control" placeholder="Enter Your Surname:">
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="email" class="">E-mail</label>
                            <input type="text" id="email" name="email" class="form-control" placeholder="Enter Your E-mail:">
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Enter A Message:"></textarea>
                        </div>

                    </div>
                </div>
                <!--Grid row-->

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>

    </div>

</section>
<!--Section: Contact v.2-->
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>