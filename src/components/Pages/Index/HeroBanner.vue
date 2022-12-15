<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExpoScaleEase } from "gsap/EasePack";

gsap.registerPlugin(ScrollTrigger, ExpoScaleEase);

const sectionRef = ref(null);
const imageRef = ref(null);
const videoRef = ref(null);

onMounted(() => {
    const mm = gsap.matchMedia();
    const slideLeft = document.querySelectorAll('.vi__slide-left');

    mm.add("(min-width: 1280px)", () => {
        const tl = gsap.timeline();

        tl.from(slideLeft, {
            opacity: 0,
            translateX: 64,
            duration: 1,
            stagger: 0.15
        }).from(videoRef.value, {
            delay: -1,
            opacity: 0,
            scale: .8,
            duration: 3,
            ease: "power4.out"
        });

        gsap.to(imageRef.value, {
            translateY: '-60px',
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.value,
                start: "top 20vh",
                scrub: 2,
            }
        });

        gsap.to(videoRef.value, {
            translateY: '-240px',
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.value,
                start: "top 20vh",
                scrub: 2,
            }
        });
    });
});
</script>

<template>
    <section class="vi__hero-banner" ref="sectionRef">
        <div class="vi__container desktop">
            <figure ref="imageRef" class="vi__hero-image-accent">
                <img src="@/assets/images/background-dots.png" alt="An abstract background of dots"/>
            </figure>
            <figure ref="videoRef" class="vi__hero-video">
                <video muted loop playsinline autoplay>
                    <source src="@/assets/videos/hero-video_H.264.mp4" type="video/mp4" />
                </video>
            </figure>
            <div class="vi__overlay">
                <div class="vi__container">
                    <div class="vi__content">
                        <h1 class="vi__slide-left">Protecting <span class="text-green">Ideas</span>, Securing <span class="text-green">Dreams</span> & Supporting the Inventors of Tomorrow</h1>
                        <p class="text-hero vi__slide-left">Navigating intellectual property law can be daunting so let out team handle the entire
                            process while do what you love.</p>
                        <RouterLink class="vi__btn vi__slide-left" to="#">
                            <span class="icon left">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 12H17.5M17.5 12L12.9118 8M17.5 12L12.9118 16" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            View Our Services
                        </RouterLink>
                        <RouterLink class="vi__btn minimal vi__slide-left" to="#">
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
    
    .vi__container.desktop {
        display: flex;
        flex-wrap: wrap;
    }

    .vi__hero-image-accent {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            opacity: .1;
            overflow: hidden;

            img {
                object-fit: contain;
                object-position: 50% 20%;
                width: 100%;
                height: 100%;
            }
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
            position: relative;
        }

        p {
            position: relative;
        }
    }

    // .vi__slide-left {
    //     display: inline-block;
    //     position: absolute;
    //     width: 0;
    //     height: 100%;
    //     background-color: $site-bg;
    //     pointer-events: none;
    // }

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
        
        .vi__container.desktop {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

        .vi__hero-image-accent {
            img {
                object-fit: cover;
                object-position: 50% 50%;
                width: 100%;
                height: 100%;
            }
        }

        .vi__hero-video {
            position: absolute;
            right: -30vw;
            top: 24vh;
            height: 100%;
            width: 62.8vw;
            height: 62.8vw;
            max-height: 1400px;
            border-radius: 64px 0 0 64px;
            margin-left: auto;

            video {
                object-position: 80% 100%;
            }
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
            right: -24vw;
            top: 20vh;
            height: 100%;
            width: 62.8vw;
            height: 62.8vw;
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