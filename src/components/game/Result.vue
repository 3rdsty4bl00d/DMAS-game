<template>
    <div id="result">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center result-show">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1>Final Result</h1>
                </div>
                <div class="panel-body">
                    <h1 v-if="!this.load">Your addition score: {{ count }} / {{ countTotal }} </h1>
                    <h1 v-else-if="this.subLoad">You subtraction score: {{ subCount }} / {{ subCountTotal }} </h1>
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
    props: ['load', 'count', 'countTotal', 'subLoad', 'subCount', 'subCountTotal'],
    methods: {
        navigateToMain() {
            this.addLoader();
            this.subLoader();
            this.$router.push({ name: 'gamehome' });
        },
        addLoader() {
            this.load = !this.load;
            this.count = 0;
            this.countTotal = 0;
            eventBus.$emit('loadWasEdited', this.load);
            eventBus.$emit('countToNull', this.count);
            eventBus.$emit('countTotalToNull', this.countTotal);
        },
        subLoader() {
            console.log('subloader was called');
            this.subLoad = !this.subLoad;
            this.subCount = 0;
            this.subCountTotal = 0;
            eventBus.$emit('subLoadWasEditted', this.subLoad);
        }
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
