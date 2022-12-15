<script setup>
import { onMounted, ref } from 'vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cursorRef = ref(null);

onMounted(() => {
    const mm = gsap.matchMedia();

    window.addEventListener('mousemove', (e) => {
        mm.add("(min-width: 1280px)", () => {
            gsap.to(cursorRef.value, {
                top: e.clientY,
                left: e.clientX,
                display: 'block',
                ease: "power2.out",
                duration: .5
            });
        });
        if (e.path[0].tagName.toLowerCase() === "a") {
            mm.add("(min-width: 1280px)", () => {
                gsap.to(cursorRef.value, {
                    scale: 0,
                    ease: "power2.out"
                });
            });
        } else {
            mm.add("(min-width: 1280px)", () => {
                gsap.to(cursorRef.value, {
                    scale: 1,
                    ease: "power2.out"
                }); 
            });
        }
    });

    document.addEventListener('mouseleave', (e) => {
        mm.add("(min-width: 1280px)", () => {
            gsap.to(cursorRef.value, {
                scale: 0,
                ease: "power2.out"
            });
        });
    })
});
</script>

<template>
    <div id="vi__cursor" aria-hidden="true" ref="cursorRef">
    </div>
</template>

<styles scoped lang="scss">
@import '@/assets/scss/variables';

#vi__cursor {
    @media #{$xl-and-up} {
        position: fixed;
        top: 0;
        width: 32px;
        height: 32px;
        display: none;
        overflow: visible;
        border-radius: 50%;
        background-color: rgba($site-bg, .8);
        transform: translate(-50%, -50%);
        mix-blend-mode: difference;
        pointer-events: none;
        z-index: 101;
    }
}
</styles>