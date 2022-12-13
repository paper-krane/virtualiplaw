<script setup>
import { ref, onMounted } from 'vue';

import { gsap } from 'gsap';


// Components
import NavList from './NavList.vue';

const offCavnasNavRef = ref(null);

onMounted(() => {
    gsap.to(offCavnasNavRef.value.querySelectorAll('a'), {
        translateY: 0,
        stagger: .2,
        delay: .5,
        opacity: 1
    });
});
</script>

<template>
    <aside id="vi__offcanvas-nav" ref="offCavnasNavRef">
        <div class="vi__container">
            <NavList :hasSpacer="true" :btnSmall="false" />
        </div>
    </aside>
</template>

<style lang="scss">
@import '@/assets/scss/variables';

#vi__offcanvas-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba($site-bg, .8);
    z-index: 99;
    padding-top: 186px;
    backdrop-filter: blur(10px);

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            overflow: hidden;
            text-align: center;
        }

        a:not(.vi__btn), a:not(.vi__btn):visited {
            display: inline-block;
            font-family: $heading-font-stack;
            font-size: 2rem;
            color: $font-color;
            height: 52px;
            line-height: 52px;
            transform: translateY(110%);
            opacity: 0;
        } 

        a.vi__btn, a.vi__btn:visited {
            font-size: 1rem;
            transform: translateY(100%);
            opacity: 0;
        }
    }

    @media #{$xl-and-up} {
        display: none !important;
    }
}
</style>