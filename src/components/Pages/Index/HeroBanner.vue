<script setup>

</script>

<template>
    <section class="vi__hero-banner">
        <figure class="vi__hero-video">
            <video muted loop playsinline autoplay>
                <source src="@/assets/videos/looping_animation.mp4" type="video/mp4" />
            </video>
        </figure>
        <div class="vi__overlay">
            <div class="vi__container">
                <div class="vi__content">
                    <h1>Protecting Ideas, Securing Dreams & Supporting the Inventors of Tomorrow</h1>
                    <p>Navigating intellectual property law can be daunting so let out team handle the entire process while do what you are best at.</p>
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
    display: flex;
    flex-wrap: wrap;

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
}
</styles>