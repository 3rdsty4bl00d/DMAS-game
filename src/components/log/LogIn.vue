<template>
    <div id="login">
        <form action="user-login" class="login-form">
            <div class="col-sm-8 col-xs-12 col-md-6 col-sm-offset-2 col-md-offset-3 text-center">
                <div class="panel panel-default">
                <div class="panel-heading">
                    <h1>Log In</h1>
                </div>
                <div class="panel-body">
                    <div class="form-group">
                        <input type="text" placeholder="Email" class="form-control">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" class="form-control">
                    </div>
                </div>
                <hr>
                <div class="btns">
                    <button class="btn btn-register" @click.prevent="navigateToSignup">Register</button>
                    <button class="btn btn-submit">Submit</button>
                </div>
                
            </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToSignup() {
            this.$router.push({ name: 'signup' });
        }
    }
}
</script>

<style>

#login .login-form {
    margin-top: 100px;
}

#login .login-form .btn-register {
    background-color: transparent;
    border: 1px solid rgb(76, 243, 42);
    transition: all 1s ease;
    border-radius: 20px;
    outline: 0;
    font-size: 25px;
}

#login .login-form .btn-already:hover {
    border-color: #fff;
}

#login .login-form .btn-submit {
    background-color: transparent;
    border: 1px solid rgb(41, 89, 245);
    border-radius: 20px;
    transition: all 1s ease;
    outline: 0;
    font-size: 25px;
}

#login .login-form .btn-submit:hover {
    background-color: rgb(41, 89, 245);
}

#login .login-form .btns {
    margin-bottom: 20px;
}

</style>
