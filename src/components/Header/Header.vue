<script setup>
// Imports 
import { gsap } from 'gsap';
import { inject, Transition } from 'vue';

// Components
import Navbar from '@/components/Header/Navbar.vue';
import NavOffcanvas from './NavOffcanvas.vue';

// Variables
const navStatus = inject('navStatus');


// Functions 
const onEnter = (el, done) => {
    gsap.from(el, {
        translateY: '-100%',
        duration: 1.2,
        ease: "power4.out",
        onComplete: done
    });
} 
const onLeave = (el, done) => {
    gsap.to(el, {
        opacity: 0,
        duration: .6,
        ease: "power4.out",
        onComplete: done
    });
}
</script>

<template>
    <header id="vi__header">
        <Navbar />
        <Teleport to="#vi__windows">
            <Transition
                @enter="onEnter"
                @leave="onLeave"
            >
                <NavOffcanvas v-if="navStatus" />
            </Transition>
        </Teleport>
    </header>
</template>

<styles scoped lang="scss">

</styles>