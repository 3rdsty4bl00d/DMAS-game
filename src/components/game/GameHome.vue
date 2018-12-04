<template>
    <div id="game-home">
            <div class="row game-provide-heading">
                <transition 
                    @enter="headingEnter" 
                    appear
                >
                    <h1>Games we Provide</h1>
                </transition>
            </div>
        <div class="row game-button">
            <button class="btn btn-game-add" @click="navigateToAdd">
                        <transition 
                            @enter="enter" 
                            appear
                        >
                        <div>+</div>
                        </transition>
                    Addition
            </button>
            <button class="btn btn-game-sub" @click="navigateToSub">
                <transition 
                    @enter="enter" 
                    appear
                >
                    <div>-</div>
                </transition>
                Subtraction
            </button>
            <button class="btn btn-game-mul" @click="navigateToMul">
                <transition 
                    @enter="enter" 
                    appear
                >
                    <div>X</div>
                </transition>
                Multiplication
            </button>
            <button class="btn btn-game-div" @click="navigateToDiv">
                <transition 
                    @enter="enter" 
                    appear
                >
                    <div>/</div>
                </transition>
                Division
            </button>
        </div>
        <transition
            @enter="buttonEnter" 
            appear
        >
            <button class="btn btn-back-home" @click="navigateToHome">Go Home</button>
        </transition>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'home' });
        },
        navigateToAdd() {
            this.$router.push({ name: 'addition' });
        },
        navigateToSub() {
            this.$router.push({ name: 'subtraction' });
        },
        navigateToMul() {
            this.$router.push({ name: 'multiplication' });
        },
        navigateToDiv() {
            this.$router.push({ name: 'division' });
        },
        enter(el, done) {
            console.log('enter');
            Velocity(el, {
                translateX: '10px'
            }, {
                duration: 250
            })
            Velocity(el, {
                translateX: '-2px'
            }, {
                duration: 500
            })
            Velocity(el, {
                rotateY: "360deg"
            }, {
                duration: 1000
            })
            done();
        },
        headingEnter(el, done) {
            Velocity(el, 'callout.shake', {
                duration: 1800
            })
            done();
        },
        buttonEnter(el, done) {
            Velocity(el, {
                translateX: "-800px",
            }, {
                duration: 50
            })
            done();
        }
    }
}
</script>

<style>

#game-home .game-button {
    position: absolute;
    top: 200px;
    left: 20%;
}

#game-home .btn-game-add {
    background-color: transparent;
    border: 1px solid rgb(160, 7, 7);
    transition: all 1s ease;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 60px;
    border-radius: 20px;
    font-size: 30px;
    outline: 0;
}

#game-home .btn-game-add:hover {
    border-color: rgb(2, 151, 156);
}

#game-home .btn-game-sub {
    background-color: transparent;
    border: 1px solid rgb(160, 150, 7);
    transition: all 1s ease;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 60px;
    border-radius: 20px;
    font-size: 30px;
    outline: 0;
}

#game-home .btn-game-sub:hover {
    border-color: rgb(2, 151, 156);
}

#game-home .btn-game-mul {
    background-color: transparent;
    border: 1px solid rgb(7, 91, 160);
    transition: all 1s ease;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 60px;
    border-radius: 20px;
    font-size: 30px;
    outline: 0;
}

#game-home .btn-game-mul:hover {
    border-color: rgb(2, 151, 156);
}

#game-home .btn-game-div {
    background-color: transparent;
    border: 1px solid rgb(160, 7, 45);
    transition: all 1s ease;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 60px;
    border-radius: 20px;
    font-size: 30px;
    outline: 0;
}

#game-home .btn-game-div:hover {
    border-color: rgb(2, 151, 156);
}

#game-home .game-provide-heading {
    margin-left: 200px;
    margin-top: 100px;
}

#game-home .btn-back-home {
    position: absolute;
    top: 470px;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    border: 1px solid rgb(248, 29, 29);
    border-radius: 20px;
    outline: 0;
    transition: all 1s ease;
    font-size: 25px;
    margin-left: 50%;
}

</style>
