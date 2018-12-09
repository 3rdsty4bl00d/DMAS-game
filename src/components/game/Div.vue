<template>
    <div id="divide">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center div-term"
            v-if="divLoad"
        >
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1> {{ term1 }} / {{ term2 }} ? </h1>
                </div>
                <div class="panel-body">
                    <div>
                        <input type="number" placeholder="Insert Your Answer" class="text-center form-control" v-model="divAnswerInput">
                        <p> {{ answerDiv }} </p>
                    </div>
                    <div>
                        <button class="btn btn-next" @click="navigateToDivAndCalculate">Next</button>
                        <button class="btn btn-next" @click="navigateToDivResult">Submit</button>
                    </div>
                </div>
            </div>
            <button class="btn btn-back-home" @click="navigateToHome">Quit</button>
        </div>
        <div class="result" v-else>
            <app-result :divLoad="divLoad" :divCount="divCount" :divCountTotal="divCountTotal" :divName="divName"></app-result>
        </div>
    </div>
</template>

<script>
import Result from './Result';
import { eventBus } from '../../main';

export default {
    data() {
        return {
            divLoad: true,
            divCount: 0,
            divCountTotal: 0,
            divAnswerInput: null,
            rndDivNumber1: null,
            rndDivNumber2: null,
            divAnswer: null,
            divName: '',
            x: null,
            y: null
        }
    },
    components: {
        appResult: Result
    },
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'gamehome' });
        },
        navigateToDivAndCalculate() {
            if(this.divAnswerInput == null) {
                alert('Insert Your Answer');
            } else {
                if(this.divAnswerInput == this.answerDiv) {
                    this.divCount++;
                    this.divCountTotal++;
                    this.rndDivNumber1 = Math.ceil(Math.random() * 13);
                    this.rndDivNumber2 = Math.ceil(math.random() * 31);
                } else {
                    this.divCountTotal++;
                    this.rndDivNumber1 = Math.ceil(Math.random() * 15);
                    this.rndDivNumber2 = Math.ceil(Math.random() * 31);
                }
            }
        },
        navigateToDivResult() {
            this.divLoad = !this.divLoad;
            this.divName = 'division';
        }
    },
    computed: {
        term1() {
            this.rndDivNumber1 = Math.ceil(Math.random() * 19);
            return this.rndDivNumber1;
        },
        term2() {
            this.rndDivNumber2 = Math.ceil(Math.random() * 13);
            return this.rndDivNumber2;
        },
        answerDiv() {
            this.divAnswer = (this.rndDivNumber1 / this.rndDivNumber2);
            return this.divAnswer;
        }
    },
    created() {
        eventBus.$on('divLoadWasEditted', (divLoader) => {
            this.divLoad = divLoader;
        });
        eventBus.$on('divCountToNull', (divCounter) => {
            this.divCount = divCounter;
        });
        eventBus.$on('divCountTotalToNull', (divCountTotaler) => {
            this.divCountTotal = divCountTotaler;
        });
    }
}
</script>

<style>

#divide .div-term {
    margin-top: 100px;
}

#divide .btn-back-home {
    background-color: transparent;
    border: 1px solid rgb(102, 3, 3);
    border-radius: 20px;
    font-size: 25px;
    transition: all 1s ease;
    outline: 0;
}

#divide .btn-back-home:hover {
    border-color: rgb(34, 231, 238);
}

#divide .btn-next {
    background-color: transparent;
    margin-top: 20px;
    border: 1px solid rgb(0,0,0);
    border-radius: 20px;
    font-size: 25px;
    transition: all 1s ease;
    outline: 0;
}

#divide .btn-next:hover {
    border-color: rgb(4, 182, 42);
    background-color: rgb(4, 182, 42);
}
</style>
