<template>
<div id="signup">
    <form action="userForm" class="form">
        <div class="col-md-6 col-sm-8 col-xs-12 col-md-offset-3 col-sm-offset-2 text-center dmas-form">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h1>
                    Sign up
                </h1>
            </div>
            <div class="panel-body">
                <div class="form-group">
                    <input type="text" placeholder="First Name" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Last Name" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Password" class="form-control">
                </div>
            </div>
            <hr>
            <button class="btn btn-already" @click.prevent="navigateToLogin">Already have an account?</button>
            <hr>
            <button class="btn btn-submit">Submit</button>
        </div>
    </div>
    </form>
    
</div>
</template>

<script>
export default {
    methods: {
        navigateToLogin() {
            this.$router.push({ name: 'login' });
        }
    }
}
</script>

<style>

#signup {
    margin-top: 100px;
}

#signup .form .btn-already {
    background-color: transparent;
    border: 1px solid rgb(76, 243, 42);
    border-radius: 20px;
    transition: all 1s ease;
    outline: 0;
    font-size: 25px;
}

#signup .form .btn-already:hover {
    border-color: #fff;
}

#signup .form .btn-submit {
    background-color: transparent;
    border: 1px solid rgb(41, 89, 245);
    border-radius: 20px;
    margin-bottom: 20px;
    transition: all 1s ease;
    outline: 0;
    font-size: 25px;
}

#signup .form .btn-submit:hover {
    background-color: rgb(41, 89, 245);
}

</style>
