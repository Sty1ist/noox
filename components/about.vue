<template>
<section class="about" >
    <div class="about__content">
        <div class="about__text">
            <h2 class="about__title" data-aos="fade-left" data-aos-delay="100">{{ content.title }}</h2>
            <p class="about__description" data-aos="fade-left" data-aos-delay="200">{{ content.description1 }}</p>
            <h3 v-if="content.description2Title" class="about__description-title" data-aos="fade-left" data-aos-delay="250">
                {{ content.description2Title }}
            </h3>
            <li v-for="(item, index) in content.description2" 
                :key="index" 
                class="about__description" 
                data-aos="fade-left"
                :data-aos-delay="300 + index * 100"
            >
                {{ item }}
            </li>
            <div class="about__stats" data-aos="fade-up" data-aos-delay="500">
                <div v-for="(stat, index) in content.stats" :key="index" class="about__stat-item" data-aos="fade-up" :data-aos-delay="600 + index * 400">
                    <span class="about__stat-number">{{ stat.number }}</span>
                    <span class="about__stat-label">{{ stat.label }}</span>
                </div>
            </div>
        </div>
        <div class="about__image" data-aos="fade-right" data-aos-delay="700">
            <img :src="content.imageSrc" :alt="content.imageAlt" />
        </div>
    </div>
</section>
</template>

  
<script>
export default {
    name: "About",
    props: ['content'],
};
</script>

  
<style lang="scss" scoped>
.about {
    display: flex;
    align-items: center;
    padding: 120px;
    padding-top: 0;
    background-color: var(--Light-Background---Dark-Headlines, #E5E3DD);

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
    }

    &__text {
        max-width: 60%;
        margin-right: 0;
    }

    &__title {
        font-family: "SangBleu Sunrise";
        font-size: 64px;
        font-weight: 400;
        margin-bottom: 16px;
        color: var(--Dark-Background---Light-Headlines, #111314);
    }

    &__description {
        font-family: "MacPaw Fixel Display";
        font-size: 18px;
        font-weight: 400;
        line-height: 1.6;
        margin-bottom: 16px;
        color: var(--Stroke-button---Light-Body, #4B4B4B);
    }

    &__description-title {
        font-family: "SangBleu Sunrise";
        font-size: 26px;
        font-weight: 400;
        margin-bottom: 16px;
        color: var(--Dark-Background---Light-Headlines, #111314);
        margin-top: 24px;
    }

    &__stats {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
    }

    &__stat-item {
        text-align: center;
    }

    &__stat-number {
        font-family: "SangBleu Sunrise";
        font-size: 48px;
        font-weight: 400;
        color: var(--Dark-Background---Light-Headlines, #111314);
        display: block;
        margin-bottom: 8px;
    }

    &__stat-label {
        font-family: "MacPaw Fixel Display";
        font-size: 16px;
        color: var(--Stroke-button---Light-Body, #4B4B4B);
    }

    &__image {
        flex: 1;
        max-width: 500px;

        img {
            width: 100%;
            height: 637px;
            border-radius: 0 0px 306.5px 0px;
            object-fit: cover;
            filter: brightness(0.9) contrast(1.1) saturate(1.1);
            pointer-events: none;
            user-select: none;
        }
    }
}

@media (max-width: 1440px) {
    .about {
        padding: 80px 48px;
        padding-top: 0;

        &__title {
            font-size: 48px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            margin-bottom: 16px;
        }

        &__description {
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
        }

        &__stats {
            // justify-content: space-between;
            flex-direction: column;
            margin-top: 32px;
        }

        &__stat-item {
            text-align: start;
            margin-bottom: 48px;
        }

        &__stat-number {
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 124%;
            margin-bottom: 8px;
        }

        &__stat-label {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
        }

        &__image {
            flex: 1;
            max-width: 500px;

            img {
                width: 240px;
                border-radius: 0 0px 306.5px 0px;
            }
        }
    }
}

@media (max-width: 767px) {
    .about {
        padding: 48px 24px;
        padding-top: 0;

        &__content {
            flex-direction: row;
        }

        &__title {
            font-size: 32px;
            margin-bottom: 16px;
        }

        &__description {
            font-size: 16px;
            line-height: 140%;
        }

        &__text {
            max-width: 100%;
        }

        &__description-title {
            font-size: 24px;
            margin-bottom: 8px;
            margin-top: 16px;
        }

        &__stats {
            flex-direction: column;
            margin-top: 32px;
        }

        &__stat-item {
            text-align: start;
            margin-bottom: 48px;
        }

        &__stat-number {
            font-size: 32px;
            margin-bottom: 8px;
        }

        &__stat-label {
            font-size: 14px;
        }

        &__image {
            display: none;
        }
    }
}
</style>
