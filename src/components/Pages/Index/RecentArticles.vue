<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const articleSectionRef = ref(null);
const articleSliderRef = ref(null);

onMounted(() => {
    const gallery = gsap.to(articleSliderRef.value, {
        duration: 100,
        ease: "none",
        x: `-50%`,
        repeat: -1,
    });

    ScrollTrigger.create({
        trigger: articleSectionRef.value,
        // start: "top top",
        // end: "bottom top",
        onUpdate(self) {
            const velocity = self.getVelocity();
            if (velocity < 0) return;
            const timeScale = 3 + (velocity / 50);
            gsap.timeline()
                .to(gallery, { duration: 0.25, timeScale })
                .to(gallery, { duration: .5, timeScale: 1 });
        }
    });
});
</script>

<template>
    <section class="vi__article-section vi__section" ref="articleSectionRef">
        <div class="vi__article-slider" ref="articleSliderRef">
            <article class="vi__article">
                <RouterLink to="" class="vi__article-link">
                    <figure class="vi__article-image">
                        <img src="@/assets/images/article-1.jpg" alt="">
                    </figure>
                    <div class="vi__article-title">
                        <h5>
                            Always know what you are signing. A guide to reading agreements
                        </h5>
                    </div>
                    <span class="vi__link-to"></span>
                </RouterLink>
            </article>
            <article class="vi__article large">
                <RouterLink to="" class="vi__article-link">
                    <figure class="vi__article-image">
                        <img src="@/assets/images/article-2.jpg" alt="">
                    </figure>
                    <div class="vi__article-title">
                        <h5>
                            Do I really need to patent my idea? Yes... and here is why
                        </h5>
                    </div>
                    <span class="vi__link-to"></span>
                </RouterLink>
            </article>
            <article class="vi__article">
                <RouterLink to="" class="vi__article-link">
                    <figure class="vi__article-image">
                        <img src="@/assets/images/article-3.jpg" alt="">
                    </figure>
                    <div class="vi__article-title">
                        <h5>
                            Understanding the patent laws
                        </h5>
                    </div>
                    <span class="vi__link-to"></span>
                </RouterLink>
            </article>
            <article class="vi__article">
                <RouterLink to="" class="vi__article-link">
                    <figure class="vi__article-image">
                        <img src="@/assets/images/article-4.jpg" alt="">
                    </figure>
                    <div class="vi__article-title">
                        <h5>
                            How to protect your new apps code from being stolen
                        </h5>
                    </div>
                    <span class="vi__link-to"></span>
                </RouterLink>
            </article>
            <!-- Duplicated -->
            <article class="vi__article" aria-hidden="true">
                <RouterLink to="" class="vi__article-link">
                    <figure class="vi__article-image">
                        <img src="@/assets/images/article-1.jpg" alt="">
                    </figure>
                    <div class="vi__article-title">
                        <h5>
                            Always know what you are signing. A guide to reading agreements.
                        </h5>
                    </div>
                    <span class="vi__link-to"></span>
                </RouterLink>
            </article>
            <article class="vi__article large" aria-hidden="true">
                <RouterLink to="" class="vi__article-link">
                    <figure class="vi__article-image">
                        <img src="@/assets/images/article-2.jpg" alt="">
                    </figure>
                    <div class="vi__article-title">
                        <h5>
                            Do I really need to patent my idea? Yes... and here is why
                        </h5>
                    </div>
                    <span class="vi__link-to"></span>
                </RouterLink>
            </article>
            <article class="vi__article" aria-hidden="true">
                <RouterLink to="" class="vi__article-link">
                    <figure class="vi__article-image">
                        <img src="@/assets/images/article-3.jpg" alt="">
                    </figure>
                    <div class="vi__article-title">
                        <h5>
                            Understanding the patent laws
                        </h5>
                    </div>
                    <span class="vi__link-to"></span>
                </RouterLink>
            </article>
            <article class="vi__article" aria-hidden="true">
                <RouterLink to="" class="vi__article-link">
                    <figure class="vi__article-image">
                        <img src="@/assets/images/article-4.jpg" alt="">
                    </figure>
                    <div class="vi__article-title">
                        <h5>
                            How to protect your new apps code from being stolen
                        </h5>
                    </div>
                    <span class="vi__link-to"></span>
                </RouterLink>
            </article>
        </div>
    </section>
</template>

<styles scoped lang="scss">
@import '@/assets/scss/variables';

.vi__article-slider {
    position: relative;
    display: inline-flex;
    align-items: center;

    figure {
        margin: 0;
        padding: 0;
    }

    .vi__article {
        width: 54vw;
        padding: 0 12px;
        flex-grow: 0;
        flex-shrink: 0;

        a, a:visited {
            display: block;
            position: relative;
            color: $white;

            img {
                border-radius: 32px;
            }

            .vi__article-title {
                position: absolute;
                display: flex;
                align-items: flex-end;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba($primary-color, .7);
                backdrop-filter: blur(10px);
                padding: 1rem;
                opacity: 0;
                transition: $transition;
                border-radius: 32px;

                h5 {
                    font-size: 1.15rem;
                    margin-bottom: 0;
                    flex: 0 0 100%;
                }
            }
        }

        a:hover, a:focus {
            .vi__article-title {
                opacity: 1;
            }
        }

        &.large {
            width: 82vw;
        }

        img {
            display: block;
        }
    }

    @media #{$l-and-up} {
        .vi__article {
            width: 23.33333333337vw;

            &.large {
                width: 30vw;
                height: 45vw;
            }

            a, a:visited {
                .vi__link-to {
                    display: block;
                    width: 52px;
                    height: 52px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: transparent;
                    z-index: 1;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    transition: $transition;
                }
            }

            a:hover, a:focus {
                .vi__link-to {
                    background-color: transparent;
                }
            }
        }
    }

    @media #{$xxl-and-up} {
        .vi__article {
            padding: 0 24px;

            a, a:visited {
                .vi__article-title {
                    padding: 2rem 2rem;

                    h5 {
                        font-size: 1.25rem;
                    }
                }
            }
        }
    }
}

</styles>