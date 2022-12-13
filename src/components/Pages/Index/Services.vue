<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExpoScaleEase } from "gsap/EasePack";

gsap.registerPlugin(ScrollTrigger, ExpoScaleEase);

onMounted(() => {
    
});
</script>

<template>
    <section class="vi__services-section">
        
    </section>
</template>

<styles scoped lang="scss">
@import '@/assets/scss/variables';

.vi__services-section {
    min-height: 100vh;
}
</styles>