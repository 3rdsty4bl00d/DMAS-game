<template>
    <div id="result">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center result-show">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1>Final Result</h1>
                </div>
                <div class="panel-body">
                    <h1 v-if="dmasName == 'addition'">Your {{ dmasName }} score: {{ count }} / {{ countTotal }} </h1>
                    <h1 v-else-if="dmasName == 'subtraction'">Your {{ dmasName }} score: {{ subCount }} / {{ subCountTotal }} </h1>
                    <h1 v-else-if="dmasName == 'multiplication'">Your {{ dmasName }} score: {{ mulCount }} / {{ mulCountTotal }} </h1>
                    <h1 v-else-if="dmasName == 'division'">Your {{ dmasName }} score: {{ divCount }} / {{ divCountTotal }} </h1>
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
            dmasName: ''
        }
    },
    props: ['load',
            'count',
            'countTotal',
            'subLoad',
            'subCount',
            'subCountTotal',
            'addName',
            'subName',
            'mulLoad',
            'mulCount',
            'mulCountTotal',
            'mulName',
            'divLoad',
            'divCount',
            'divCountTotal',
            'divName'
        ],
    created() {
        if(this.addName == 'addition') {
            this.dmasName = this.addName;
        } else if (this.subName == 'subtraction') {
            this.dmasName = this.subName;
        } else if (this.mulName == 'multiplication') {
            this.dmasName = this.mulName;
        } else {
            this.dmasName = this.divName;
        }
    },
    methods: {
        navigateToMain() {
            this.$router.push({ name: 'gamehome' });
            this.addLoader();
            this.subLoader();
            this.mulLoader();
            this.divLoader();
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
            this.subLoad = !this.subLoad;
            this.subCount = 0;
            this.subCountTotal = 0;
            eventBus.$emit('subLoadWasEditted', this.subLoad);
            eventBus.$emit('subCountToNull', this.subCount);
            eventBus.$emit('subCountTotalToNull', this.subCountTotal);
        },
        mulLoader() {
            this.mulLoad = !this.mulLoad;
            this.mulCount = 0;
            this.mulCountTotal = 0;
            eventBus.$emit('mulLoadWasEditted', this.mulLoad);
            eventBus.$emit('mulCountToNull', this.mulCount);
            eventBus.$emit('mulCountTotalToNull', this.mulCountTotal);
        },
        divLoader() {
            this.divLoad = !this.divLoad;
            this.divCount = 0;
            this.divCountTotal = 0;
            eventBus.$emit('divLoadWasEditted', this.divLoad);
            eventBus.$emit('divCountToNull', this.divCount);
            eventBus.$emit('divCountTotalToNull', this.divCountTotal);
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
