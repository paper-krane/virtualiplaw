<script setup>
// Imports
import { inject } from 'vue';
import { RouterLink } from 'vue-router';

const navStatus = inject('navStatus');
</script>

<template>
<div id="vi__navbar">
    <div class="vi__container">
        <div class="vi__mobile-nav">
            <a @click.prevent="navStatus = !navStatus" tabindex="0" class="vi__nav-toggle" :class="{'active': navStatus}" aria-label="Toggle main menu">
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
            <RouterLink to="/" id="vi__logo">
                <img src="@/assets/images/logo.svg" alt="Virtual IP Law, LLC" />
            </RouterLink>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';

#vi__navbar {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 86px;
    display: flex;
    align-items: center;
    background-color: rgba($site-bg, .5);
    backdrop-filter: blur(8px);


    &:before {
        content: '';
        position: absolute;
        width: 95%;
        height: 1px;
        right: 0;
        bottom: 0;
        background-color: rgba($gold, .5);
        pointer-events: none;
    }

    &:after {
        content: '';
        position: absolute;
        width: 16px;
        height: 2px;
        left: 5%;
        bottom: 0;
        background-color: lighten($font-color, 30%);
        pointer-events: none;
    }

    .vi__mobile-nav {
        display: flex;
        align-items: center;
    }

    #vi__logo {
        display: block;
        width: 32px;
        height: 32px;

        img {
            display: block;
        }
    }

    .vi__nav-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 64px;
        height: 64px;
        margin-left: auto;
        cursor: pointer;
        order: 1;

        div {
            width: 20px;
            height: 14px;
            position: relative;
            transition: $transition;
        }

        span {
            position: absolute;
            display: block;
            width: 20px;
            height: 2px;
            background-color: $font-color;
            top: 0;
            left: 0;
            transition: $transition;

            &:nth-child(2) {
                top: 50%;
                transform: translate(0, -50%);
            }

            &:nth-child(3) {
                top: 100%;
                transform: translate(0, -100%);
            }
        }

        // &:hover {
        //     div {
        //         transform: rotate(90deg);
        //     }
        // }

        &.active {
            span {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);

                &:nth-child(2), &:nth-child(3) {
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
            }
        }
    }

    @media #{$xl-and-up} {
        height: 156px;

        &:before {
            content: '';
            position: absolute;
            width: 92.5%;
            height: 1px;
            right: 0;
            bottom: 0;
            background-color: rgba($gold, .5);
            pointer-events: none;
        }

        &:after {
            content: '';
            position: absolute;
            width: 16px;
            height: 2px;
            left: 7.5%;
            bottom: 0;
            background-color: lighten($font-color, 30%);
            pointer-events: none;
        }

        #vi__logo {
            display: block;
            width: 48px;
            height: 48px;

            img {
                display: block;
            }
        }

        .vi__nav-toggle {
            display: none;
        }
    }
}
</style>