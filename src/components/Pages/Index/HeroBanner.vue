<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="vi__hero-banner">
        <div class="vi__container desktop">
            <figure class="vi__hero-video">
                <video muted loop playsinline autoplay>
                    <source src="@/assets/videos/looping_animation.mp4" type="video/mp4" />
                </video>
            </figure>
            <div class="vi__overlay">
                <div class="vi__container">
                    <div class="vi__content">
                        <h1>Protecting <span class="text-green">Ideas</span>, Securing <span class="text-green">Dreams</span> & Supporting the Inventors of Tomorrow</h1>
                        <p class="text-hero">Navigating intellectual property law can be daunting so let out team handle the entire
                            process while do what you love.</p>
                        <RouterLink class="vi__btn" to="#">
                            <span class="icon left">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 12H17.5M17.5 12L12.9118 8M17.5 12L12.9118 16" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            View Our Services
                        </RouterLink>
                        <RouterLink class="vi__btn minimal" to="#">
                            Meet the Team
                            <span class="icon right">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 12H17.5M17.5 12L12.9118 8M17.5 12L12.9118 16" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<styles scoped lang="scss">
@import '@/assets/scss/variables';

.vi__hero-banner {
    position: relative;
    padding-top: 158px;
    padding-bottom: 86px;
    
    .vi__container.desktop {
        display: flex;
        flex-wrap: wrap;
    }

    .vi__hero-video {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 40vh;
        min-height: 240px;
        overflow: hidden;
        order: 1;
        position: relative;

        video {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
            object-fit: cover;
            min-width: 100%;
            min-height: 100%;
        }
    }

    .vi__overlay {
        position: relative;
        margin-bottom: 72px;
    }

    .vi__content {
        position: relative;

        h1 {
            font-size: 8vw;
        }
    }

    @media #{$m-and-up} {
        .vi__content {
            h1 {
                font-size: 8vw;
            }
        }
    }

    @media #{$l-and-up} {
        .vi__content {
            h1 {
                font-size: 5vw;
            }
        }
    }

    @media #{$xl-and-up} {
        padding-top: 264px;
        padding-bottom: 156px;
        height: 100vh;
        min-height: 960px;
        display: flex;
        align-items: center;
        overflow-x: hidden;
        
        .vi__container.desktop {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

        .vi__hero-video {
            position: absolute;
            right: -31.4vw;
            top: 20vh;
            height: 100%;
            width: 62.8vw;
            height: 62.8vw;
            border-radius: 50%;
            margin-left: auto;
        }

        .vi__overlay {
            order: 0;
            flex: 0 0 calc(100% - 10vw);

            .vi__container {
                margin-left: 0;
            }

            .vi__content p {
                max-width: 600px;
            }
        }

        .vi__content {
            h1 {
                font-size: 4.5vw;
            }
        }
    }

    @media only screen and (min-width: 1800px) {
        .vi__hero-video {
            position: absolute;
            right: -26vw;
            top: 20vh;
            height: 100%;
            width: 62.8vw;
            height: 62.8vw;
            border-radius: 50%;
            margin-left: auto;
        }

        .vi__content {
            h1 {
                font-size: 4vw;
            }
        }
    }
}
</styles>