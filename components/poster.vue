<template>
<div class="poster">
    <div class="poster__content">
        <div class="poster__information">
            <h1 v-if="content.title" class="poster__title" data-aos="fade-up" data-aos-delay="200">
                {{ content.title }} </h1>
            <p v-if="content.subtitle" class="poster__subtitle" data-aos="fade-up" data-aos-delay="300">{{ content.subtitle }}</p>
            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
                <button aria-label="scroll to bottom" class="poster__button" @click.prevent="scrollDown">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512.000000pt" height="512.000000pt" viewBox="0,0,256,256">
                        <g fill="#111314" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                            <g transform="translate(0.24659,0.0122) scale(0.5,0.5)">
                                <g transform="translate(0,512) scale(0.1,-0.1)">
                                    <path d="M1179,3387c-64,-34 -102,-93 -107,-166c-2,-32 1,-76 8,-97c10,-32 142,-169 679,-707c446,-447 679,-674 707,-687c50,-25 133,-26 182,-3c24,10 275,254 690,667c500,499 658,663 677,700c90,180 -92,368 -275,285c-34,-15 -180,-154 -613,-587l-567,-567l-578,577c-399,400 -588,582 -614,593c-56,23 -136,19 -189,-8z"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="poster__image" data-aos="fade-left" data-aos-delay="400" data-aos-duration="600">
        <StepForm :content="contentForm" @submitted="$emit('form-submitted')"/>
        <!-- <img :src="content.imageSrc" :alt="content.imageAlt" />
          -->
    </div>
</div>
</template>

<script>
import StepForm from '@/components/StepForm.vue';


export default {
    name: "Poster",
    props: ['content', 'contentForm'],
    components: {
        StepForm
    },
    methods: {
        // scrollDown() {
        //     const element = document.getElementById('contact-section');
            
        //     if (element) {
        //         element.scrollIntoView({
        //             behavior: 'smooth'
        //         });
        //     }
        // }
        scrollDown() {
            const element = document.getElementById('contact-section');
            if (element) {
                window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
                });
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.poster {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: flex-start;
    padding: 120px;
    background-color: #111314;
    color: #e5e3dd;
    height: calc(100vh - 240px);
    background-image: url('@/assets/images/2.png'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20%; 
        background: linear-gradient(to top, rgba(25, 28, 2, 0.76), rgba(0, 0, 0, 0));
        pointer-events: none;
        z-index: 1;
    } 

    &__content {
        flex: 1;
        margin-right: 20px;
        z-index: 2;
        max-width: 45%;
    }

    &__title {
        color: var(--Light-Background---Dark-Headlines, #E5E3DD);
        // font-family: "SangBleu Sunrise";
        // font-family: 'Orbitron', sans-serif;
        font-family: 'Orbitron', 'Russo One', sans-serif;
        // font-weight: 700;
        font-size: 82px;
        font-style: normal;
        font-weight: 400;
        line-height: 110%;
        margin-bottom: 16px;
    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 240px;
        width: 100%;
        border-radius: 40px;
        // background: var(--Light-Background---Dark-Headlines, #E5E3DD);
        color: var(--Dark-Background---Light-Headlines, #111314);
        text-align: center;
        // font-family: "MacPaw Fixel Display";
        // font-family: 'Orbitron', sans-serif;
        font-family: 'Orbitron', 'Russo One', sans-serif;
        font-weight: 400;
        font-size: 14px;
        font-style: normal;
        // font-weight: 400;
        line-height: 200%;
        text-transform: uppercase;
        padding: 10px;
        text-decoration: none;
        transition: background-color 0.3s;
        margin-top: 56px;
        cursor: pointer;
        border: none;
        outline: none;
        border: 1px solid #E5E3DD;
        background-color: transparent;
        z-index: 2;
        width: 100%;
        max-width: 100%;

        svg {
            display: block;
            width: 28px;
            height: 28px;

            g {
                fill: #E5E3DD;
                stroke: #E5E3DD;
            }
        }

        &:hover {
            background-color: #E5E3DD;

            svg {
                g {
                    fill: #111314;
                    stroke: #111314;
                }
            }
        }

    }

    &__subtitle {
        color: var(--Dark-Body, #ACACAD);
        // font-family: "MacPaw Fixel Display";
        // font-family: 'Orbitron', sans-serif;
        font-family: 'Orbitron', 'Russo One', sans-serif;
//   font-weight: 700;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
    }

    &__image {
        width: 100%;
        max-width: 45%;
        
        // img {
        //     object-fit: cover;
        //     border-radius: 0px 0px 0px 281.764px;
        //     width: 100%;
        //     background-blend-mode: normal, hard-light, normal, normal, normal;
        //     filter: brightness(0.9) contrast(1.1) saturate(1.1);
        //     z-index: 2;
        //     pointer-events: none;
        //     user-select: none;
        // }
    }
}

@media (max-width: 1440px) {
    .poster {
        overflow: hidden;
        display: flex;
            flex-direction: column-reverse;
            padding: 64px 48px;
            height: auto;
            padding-top: 128px;

            &::after {
                display: none;
            } 

        &__content {
            width: 100%;
            max-width: 100%;
            margin-right: 0;
        }

        &__title {
            font-size: 64px;
            margin-bottom: 16px;
        }

        &__subtitle {
            font-size: 18px;
        }

        &__image {
            width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: flex-end;
            margin-bottom: 14px;

            img {
                max-width: 410.709px;
                height: 579px;
                border-radius: 0px 0px 0px 281.764px;
            }
        }

        &__information {
            margin-bottom: 32px;
        }
    }
}

@media (max-width: 767px) {
    .poster {
        padding: 24px;
        height: auto;
        padding-top: 118px;

        &__title {
            font-size: 38px;
            margin-bottom: 16px;
        }

        &__subtitle {
            font-size: 16px;
        }

        &__image {
            margin-bottom: 32px;

            img {
                width: 216px;
                height: 306px;
                border-radius: 0px 0px 0px 160px;
            }
        }
    }
}
</style>
