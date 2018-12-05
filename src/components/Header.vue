<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <ul class="nav nav-pills pull-right">
            <router-link to="/" tag="li" active-class="active" exact><a class="header">Home</a></router-link>
            <router-link to="/profile" tag="li" active-class="active"><a class="header">Profile</a></router-link>
            <router-link to="/signup" tag="li" active-class="active"><a class="header">Sign Up</a></router-link>
            <router-link to="/login" tag="li" active-class="active"><a class="header">Log In</a></router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>

.navbar {
    background: transparent;
    border: none;
    margin-top: 10px;
}

.navbar .nav .header {
    margin-right: 10px;
    margin-left: 10px;
    text-decoration: none;
}

</style>
