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
                        <h1>Protecting Ideas, Securing Dreams & Supporting the Inventors of Tomorrow</h1>
                        <p>Navigating intellectual property law can be daunting so let out team handle the entire
                            process while do what you love.</p>
                        <RouterLink class="vi__btn" to="#">
                            View Our Services
                        </RouterLink>
                        <RouterLink class="vi__btn minimal" to="#">
                            Meet the Team
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
            bottom: -20vw;
            height: 100%;
            width: 62.8vw;
            height: 62.8vw;
            border-radius: 50%;
            margin-left: auto;
        }

        .vi__overlay {
            order: 0;
            flex: 0 0 calc(100% - 20vw);

            .vi__container {
                margin-left: 0;
            }

            .vi__content p {
                max-width: 600px;
            }
        }

        // .vi__content {
        //     position: relative;
        // }
    }
}
</styles>