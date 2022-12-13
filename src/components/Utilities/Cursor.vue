<script setup>
import { onMounted } from 'vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    
});
</script>

<template>
    <div id="vi__cursor" aria-hidden="true" ref="cursorRef">
        <div id="vi__cursor-interior"></div>
    </div>
</template>

<styles scoped lang="scss">
@import '@/assets/scss/variables';


</styles>