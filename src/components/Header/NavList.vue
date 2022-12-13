<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    hasSpacer: {
        type: Boolean,
        default: false
    },
    btnSmall: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
<nav>
    <ul>
        <li>
            <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="#">Services</RouterLink>
        </li>
        <li>
            <RouterLink to="#">About</RouterLink>
        </li>
        <li>
            <RouterLink to="#">Contact</RouterLink>
        </li>
        <li v-if="hasSpacer" class="vi__spacer"></li>
        <li>
            <RouterLink to="#" class="vi__btn" :class="{'small outline': btnSmall}">Schedule a Consultation</RouterLink>
        </li>
    </ul>
</nav>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

nav a:not(.vi__btn) {
    font-family: $heading-font-stack;
}
.vi__spacer {
    margin-bottom: 3rem;
}
</style>