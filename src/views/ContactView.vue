<template>
    <div>
        <h2 class="display-2">Contact</h2>
        <div class="container d-flex justify-content-center">
            <form>
              
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." required>
              
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." required>
              
              <label for="Email">Email Address</label>
              <input type="text" id="Email" name="email" placeholder="Your email.." required>
              
            <label for="subject">Message</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style="height:100px" required></textarea>
        
            <input type="submit" value="Submit" required></form>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>