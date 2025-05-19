<template>
    <section class="information" >
        <div class="information__header" data-aos="fade-right" data-aos-delay="100">
            <h2 v-if="content.title" class="information__title" data-aos="fade-right" data-aos-delay="200">{{ content.title }}</h2>
            <p v-if="content.description" class="information__description" data-aos="fade-right" data-aos-delay="300">
                {{ content.description }}
            </p>
        </div>
        <div class="information__list">
            <div 
              v-for="(item, index) in content.items" 
              :key="index" 
              class="information__item"
              data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
               :data-aos-delay="200 + index * 120"
            >
                <div class="information__container">
                    <div class="information__left">
                        <div class="information__image" data-aos="fade-right" :data-aos-delay="300">
                            <img :src="item.img" :alt="item.title" data-aos="fade" data-aos-duration="1000" data-aos-delay="500"/>
                        </div>
                        <div class="information__content" data-aos="fade-right" :data-aos-delay="400 + index * 120">
                            <h3 class="information__item-title">{{ item.title }}</h3>
                            <p class="information__item-description">{{ item.description }}</p>
                        </div>
                    </div>
                    <div class="information__right" data-aos="zoom-in" :data-aos-delay="900 + index * 180" data-aos-duration="1200">
                        <div class="information__icon">
                            <img src="~/assets/images/information/tick.svg" alt="Check" />
                        </div>
                    </div>
                </div>
                <div v-if="index < content.items.length - 1" 
                    class="information__divider" 
                    data-aos="slide-right" 
                    :data-aos-delay="700 + index * 170">
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
  name: "Information",
  props: ['content'],
  data() {
    return {
        items: [
            {
                img: require('@/assets/images/information/film-camera.svg'),
                title: "Фото на документ",
                description: "Фото у форматі tiff або raw"
            },
            {
                img: require('@/assets/images/information/contract.svg'),
                title: "Ідентифікаційний код (ІНН)",
                description: "Скан-копія у форматі PDF або PNG"
            },
            {
                img: require('@/assets/images/information/pasport.svg'),
                title: "Паспорт громадянина України",
                description: "Всі сторінки у форматі PDF"
            },
            {
                img: require('@/assets/images/information/travel.svg'),
                title: "Чинний закордонний паспорт",
                description: "Скан-копія у форматі PDF"
            },
            {
                img: require('@/assets/images/information/video-call.svg'),
                title: "Відео",
                description: "Відео з поворотом голови праворуч та ліворуч"
            }
        ]
    };
}

};
</script>

<style lang="scss" scoped>
.information__divider {
  height: 1px;
  background-color: var(--Dark-Body, #ACACAD);
}


.information {
    padding: 120px;
    padding-bottom: 60px;
    background: var(--Light-Background---Dark-Headlines, #E5E3DD);

    &__header {
        margin-bottom: 20px;
    }

    &__container {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
    }

    &__left {
        display: flex;
    }

    &__right {
        display: flex;
        align-items: center;
        margin-left: 12px;
    }

    &__icon {
        width: 42px;

        img {
            width: 100%;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__image {
        display: flex;
        width: 120px;
        height: 120px;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--Dark-Body, #ACACAD);
        padding: 15px;
        margin-right: 32px;

        img {
            width: 100%;
            height: auto;
            filter: brightness(0.9) contrast(1.1) saturate(1.1);
        }
    }

    &__title {
        color: var(--Dark-Background---Light-Headlines, #111314);
        font-family: "SangBleu Sunrise";
        font-size: 64px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        margin-bottom: 16px;
    }

    &__description {
        color: var(--Stroke-button---Light-Body, #4B4B4B);
        font-family: "MacPaw Fixel Display";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }

    &__list {
        display: flex;
        flex-direction: column;
        // gap: 20px;
    }

    &__item {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        overflow: hidden;

        &-title {
            color: var(--Dark-Background---Light-Headlines, #111314);
            font-family: "SangBleu Sunrise";
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 132%;
            margin-bottom: 16px;
        }

        &-description {
            color: var(--Stroke-button---Light-Body, #4B4B4B);
            font-family: "MacPaw Fixel Display";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
        }
    }
}

@media (max-width: 1440px) {
    .information {
        padding: 80px 48px;
        padding-bottom: 40px;

        &__header {
            margin-bottom: 48px;
        }

        &__icon {
            width: 42px;

            img {
                width: 100%;
            }
        }

        &__image {
            padding: 15px;
            margin-right: 24px;

            img {
                width: 100%;
                height: auto;
            }
        }

        &__title {
            font-size: 48px;
        }

        &__description {
            font-size: 18px;
        }

        &__container {
            padding: 32px 0;
        }

        &__item {

            &-title {
                font-size: 16px;
            }

            &-description {
                font-size: 16px;
            }
        }
    }
}

@media (max-width: 767px) {
    .information {
        padding:  48px 24px;
        padding-bottom: 24px;

        &__header {
            margin-bottom: 32px;
        }

        &__icon {
            display: none;
        }

        &__image {
            width: 80px;
            min-width: 80px;
            height: 80px;
            padding: 8px;
            margin-right: 16px;
        }

        &__title {
            font-size: 32px;
            margin-bottom: 16px;
        }

        &__description {
            font-size: 16px;
            line-height: 140%;
        }

        &__container {
            padding: 24px 0;
        }

        &__item {
            &-title {
                font-size: 20px;
                margin-bottom: 8px;
            }

            &-description {
                font-size: 14px;
                line-height: 140%;
            }
        }
    }
}


</style>
