<template>
    <div id="result">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center result-show">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1>Final Result</h1>
                </div>
                <div class="panel-body">
                    <h1>You scored: {{ count }} / {{ countTotal }} </h1>
                </div>
            </div>
            <div>
                <button class="btn btn-go-main" @click="navigateToMain">Go To Main</button>
            </div>
        </div>
    </div>
</template>

<script>

import { eventBus } from '../../main';

export default {
    data() {
        return {
            count: null,
            countTotal: null
        }
    },
    methods: {
        navigateToMain() {
            this.$router.push({ name: 'gamehome' });
        }
    },
    created() {
        eventBus.$On('countWasChanged', (count) => {
            this.count = count;
        });
    }
}
</script>

<style>

#result .result-show {
    margin-top: 100px;
}

#result .btn-go-main {
    background-color: transparent;
    border: 1px solid rgb(81, 0, 112);
    border-radius: 20px;
    outline: 0;
    font-size: 25px;
    transition: all 1s ease;
}

#result .btn-go-main:hover {
    background-color: rgb(81, 0, 112);
    color: #fff;
}

</style>
