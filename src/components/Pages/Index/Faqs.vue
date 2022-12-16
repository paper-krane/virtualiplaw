<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExpoScaleEase } from "gsap/EasePack";

gsap.registerPlugin(ScrollTrigger, ExpoScaleEase);

const faqSectionRef = ref(null);

onMounted(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
        
    });
});
</script>

<template>
    <section class="vi__faq-banner vi__section" ref="faqSectionRef">
        <!-- faqs section -->
    </section>
</template>

<styles scoped lang="scss">
@import '@/assets/scss/variables';


</styles>