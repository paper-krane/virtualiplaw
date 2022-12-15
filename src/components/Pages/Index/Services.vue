<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExpoScaleEase } from "gsap/EasePack";

gsap.registerPlugin(ScrollTrigger, ExpoScaleEase);

const servicesSection = ref(null);
const parallaxHeaderRef = ref(null);

onMounted(() => {
    gsap.from(parallaxHeaderRef.value, {
        translateY: 240,
        scrollTrigger: {
            target: servicesSection.value,
            scrub: 2
        }
    })
});
</script>

<template>
    <section class="vi__services-section vi__section" ref="servicesSection">
        <div class="vi__container extra-large vi__heading">
            <h3 ref="parallaxHeaderRef">Services</h3>
        </div>
        <div class="vi__container extra-large flex">
            <div class="vi__service">
                <div class="vi__service-count">01</div>
                <h2>Patent Law</h2>
                <p>Preparing a patent application for your invention or technological breakthrough requires careful planning and organization which is exactly why we have created this firm. We love handling the technical details leaving you to continue creating and building!</p>
                <RouterLink to="" class="vi__btn minimal-line small">
                    Learn More
                    <span class="icon right">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 12H17.5M17.5 12L12.9118 8M17.5 12L12.9118 16" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </RouterLink>
            </div>
            <div class="vi__service">
                <div class="vi__service-count">02</div>
                <h2>Legal Analysis</h2>
                <p>With over 60 years of combined experience in the field of performing analysis and opinion rendering – whether it is infringement, freedom-to-operate (non-infringement), invalidity, patentability, or another related matter, we will help ensure you are free to practice your product.</p>
                <RouterLink to="" class="vi__btn minimal-line small">
                    Learn More
                    <span class="icon right">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 12H17.5M17.5 12L12.9118 8M17.5 12L12.9118 16" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </RouterLink>
            </div>
            <div class="vi__service">
                <div class="vi__service-count">03</div>
                <h2>License Agreements</h2>
                <p>We can review and/or help you prepare a license agreement, or any other appropriate means, to give another individual the right to use your intellectual property, along with reviewing a licensing agreement that has been presented to you, or with creating a licensing agreement as appropriate.</p>
                <RouterLink to="" class="vi__btn minimal-line small">
                    Learn More
                    <span class="icon right">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 12H17.5M17.5 12L12.9118 8M17.5 12L12.9118 16" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </RouterLink>
            </div>
            <div class="vi__service">
                <div class="vi__service-count">04</div>
                <h2>Trademarks & Copyrights</h2>
                <p>We can assist you with searching your trademark and filing your trademark application, whether it is a mark that is currently in use in commerce or a mark that is intended to be used in commerce. You can also file copyrights for your protectable copyright matters.</p>
                <RouterLink to="" class="vi__btn minimal-line small">
                    Learn More
                    <span class="icon right">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 12H17.5M17.5 12L12.9118 8M17.5 12L12.9118 16" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </RouterLink>
            </div>
            <div class="vi__service">
                <div class="vi__service-count">05</div>
                <h2>Legal Counsel & Guidance</h2>
                <p>Let us assist you with any other matters related to protecting your intellectual property, including setting up your corporation, guiding you to the correct resources, or any other matters. Ultimately, we are here for you.</p>
                <RouterLink to="" class="vi__btn minimal-line small">
                    Learn More
                    <span class="icon right">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 12H17.5M17.5 12L12.9118 8M17.5 12L12.9118 16" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </RouterLink>
            </div>
            <!-- <div class="vi__service">
                <div class="vi__service-count">.06</div>
            </div> -->
        </div>
    </section>
</template>

<styles scoped lang="scss">
@import '@/assets/scss/variables';

.vi__heading {
    h3 {
        display: none;
    }

    @media #{$l-and-up} {
        h3 {
            opacity: .075;
            display: block;
            font-size: 14vw;
            margin-bottom: -8vw;
            color: $primary-color;
        }
    }
}

.flex {
    position: relative;
    z-index: 1;
    .vi__service {
        margin-bottom: 3rem;

        .vi__service-count {
            margin-bottom: 1rem;
            opacity: .6;
            font-style: italic;
        }
    }
    @media #{$l-and-up} {
        display: flex;
        justify-items: start;
        flex-wrap: wrap;

        .vi__service {
            flex: 0 0 50%;
            max-width: 50%;
            padding-left: 1rem;
            padding-right: 1rem;

            h2 {
                font-size: 2rem;
            }
        }
    }

    @media #{$xxl-and-up} {
        .vi__service {
            flex: 0 0 33.33333%;
            max-width: 33.33333%;
        }
    }
}
</styles>