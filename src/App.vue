<script setup>
// Imports
import { provide, ref } from 'vue';
import { RouterView } from 'vue-router';

// Components
import HeaderVue from '@/components/Header/Header.vue';
import CursorVue from '@/components/Utilities/Cursor.vue';
import HeroBanner from '@/components/Pages/Index/HeroBanner.vue';
import Services from '@/components/Pages/Index/Services.vue';
import CallToAction from '@/components/Pages/Index/CallToAction.vue';
import RecentArticles from '@/components/Pages/Index/RecentArticles.vue';
import Faqs from '@/components/Pages/Index/Faqs.vue';


// Variables
const navStatus = ref(false);
const page = ref(null);

// Provide nav status
provide('navStatus', navStatus);
</script>

<template>
    <HeaderVue />
    <div id="vi__page" ref="page">
        <main id="vi__content">
            <HeroBanner />
            <Services />
            <RecentArticles />
            <!-- <Faqs /> -->
            <CallToAction />
        </main>
        <footer id="vi__footer">

        </footer>
    </div>
    <CursorVue />
</template>

<style scoped lang="scss">

</style>
