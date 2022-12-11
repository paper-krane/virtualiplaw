<script setup>
// Imports
import { inject } from 'vue';
import { RouterLink } from 'vue-router';

// Components
import NavList from '@/components/Header/NavList.vue';

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
        <div class="vi__desktop-nav">
            <NavList />
        </div>
    </div>
</div>
</template>

<style lang="scss">
@import '@/assets/scss/variables';

#vi__navbar {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 86px;
    display: flex;
    align-items: center;
    background-color: rgba($site-bg, .1);
    backdrop-filter: blur(10px);


    &:before {
        content: '';
        position: absolute;
        width: 95%;
        height: 1px;
        right: 0;
        bottom: 0;
        background-color: rgba(darken($site-bg, 10%), .5);
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

    .vi__desktop-nav {
        display: none;
    }

    @media #{$xl-and-up} {
        height: 156px;
        backdrop-filter: none;
        background-color: transparent;

        &:before {
            content: none;
            // position: absolute;
            // width: 92.5%;
            // height: 1px;
            // right: 0;
            // bottom: 0;
            // background-color: rgba($gold, .5);
            // pointer-events: none;
        }

        &:after {
            content: none;
            // position: absolute;
            // width: 16px;
            // height: 2px;
            // left: 7.5%;
            // bottom: 0;
            // background-color: lighten($font-color, 30%);
            // pointer-events: none;
        }

        #vi__logo {
            display: block;
            width: 48px;
            height: 48px;

            img {
                display: block;
            }
        }

        .vi__container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

        .vi__nav-toggle {
            display: none;
        }

        .vi__desktop-nav {
            margin-left: auto;
            display: block;

            ul {
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;
                list-style: none;

                a:not(.vi__btn), a:not(.vi__btn):visited {
                    display: block;
                    height: 42px;
                    line-height: 42px;
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                    // text-transform: uppercase;
                    // letter-spacing: .2em;
                    font-size: .825rem;
                    color: $font-color;
                }

                a.vi__btn, a.vi__btn:visited {
                    font-size: .825rem;
                    margin-left: 1.5rem;
                }
            }
        }
    }
}
</style>