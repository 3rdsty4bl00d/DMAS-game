<template>
  <div id="game-console">
    <!-- 
      All the stuffs go in here
      inside of the game-console id
     -->
     <div class="container">
       <!-- this is the main container for all the pages -->
       <div class="row">
         <!-- 
           this is the header row
           which will be constant 
           or fixed through out the pages
          -->
          <app-header></app-header>
       </div>
       <div class="row">
         <!-- 
           now, this is the place where,
           we will be putting all our stuffs
          -->
          <transition 
            @before-enter="beforeEnter" 
            @enter="enter" 
            @leave="leave"
          >
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
       </div>
     </div>
  </div>
</template>

<script>

import Header from './components/Header.vue';

export default {
    components: {
      appHeader: Header
    },
    methods: {
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
      done();
    }
  }
}
</script>

<style>

.container {
  position: relative;
  height: 100%;
  width: 100%;
}

</style>
