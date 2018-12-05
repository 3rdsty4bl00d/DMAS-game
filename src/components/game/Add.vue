<template>
    <div id="add">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center addition-term" 
            v-if="load"
        >
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1> {{ term1 }} + {{ term2 }} ? </h1>
                </div>
                <div class="panel-body">
                    <div>
                        <input type="number" v-model="answerInput" placeholder="Insert Your Answer" class="text-center form-control">
                    </div>
                    <div>
                        <button class="btn btn-next" @click="navigateToSelfAndCalculate">Next</button>
                        <button class="btn btn-next" @click="navigateToResult">Submit</button>
                    </div>
                </div>
            </div>
            <button class="btn btn-back-home" @click="navigateToHome">Quit</button>
        </div>
        <div class="result" v-else>
            <app-result :count="count" :countTotal="countTotal"></app-result>
        </div>
    </div>
</template>

<script>

import { eventBus } from '../../main';
import Result from './Result.vue';

export default {
    data() {
        return {
            rndTerm1: null,
            rndTerm2: null,
            answer: null,
            answerInput: null,
            load: true,
            count: 0,
            countTotal: 0
        }
    },
    components: {
        appResult: Result
    },
    created() {
        eventBus.$on('loadWasEdited', (loader) => {
            this.load = loader;
        });
        eventBus.$on('countToNull', (counter) => {
            this.count = counter;
        });
        eventBus.$on('countTotalToNull', (countTotaler) => {
            this.countTotal = countTotaler;
        });
    },
    methods: {
        navigateToHome() {
            /* 
                the below code,
                will redirect to gamehome page
                once we click on quit button
            */
            this.$router.push({ name: 'gamehome' });
        },
        navigateToResult() {
            this.load = !this.load;
        },
        navigateToSelfAndCalculate() {
            /* 
                the below code,
                will redirect the page to self
                once we click the next buttton
            */
            /* if(this.answerInput == null) {
                alert('Insert Your Answer!!!');
            } else {
                if(this.answerInput == this.answerAdd) {
                    this.count++;
                    console.log(this.count);
                    this.countTotal++;
                    this.$router.go();  //re-direct to same page
                }else {
                    this.$router.go();
                    this.countTotal++;
                }
            } */
            if(this.answerInput == null) {
                alert('Insert Your Answer!!!');
            } else {
                if(this.answerInput == this.answerAdd) {
                    this.count++;
                    this.countTotal++;
                    this.rndTerm1 = Math.ceil(Math.random() * 13);
                    this.rndTerm2 = Math.ceil(Math.random() * 12);
                } else {
                    this.countTotal++;
                    this.rndTerm1 = Math.ceil(Math.random() * 14);
                    this.rndTerm2 = Math.ceil(Math.random() * 19);
                }
            }
        }
    },
    computed: {
        /* 
            generating random value in computed property
        */
       term1() {
            this.rndTerm1 = Math.ceil(Math.random() * 17);
            return this.rndTerm1;
        },
        term2() {
            this.rndTerm2 = Math.ceil(Math.random() * 23);
            return this.rndTerm2;
        },
        answerAdd() {
            this.answer = (this.rndTerm1 + this.rndTerm2);
            return this.answer;
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

#add .btn-next {
    background-color: transparent;
    margin-top: 20px;
    border: 1px solid rgb(0,0,0);
    border-radius: 20px;
    font-size: 25px;
    transition: all 1s ease;
    outline: 0;
}

#add .btn-next:hover {
    border-color: rgb(4, 182, 42);
    background-color: rgb(4, 182, 42);
}

</style>
