<template>
<header :class="['header', { 'header--scrolled': scrolled }]">
    <div class="header__content">
        <div class="logo" data-aos="fade" data-aos-duration="1000" data-aos-delay="200"  @click="scrollToTop">
            <img src="~/assets/logo/logo.svg" alt="logo help to leave" />
        </div>
        <label for="mySelect" class="label-select">Виберіть опцію</label>
        <div class="lang-switcher" data-aos="fade" data-aos-duration="2000" data-aos-delay="400">
            <span
                class="lang-option"
                :class="{ active: selectedLocale === 'uk' }"
                @click="changeLocale('uk')"
            >EN</span>
            <span
                class="lang-option"
                :class="{ active: selectedLocale === 'ru' }"
                @click="changeLocale('ru')"
            >RU</span>
        </div>

        <!-- <div class="language-selector" data-aos="fade" data-aos-duration="2000" data-aos-delay="400">
            <select id="mySelect" v-model="selectedLocale" @change="changeLocale($event.target.value)">
                <option value="uk" >UA</option>
                <option value="ru">RU</option>
            </select>
        </div> -->
    </div>
</header>
</template>

<script>
export default {
    data() {
        return {
            selectedLocale: 'uk',
            scrolled: false
        };
    },
    created() {
        const savedLocale = localStorage.getItem('locale');

        if (savedLocale) {
            this.$i18n.locale = savedLocale;
            this.selectedLocale = savedLocale; 
        }
    },
    mounted() {
        console.log(this.$i18n); 
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        // changeLocale(locale) {
        //     this.$i18n.locale = locale;
        //     localStorage.setItem('locale', locale);
        // },
        changeLocale(locale) {
            this.selectedLocale = locale; // ← ДОДАЙ ЦЕ
            this.$i18n.locale = locale;
            localStorage.setItem('locale', locale);
        },
        handleScroll() {
            this.scrolled = window.scrollY > 50; 
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 14px 0;
    background-color: #2b2953;

    position: fixed;
    max-width: 100%;
    min-inline-size: -webkit-fill-available;
    background: var(--Dark-Background---Light-Headlines, #100e1a);
    z-index: 11;
    border-bottom: 1px white;

    &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 120px;
    }

    .logo {
        display: flex;
        align-items: center;
        width: 48px;
        height: auto;
        margin-bottom: 4px;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
            transition: opacity 0.3s;

            &:hover {
                opacity: 0.7;
            }
        }

       
    }

    .language-selector {
        select {
            padding: 5px 10px;
            border-radius: 4px;
            background: var(--Dark-Background---Light-Headlines, #111314);
            color: var(--Light-Background---Dark-Headlines, #E5E3DD);
            border: none;
            font-family: "SangBleu Sunrise";
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            font-size: auto;
            outline: none;

            &:hover {
                cursor: pointer;
            }
        }

    }

    .lang-option  {
        color: white;
        // font-family: 'Orbitron', sans-serif;
        font-family: 'Orbitron', 'Russo One', sans-serif;
        margin-right: 12px;
        cursor: pointer;
    }

    
}

.lang-option.active {
    color: #9e6fdb;
}

.header--scrolled {
  background: rgba(17, 19, 20, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: background 0.3s, backdrop-filter 0.3s;
}

.label-select {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    user-select: none;
    z-index: -1;
}

@media (max-width: 1440px) {
    .header {
        padding: 8px 0;

        &__content {
            padding: 0 48px;
        }
    }

    
}

@media (max-width: 767px) {
    .header {
        padding: 8px 0;

        &__content {
            padding: 0 24px;
        }
    }
}
</style>
