<template>
    <div id="add">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center addition-term">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1> {{ term1 }} + {{ term2 }} ? </h1>
                </div>
                <div class="panel-body">
                    <div>
                        <input type="number" v-model="answerInput" placeholder="Insert Your Answer" class="text-center">
                    </div>
                    <div>
                        {{ count }} / 10
                    </div>
                    <div>
                        <button class="btn btn-next" @click.prevent="navigateToSelf">Next</button>
                    </div>
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
            rndTerm1: null,
            rndTerm2: null,
            answer: null,
            answerInput: null,
            count: 0
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'gamehome' });
        },
        navigateToSelf() {
            console.log('render');
            this.$router.go({ name: 'addition' });  //re-directs to same page
        }
    },
    computed: {
        term1() {
            this.rndTerm1 = Math.ceil(Math.random() * 10);
            return this.rndTerm1;
        },
        term2() {
            this.rndTerm2 = Math.ceil(Math.random() * 15);
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
