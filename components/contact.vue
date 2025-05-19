<template>
<div id="contact-section"  class="contact-section">
    <div class="contact-section__wrapper">
        <div class="contact-section__content" data-aos="fade-right" data-aos-delay="300">
            <h2 class="contact-section__title" data-aos="fade-up" data-aos-delay="400">{{ content.title }}</h2>
            <p class="contact-section__description" data-aos="fade-up" data-aos-delay="500">{{ content.description }}</p>
            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                <a href="https://t.me/sensetiv812" class="contact-section__link" target="_blank" rel="noopener noreferrer">
                    {{ content.button.buttonText }}
                </a>
            </div>
        </div>
        <div class="contact-section__image-container" data-aos="fade-left" data-aos-delay="700">
            <img :src="content.image.imageSrc" :alt="content.image.imageAlt" class="contact-section__image" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['content'],
};
</script>

<style lang="scss" scoped>
.contact-section {
    padding: 80px 120px;
    background: var(--Dark-Background---Light-Headlines, #111314);
    display: flex;
    align-items: center;
    justify-content: space-between;
     background-image: url('@/assets/images/1.png'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;


    &__wrapper {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    &__content {
        flex: 1;
        padding: 80px;
        max-width: 40%;
        border: 1px solid rgba(53, 56, 56, 0.4); /* напівпрозорий бордер */
        background: rgba(17, 19, 20, 0.4); /* чорний фон з прозорістю */
        backdrop-filter: blur(20px); /* блюр основного фону */
        -webkit-backdrop-filter: blur(20px); /* підтримка для Safari */
        // border: 1px solid var(--Stroke-for-Dark, #353838);
        // background: var(--Dark-Background---Light-Headlines, #111314);
        margin-right: 34px;
        border-radius: 32px;
    }

    &__title {
        color: var(--Light-Background---Dark-Headlines, #E5E3DD);
        // font-family: "SangBleu Sunrise";
        font-family: 'Orbitron', sans-serif;
        font-weight: 700;
        font-size: 64px;
        font-style: normal;
        // font-weight: 400;
        line-height: 120%;
        margin-bottom: 16px;
    }

    &__description {
        color: var(--Dark-Body, #ACACAD);
        // font-family: "MacPaw Fixel Display";
        font-family: 'Orbitron', sans-serif;
        font-weight: 700;
        font-size: 28px;
        font-style: normal;
        // font-weight: 400;
        line-height: 140%;
        margin-bottom: 56px;
    }

    &__link {
        display: block;
        width: 100%;
        border-radius: 40px;
        background: var(--Light-Background---Dark-Headlines, #E5E3DD);
        color: var(--Dark-Background---Light-Headlines, #111314);
        text-align: center;
        // font-family: "MacPaw Fixel Display";
        font-family: 'Orbitron', sans-serif;
        font-weight: 900;
        font-size: 14px;
        font-style: normal;
            // font-weight: 400;
        line-height: 200%; /* 28px */
        text-transform: uppercase;
        padding: 10px;
        text-decoration: none;
        transition: background-color 0.3s;

        &:hover {
            background-color: #777;
        }
    }

    &__image-container {
        height: fit-content;
       
        img {
            width: 384px;
            height: 420px;
            flex: 1;
            // border-radius: 373px 373px 0px 0px;
            border-radius: 0px 0px 0px 281.764px;
            width: 100%;
            background-blend-mode: normal, hard-light, normal;
            object-fit: cover;
        }
    }

    &__image {
        width: 100%;
        height: auto;
    }
}

@media (max-width: 1440px) {
    .contact-section {
        padding: 48px;

        &__content {
            flex: 1;
            padding: 48px;
            max-width: 40%;
            margin-right: 24px;
        }

        &__title {
            font-size: 48px;
        }

        &__description {
            font-size: 16px;
            margin-bottom: 48px;
        }

        &__link {
            width: 100%;
            font-size: 14px;
            padding: 10px;
            font-weight: 900;
        }

        &__image-container {
            height: fit-content;
        
            img {
                // width: 384px;
                width: 100%;
                height: 420px;
            }
        }

        &__image {
            width: 100%;
            height: auto;
        }
    }
}

@media (max-width: 767px) {
    .contact-section {
        padding:32px 24px;

        &__content {
            padding: 24px 32px;
            max-width: 100%;
            margin-right: 0;
            margin-bottom: 24px;
        }

        &__wrapper {
            flex-direction: column;
        }

        &__title {
            font-size: 48px;
        }

        &__description {
            font-size: 16px;
            margin-bottom: 48px;
        }

        &__link {
            max-width: 260px;
            width: 260px;
            font-weight: 900;
        }

        &__image-container {
            height: fit-content;
        
            img {
                width: 100%;
                height: 220px;
                border-radius: 256.971px 256.971px 0px 0px;
            }
        }

        &__image {
            width: 100%;
            height: auto;
        }
    }
}
</style>
