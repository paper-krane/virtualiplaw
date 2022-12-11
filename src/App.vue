<script setup>
// Imports
import { provide, ref } from 'vue';
import { RouterView } from 'vue-router';

// Components
import HeaderVue from '@/components/Header/Header.vue';

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
            <RouterView />
        </main>
        <footer id="vi__footer">

        </footer>
    </div>
</template>

<style scoped lang="scss">

</style>
