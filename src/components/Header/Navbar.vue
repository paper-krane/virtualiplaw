<script setup>
// Imports
import { inject, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import NavList from '@/components/Header/NavList.vue';

gsap.registerPlugin(ScrollTrigger);

const navStatus = inject('navStatus');
onMounted(() => {
    ScrollTrigger.create({
        start: 'top -156',
        end: 99999,
        toggleClass: {className: 'vi__not-top', targets: '#vi__navbar'}
    });
});
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
            <a href="tel:603-729-8853" class="vi__phone">
                <svg class="vi__phone-icon" width="24px" height="24px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="ic_fluent_phone_28_regular" fill="#212121" fill-rule="nonzero">
                            <path d="M7.92072596,2.64472005 L9.58060919,2.14438844 C11.1435675,1.67327249 12.8134781,2.43464008 13.4828053,3.92352899 L14.5160823,6.22200834 C15.0865915,7.491081 14.7859439,8.98254111 13.7683291,9.93148073 L11.9633958,11.6146057 C11.9410906,11.6354021 11.9227774,11.6601187 11.9093651,11.6875342 C11.720585,12.0734103 12.0066606,13.1043886 12.9061418,14.6623357 C13.9199541,16.4183102 14.7035571,17.1131712 15.0654726,17.005305 L17.4348517,16.2809111 C18.765101,15.8742119 20.2066891,16.3591908 21.0206203,17.4872349 L22.4880851,19.5210248 C23.440761,20.8413581 23.2694403,22.6628821 22.0872853,23.782427 L20.8252038,24.9776653 C19.9337363,25.8219337 18.6854328,26.1763171 17.4833291,25.9264007 C13.966189,25.1951903 10.8150019,22.3628582 8.00336279,17.4929565 C5.18895293,12.6182556 4.31270988,8.46966127 5.44310245,5.05625686 C5.82703045,3.89692852 6.75144427,2.9971717 7.92072596,2.64472005 Z M8.35362603,4.08089467 C7.65205693,4.29236569 7.09740832,4.83222008 6.86705161,5.52781682 C5.89305385,8.46896164 6.6820141,12.2043134 9.30240089,16.7429565 C11.9202871,21.2772684 14.7578382,23.8276999 17.7886493,24.4578029 C18.5099109,24.6077526 19.2588899,24.3951235 19.7937719,23.888561 L21.0558584,22.6933179 C21.6924034,22.0904861 21.784653,21.1096654 21.2716737,20.3987168 L19.8042088,18.3649269 C19.3659382,17.7575185 18.5896985,17.496376 17.8734103,17.7153679 L15.4990066,18.4412788 C14.1848357,18.833027 12.9496858,17.7377562 11.6071037,15.4123357 C10.4705242,13.4437223 10.075962,12.0217729 10.5619671,11.0283539 C10.6558865,10.8363778 10.7841758,10.6632305 10.9404443,10.5175321 L12.7453325,8.83444937 C13.2932789,8.32348189 13.455166,7.52038798 13.1479688,6.83704116 L12.1146918,4.53856182 C11.7542848,3.7368524 10.8551022,3.32688524 10.0135093,3.58056306 L8.35362603,4.08089467 Z" id="🎨-Color"></path>
                        </g>
                    </g>
                </svg>
                <span class="vi__phone-text">
                    1 (603) 729-8853
                </span>
            </a>
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
    background-color: rgba($site-bg, .9);


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

    .vi__phone {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;

        .vi__phone-icon {
            display: block;
        }

        .vi__phone-text {
            position: absolute;
            left: -999999px;
        }
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
        margin-left: 0;
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
        transition: background-color 0.4s ease, backdrop-filter 0.4s ease, height 0.4s ease;

        &:before, &:after {
            content: none;
        }

        &.vi__not-top {
            height: 108px;
            background-color: rgba($site-bg, .9);
        }

        #vi__logo {
            display: block;
            width: 48px;
            height: 48px;

            img {
                display: block;
            }
        }

        .vi__phone, .vi__phone:visited {
            width: auto;
            height: auto;
            align-items: flex-start;
            margin-left: 3rem;
            padding-left: 3rem;
            position: relative;
            color: $font-color;

            svg path {
                transition: $transition;
            }

            .vi__phone-text {
                position: relative;
                left: auto;
                font-size: .875rem;
                margin-left: 10px;
            }

            &:before {
                content: '';
                width: 1px; 
                height: 24px;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0, -50%);
                background-color: rgba(darken($site-bg, 20%), .5);
            }
        }

        .vi__phone:hover, .vi__phone:focus {
            color: $primary-accent-color;

            svg {
                path {
                    fill: $primary-accent-color;
                }
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

                a:not(.vi__btn):hover, a:not(.vi__btn):focus {
                    color: $primary-accent-color;
                }

                a.vi__btn, a.vi__btn:visited {
                    font-size: .875rem;
                    margin-left: 1.5rem;
                }
            }
        }
    }
}
</style>