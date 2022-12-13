<script setup>
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger, ExpoScaleEase);

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