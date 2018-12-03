<template>
    <div id="add">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center addition-term">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1> {{ term1 }} + {{ term2 }} ? </h1>
                </div>
                <div class="panel-body">
                
                </div>
            </div>
            <button class="btn btn-back-home" @click="navigateToHome">Quit</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            term1: '',
            term2: ''
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'gamehome' });
        }
    }
}
</script>

<style>

#add .addition-term {
    margin-top: 100px;
}

#add .btn-back-home {
    background-color: transparent;
    border: 1px solid rgb(102, 3, 3);
    border-radius: 20px;
    font-size: 25px;
    transition: all 1s ease;
    outline: 0;
}

#add .btn-back-home:hover {
    border-color: rgb(34, 231, 238);
}

</style>
