<template>
    <div id="sub">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center sub-term" 
            v-if="subLoad"
        >
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1> {{ term1 }} - {{ term2 }} ? </h1>
                </div>
                <div class="panel-body">
                    <div>
                        <input type="number" placeholder="Insert Your Answer" class="text-center form-control" v-model="subAnswerInput">
                    </div>
                    <div>
                        <button class="btn btn-next" @click="navigateToSubAndCalculate">Next</button>
                        <button class="btn btn-next" @click="navigateToSubResult">Submit</button>
                    </div>
                </div>
            </div>
            <button class="btn btn-back-home" @click="navigateToHome">Quit</button>
        </div>
        <div class="result" v-else>
            <app-result :subName="subName" :subCount="subCount" :subCountTotal="subCountTotal"></app-result>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../main';
import Result from './Result.vue';

export default {
    data() {
        return {
            rndSubNumber1: null,
            rndSubNumber2: null,
            subAnswer: null,
            subAnswerInput: null,
            subLoad: true,
            subCount: 0,
            subCountTotal: 0,
            subName: ''
        }
    },
    components: {
        appResult: Result
    },
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'gamehome' });
        },
        navigateToSubAndCalculate() {
            if(this.subAnswerInput == null) {
                alert('Insert Your Answer');
            } else {
                if(this.subAnswerInput == this.answerSub) {
                    this.subCount++;
                    this.subCountTotal++;
                    this.rndSubNumber1 = Math.ceil(Math.random() * 17);
                    this.rndSubNumber2 = Math.ceil(Math.random() * 19);
                } else {
                    this.subCountTotal++;
                    this.rndSubNumber1 = Math.ceil(Math.random() * 39);
                    this.rndSubNumber2 = Math.ceil(Math.random() * 49);
                }
            }
        },
        navigateToSubResult() {
            this.subLoad = !this.subLoad;
            this.subName = 'subtraction';
        }
    },
    created() {
        eventBus.$on('subLoadWasEditted', (subLoaded) => {
            this.subLoad = subLoaded;
        });
    },
    computed: {
        term1() {
            this.rndSubNumber1 = Math.ceil(Math.random() * 23);
            return this.rndSubNumber1;
        },
        term2() {
            this.rndSubNumber2 = Math.ceil(Math.random() * 27);
            return this.rndSubNumber2;
        },
        answerSub() {
            this.subAnswer = (this.rndSubNumber1 - this.rndSubNumber2);
            return this.subAnswer;
        }
    }
}
</script>

<style>

#sub .sub-term {
    margin-top: 100px;
}

#sub .btn-back-home {
    background-color: transparent;
    border: 1px solid rgb(102, 3, 3);
    border-radius: 20px;
    font-size: 25px;
    transition: all 1s ease;
    outline: 0;
}

#sub .btn-back-home:hover {
    border-color: rgb(34, 231, 238);
}

#sub .btn-next {
    background-color: transparent;
    margin-top: 20px;
    border: 1px solid rgb(0,0,0);
    border-radius: 20px;
    font-size: 25px;
    transition: all 1s ease;
    outline: 0;
}

#sub .btn-next:hover {
    border-color: rgb(4, 182, 42);
    background-color: rgb(4, 182, 42);
}
</style>
