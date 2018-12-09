<template>
    <div id="mul">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center mul-term" 
            v-if="mulLoad"
        >
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1> {{ term1 }} X {{ term2 }} ? </h1>
                </div>
                <div class="panel-body">
                    <div>
                        <input type="number" placeholder="Insert Your Answer" class="text-center form-control" v-model="mulAnswerInput">
                    </div>
                    <div>
                        <button class="btn btn-next" @click="navigateToMulAndCalculate">Next</button>
                        <button class="btn btn-next" @click="navigateToMulResult">Submit</button>
                    </div>
                </div>
            </div>
            <button class="btn btn-back-home" @click="navigateToHome">Quit</button>
        </div>
        <div class="result" v-else>
            <transition 
                @before-enter="beforeEnter"
                @enter="enter" 
                @leave="leave"
            >
                <app-result :mulLoad="mulLoad" :mulCount="mulCount" :mulCountTotal="mulCountTotal" :mulName="mulName"></app-result>
            </transition>
        </div>
    </div>
</template>

<script>
import Result from './Result.vue';
import { eventBus } from '../../main';

export default {
    data() {
        return {
            rndMulNumber1: null,
            rndMulNumber2: null,
            mulAnswer: null,
            mulLoad: true,
            mulAnswerInput: null,
            mulCount: 0,
            mulCountTotal: 0,
            mulName: ''
        }
    },
    components: {
        appResult: Result
    },
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'gamehome' });
        },
        navigateToMulAndCalculate() {
            if(this.mulAnswerInput == null) {
                alert('Insert Your Answer');
            } else {
                if(this.mulAnswerInput == this.answerMul) {
                    this.mulCount++;
                    this.mulCountTotal++;
                    this.rndMulNumber1 = Math.ceil(Math.random() * 22);
                    this.rndMulNumber2 = Math.ceil(Math.random() * 23);
                } else {
                    this.mulCountTotal++;
                    this.rndMulNumber1 = Math.ceil(Math.random() * 39);
                    this.rndMulNumber2 = Math.ceil(Math.random() * 49);
                }
            }
        },
        navigateToMulResult() {
            this.mulLoad = !this.mulLoad;
            this.mulName = 'multiplication';
        },
        beforeEnter(el) {
            el.style.opacity = 0;
        },
        enter(el, done) {
            Velocity(el, {
                opacity: 1
            }, {
                duration: 2000
            })
            done();
        },
        leave(el, done) {
            Velocity(el, {
                opacity: 0
            })
        }
    },
    computed: {
        term1() {
            this.rndMulNumber1 = Math.ceil(Math.random() * 19);
            return this.rndMulNumber1;
        },
        term2() {
            this.rndMulNumber2 = Math.ceil(Math.random() * 21);
            return this.rndMulNumber2;
        },
        answerMul() {
            this.mulAnswer = (this.rndMulNumber1 * this.rndMulNumber2);
            return this.mulAnswer;
        }
    },
    created() {
        eventBus.$on('mulLoadWasEditted', (mulLoader) => {
            this.mulLoad = mulLoader;
        });
        eventBus.$on('mulCountToNull', (mulcounter) => {
            this.mulCount = mulCounter;
        });
        eventBus.$on('mulCountTotalToNull', (mulCountTotaler) => {
            this.mulCountTotal = mulCountTotaler;
        });
    }
}
</script>

<style>

#mul .mul-term {
    margin-top: 100px;
}

#mul .btn-back-home {
    background-color: transparent;
    border: 1px solid rgb(102, 3, 3);
    border-radius: 20px;
    font-size: 25px;
    transition: all 1s ease;
    outline: 0;
}

#mul .btn-back-home:hover {
    border-color: rgb(34, 231, 238);
}

#mul .btn-next {
    background-color: transparent;
    margin-top: 20px;
    border: 1px solid rgb(0,0,0);
    border-radius: 20px;
    font-size: 25px;
    transition: all 1s ease;
    outline: 0;
}

#mul .btn-next:hover {
    border-color: rgb(4, 182, 42);
    background-color: rgb(4, 182, 42);
}
</style>
