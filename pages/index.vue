<template>
<div class="site">
    <Poster 
        :content="posterContent" 
        @form-submitted="popupVisible = true"
        :contentForm="stepForm"
    />
    <div class="divider" data-aos="slide-right" :data-aos-delay="700"></div>
    <Contact :content="contactContent" />
    <div class="divider" data-aos="slide-right" :data-aos-delay="700"></div>
    <SuccessPopup :content="pravaContent" :visible="popupVisible" @close="popupVisible = false" />
</div>
</template>

<script>
import Poster from '~/components/poster.vue';
import Contact from '~/components/contact.vue';
import SuccessPopup from '~/components/SuccessPopup.vue';

export default {
    components: {
        Poster,
        Contact,
        SuccessPopup
    },
    head() {
        return {
            title: 'NODEX — Платформа нового поколения',
            meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'NODEX — современный цифровой инструмент. Быстрый доступ, простое взаимодействие, максимум возможностей.'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'NODEX — Цифровая экосистема без лишнего'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'NODEX помогает подключаться к глобальным возможностям без барьеров. Всё просто, прозрачно и на ваших условиях.'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://nodex.ai/images/logo.svg' // замени на актуальный URL
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://nodex.ai'
            },
            {
                hid: 'og:image:width',
                property: 'og:image:width',
                content: '1200'
            },
            {
                hid: 'og:image:height',
                property: 'og:image:height',
                content: '630'
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website'
            },
            {
                hid: 'robots',
                name: 'robots',
                content: 'index, follow'
            }
            ],
            link: [
            {
                rel: 'canonical',
                href: 'https://nodex.world'
            }
            ],
            script: [
            {
                src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX',
                async: true
            },
            {
                hid: 'gtag',
                innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XXXXXXX');
                `,
                type: 'text/javascript',
                charset: 'utf-8'
            }
            ],
            __dangerouslyDisableSanitizersByTagID: {
            gtag: ['innerHTML']
            }
        }
        },
    // head() {
    //     return {
    //         title: 'Help to Leave - Отримання закордонного паспорта для українців',
    //         meta: [{
    //                 hid: 'description',
    //                 name: 'description',
    //                 content: 'Help to Leave – сервіс, який допомагає українцям отримати закордонний паспорт швидко та без зайвих труднощів.'
    //             },
    //             {
    //                 hid: 'og:title',
    //                 property: 'og:title',
    //                 content: 'Help to Leave – закордонний паспорт для українців'
    //             },
    //             {
    //                 hid: 'og:description',
    //                 property: 'og:description',
    //                 content: 'Платформа Help to Leave допомагає українцям у процесі отримання закордонного паспорта. Отримайте свій документ без зайвих складнощів та стресу.'
    //             },
    //             {
    //                 hid: 'og:image',
    //                 property: 'og:image',
    //                 content: 'https://helptoleave.com/images/poster-image-2.jpg'
    //             },
    //             {
    //                 hid: 'og:url',
    //                 property: 'og:url',
    //                 content: 'https://helptoleave.com'
    //             },
    //             {
    //                 hid: 'og:image:width',
    //                 property: 'og:image:width',
    //                 content: '1200'
    //             },
    //             {
    //                 hid: 'og:image:height',
    //                 property: 'og:image:height',
    //                 content: '630'
    //             },
    //             {
    //                 hid: 'og:type',
    //                 property: 'og:type',
    //                 content: 'website'
    //             },
    //             {
    //                 hid: 'robots',
    //                 name: 'robots',
    //                 content: 'index, follow'
    //             }
    //         ],
    //         link: [{
    //             rel: 'canonical',
    //             href: 'https://helptoleave.com'
    //         }],
    //         script: [
    //             {
    //                 src: 'https://www.googletagmanager.com/gtag/js?id=G-CR9RHEE20J',
    //                 async: true
    //             },
    //             {
    //                 hid: 'gtag',
    //                 innerHTML: `
    //                 window.dataLayer = window.dataLayer || [];
    //                 function gtag(){dataLayer.push(arguments);}
    //                 gtag('js', new Date());
    //                 gtag('config', 'G-CR9RHEE20J');
    //                 `,
    //                 type: 'text/javascript',
    //                 charset: 'utf-8'
    //             }
    //         ],
    //         __dangerouslyDisableSanitizersByTagID: {
    //             'gtag': ['innerHTML']
    //         }
    //     }
    // },
    data() {
        return {
            popupVisible: false
        }
    },
    computed: {
        posterContent() {
            return this.$t('posterContent');
        },
        pasportContent() {
            return this.$t('pasportContent');
        },
        aboutPasportContent() {
            return this.$t('aboutPasportContent');
        },
        pravaContent() {
            return this.$t('pravaContent');
        },
        aboutPravaContent() {
            return this.$t('aboutPravaContent');
        },
        contactContent() {
            return this.$t('contactContent');
        },
        driverLicenseContent() {
            return this.$t('driverLicenseContent');
        },
        stepForm() {
            return this.$t('stepForm');
        }
    }

}
</script>

<style lang="scss" scoped>
.site {
    overflow: hidden;
    background-color: black;
}

.divider {
    height: 1px;
    background-color: var(--Light-Background---Dark-Headlines, #E5E3DD);
}
</style>
