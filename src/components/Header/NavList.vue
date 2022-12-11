<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<nav>
    <ul>
        <li>
            <RouterLink to="#">Services</RouterLink>
        </li>
        <li>
            <RouterLink to="#">About</RouterLink>
        </li>
        <li>
            <RouterLink to="#">Contact</RouterLink>
        </li>
        <li>
            <RouterLink to="#" class="vi__btn small outline">Schedule a Consultation</RouterLink>
        </li>
    </ul>
</nav>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

nav a:not(.vi__btn) {
    font-family: $heading-font-stack;
}
</style>