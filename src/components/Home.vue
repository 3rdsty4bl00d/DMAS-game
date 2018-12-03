<template>
    <div id="home">
        <img src="../img/home.jpg" alt="HomeImage" class="home-bg-img">
        <div class="home-bg">
            <div class="row home-heading">
                <h1>
                    Play a Game!
                </h1>
            </div>
            <div class="row home-button">
                <button class="btn btn-get-started" @click.prevent="navigateToGameHome">Get Started</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToGameHome() {
            this.$router.push({ name: 'gamehome' });
        }
    }
}
</script>

<style>

.home-bg-img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.home-bg {
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translateX(-50%);
    color: #fff;
}

.home-bg .home-button .btn-get-started {
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 20px;
    outline: 0;
    transition: all 1s ease;
    font-size: 25px;
}

.home-bg .home-heading {
    margin-bottom: 40px;
}

.home-bg .btn-get-started:hover {
    color: rgb(226, 0, 0);
    border-color: rgb(226, 0, 0);
}

</style>
