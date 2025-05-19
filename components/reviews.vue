<template>
<section class="marquee" data-aos="fade-up" data-aos-delay="100">
    <div class="marquee__wrapper">
        <h2 class="marquee__title" data-aos="fade-up" data-aos-delay="200">{{ content.title }}</h2>
    </div>
    <div class="marquee__container" data-aos="fade-up" data-aos-delay="300">
        <div class="marquee__track" :style="{ animationDuration: currentScrollSpeed + 's' }">
            <div v-for="(slide, index) in repeatedSlides" :key="index" class="marquee__card" data-aos="fade-up" :data-aos-delay="400 + index * 100">
                <p class="marquee__card-description" v-html="slide.description"></p>
                <p class="marquee__card-author" data-aos="fade" data-aos-duration="1000" data-aos-delay="400">- {{ slide.name }}, {{ slide.location }}</p>
            </div>
        </div>
        <div class="marquee__track marquee__track--duplicate" :style="{ animationDuration: currentScrollSpeed + 's' }">
            <div v-for="(slide, index) in repeatedSlides" :key="`duplicate-${index}`" class="marquee__card" data-aos="fade-up" :data-aos-delay="400 + index * 100">
                <p class="marquee__card-description" v-html="slide.description"></p>
                <p class="marquee__card-author" data-aos="fade" data-aos-duration="1000" data-aos-delay="400">- {{ slide.name }}, {{ slide.location }}</p>
            </div>
        </div>
    </div>
</section>
</template>

    
<script>
export default {
    props: ['content'],
    data() {
        return {
            isMobileView: window.innerWidth <= 768,
            slides: [{
                    description: "Я звернувся до HelpToLeave в складній ситуації, <br>і мене приємно здивувала якість їхніх послуг. <br>Дуже професійно і безперешкодно! Рекомендую всім, <br>хто шукає надійний сервіс.<br> Команда знає, що робить, і виконує роботу на 100%",
                    name: "Олександр П.",
                    location: "Київ"
                },
                {
                    description: "Процес оформлення документів був простим і швидким. <br>Рекомендую всім, хто шукає надійний сервіс.",
                    name: "Марія І.",
                    location: "Одеса"
                },
                {
                    description: "Не ожидал, что все пройдет так быстро и без лишней суеты. <br>Сотрудники HelpToLeave просто замечательные, они все помогли, .<br>объяснили и подготовили документы наилучшим образом. <br>Теперь я буду рекомендовать их всем своим друзьям и знакомым!",
                    name: "Иван С.",
                    location: "Київ"
                },
                {
                    description: "Все супер! <br>У меня уже были негативные опыты с другими компаниями,<br> но ребята справились на высшем уровне.<br> Буду обращаться снова,<br> если понадобится. <br>Спасибо большое!",
                    name: "Андрій К.",
                    location: "Харків"
                },
                {
                    description: "Допомогли мені вирішити всі документи,<br> які були потрібні для роботи за кордоном.<br> Дуже вдячна Олександру за професіоналізм і терпіння!",
                    name: "Наталія В.",
                    location: "Львів"
                },
                {
                    description: "Теперь я уверен, что есть к кому обратиться,<br> если понадобится. <br>Спасибо, ребята!",
                    name: "Сергей Р.",
                    location: "Київ"
                },
                {
                    description: "Не могу поверить,<br> насколько легко прошло оформление. <br>Всё просто, без лишних нервов.",
                    name: "Антон Б.",
                    location: "Луцьк"
                },
                {
                    description: "Всі питання вирішувались швидко, <br>а документи були готові навіть раніше, <br>ніж очікувала! <br>Залишилася дуже задоволена і обов’язково рекомендую цей сервіс всім!",
                    name: "Людмила Т.",
                    location: "Київ"
                },
                {
                    description: "Задоволений на всі сто відсотків.",
                    name: "Михайло С.",
                    location: "Одеса"
                },
                {
                    description: "Очень благодарна за помощь с оформлением документов. <br>Не думала, что это можно сделать так быстро и легко.",
                    name: "Галина З.",
                    location: "Київ"
                },
                {
                    description: " Все Круто!",
                    name: "Ігор Л.",
                    location: "Запоріжжя"
                },
                {
                    description: "Найкращий сервіс, який я зустрічала! <br>Якщо вам потрібні документи,<br> не шукайте більше ніде – тут допоможуть швидко та професійно.",
                    name: "Світлана Р.",
                    location: "Вінниця"
                },
                {
                    description: "Відчуваю себе впевнено, <br>знаючи, що є кому довіряти!!!",
                    name: "Ірина П.",
                    location: "Львів"
                },
                {
                    description: "Я звернувся до HelpToLeave в складній ситуації, <br>і мене приємно здивувала якість їхніх послуг. <br>Дуже професійно і безперешкодно! Рекомендую всім, <br>хто шукає надійний сервіс.<br> Команда знає, що робить, і виконує роботу на 100%",
                    name: "Олександр П.",
                    location: "Київ"
                },
                {
                    description: "Процес оформлення документів був простим і швидким. <br>Рекомендую всім, хто шукає надійний сервіс.",
                    name: "Марія І.",
                    location: "Одеса"
                },
                {
                    description: "Не ожидал, что все пройдет так быстро и без лишней суеты. <br>Сотрудники HelpToLeave просто замечательные, они все помогли, .<br>объяснили и подготовили документы наилучшим образом. <br>Теперь я буду рекомендовать их всем своим друзьям и знакомым!",
                    name: "Иван С.",
                    location: "Київ"
                },
                {
                    description: "Все супер! <br>У меня уже были негативные опыты с другими компаниями,<br> но ребята справились на высшем уровне.<br> Буду обращаться снова,<br> если понадобится. <br>Спасибо большое!",
                    name: "Андрій К.",
                    location: "Харків"
                },
                {
                    description: "Допомогли мені вирішити всі документи,<br> які були потрібні для роботи за кордоном.<br> Дуже вдячна Олександру за професіоналізм і терпіння!",
                    name: "Наталія В.",
                    location: "Львів"
                },
                {
                    description: "Теперь я уверен, что есть к кому обратиться,<br> если понадобится. <br>Спасибо, ребята!",
                    name: "Сергей Р.",
                    location: "Київ"
                },
                {
                    description: "Не могу поверить,<br> насколько легко прошло оформление. <br>Всё просто, без лишних нервов.",
                    name: "Антон Б.",
                    location: "Луцьк"
                },
                {
                    description: "Всі питання вирішувались швидко, <br>а документи були готові навіть раніше, <br>ніж очікувала! <br>Залишилася дуже задоволена і обов’язково рекомендую цей сервіс всім!",
                    name: "Людмила Т.",
                    location: "Київ"
                },
                {
                    description: "Задоволений на всі сто відсотків.",
                    name: "Михайло С.",
                    location: "Одеса"
                },
                {
                    description: "Очень благодарна за помощь с оформлением документов. <br>Не думала, что это можно сделать так быстро и легко.",
                    name: "Галина З.",
                    location: "Київ"
                },
                {
                    description: " Все Круто!",
                    name: "Ігор Л.",
                    location: "Запоріжжя"
                },
                {
                    description: "Найкращий сервіс, який я зустрічала! <br>Якщо вам потрібні документи,<br> не шукайте більше ніде – тут допоможуть швидко та професійно.",
                    name: "Світлана Р.",
                    location: "Вінниця"
                },
                {
                    description: "Відчуваю себе впевнено, <br>знаючи, що є кому довіряти!!!",
                    name: "Ірина П.",
                    location: "Львів"
                },
                {
                    description: "Я звернувся до HelpToLeave в складній ситуації, <br>і мене приємно здивувала якість їхніх послуг. <br>Дуже професійно і безперешкодно! Рекомендую всім, <br>хто шукає надійний сервіс.<br> Команда знає, що робить, і виконує роботу на 100%",
                    name: "Олександр П.",
                    location: "Київ"
                },
                {
                    description: "Процес оформлення документів був простим і швидким. <br>Рекомендую всім, хто шукає надійний сервіс.",
                    name: "Марія І.",
                    location: "Одеса"
                },
                {
                    description: "Не ожидал, что все пройдет так быстро и без лишней суеты. <br>Сотрудники HelpToLeave просто замечательные, они все помогли, .<br>объяснили и подготовили документы наилучшим образом. <br>Теперь я буду рекомендовать их всем своим друзьям и знакомым!",
                    name: "Иван С.",
                    location: "Київ"
                },
                {
                    description: "Все супер! <br>У меня уже были негативные опыты с другими компаниями,<br> но ребята справились на высшем уровне.<br> Буду обращаться снова,<br> если понадобится. <br>Спасибо большое!",
                    name: "Андрій К.",
                    location: "Харків"
                },
                {
                    description: "Допомогли мені вирішити всі документи,<br> які були потрібні для роботи за кордоном.<br> Дуже вдячна Олександру за професіоналізм і терпіння!",
                    name: "Наталія В.",
                    location: "Львів"
                },
                {
                    description: "Теперь я уверен, что есть к кому обратиться,<br> если понадобится. <br>Спасибо, ребята!",
                    name: "Сергей Р.",
                    location: "Київ"
                },
                {
                    description: "Не могу поверить,<br> насколько легко прошло оформление. <br>Всё просто, без лишних нервов.",
                    name: "Антон Б.",
                    location: "Луцьк"
                },
                {
                    description: "Всі питання вирішувались швидко, <br>а документи були готові навіть раніше, <br>ніж очікувала! <br>Залишилася дуже задоволена і обов’язково рекомендую цей сервіс всім!",
                    name: "Людмила Т.",
                    location: "Київ"
                },
                {
                    description: "Задоволений на всі сто відсотків.",
                    name: "Михайло С.",
                    location: "Одеса"
                },
                {
                    description: "Очень благодарна за помощь с оформлением документов. <br>Не думала, что это можно сделать так быстро и легко.",
                    name: "Галина З.",
                    location: "Київ"
                },
                {
                    description: " Все Круто!",
                    name: "Ігор Л.",
                    location: "Запоріжжя"
                },
                {
                    description: "Найкращий сервіс, який я зустрічала! <br>Якщо вам потрібні документи,<br> не шукайте більше ніде – тут допоможуть швидко та професійно.",
                    name: "Світлана Р.",
                    location: "Вінниця"
                },
                {
                    description: "Відчуваю себе впевнено, <br>знаючи, що є кому довіряти!!!",
                    name: "Ірина П.",
                    location: "Львів"
                },
                {
                    description: "Я звернувся до HelpToLeave в складній ситуації, <br>і мене приємно здивувала якість їхніх послуг. <br>Дуже професійно і безперешкодно! Рекомендую всім, <br>хто шукає надійний сервіс.<br> Команда знає, що робить, і виконує роботу на 100%",
                    name: "Олександр П.",
                    location: "Київ"
                },
                {
                    description: "Процес оформлення документів був простим і швидким. <br>Рекомендую всім, хто шукає надійний сервіс.",
                    name: "Марія І.",
                    location: "Одеса"
                },
                {
                    description: "Не ожидал, что все пройдет так быстро и без лишней суеты. <br>Сотрудники HelpToLeave просто замечательные, они все помогли, .<br>объяснили и подготовили документы наилучшим образом. <br>Теперь я буду рекомендовать их всем своим друзьям и знакомым!",
                    name: "Иван С.",
                    location: "Київ"
                },
                {
                    description: "Все супер! <br>У меня уже были негативные опыты с другими компаниями,<br> но ребята справились на высшем уровне.<br> Буду обращаться снова,<br> если понадобится. <br>Спасибо большое!",
                    name: "Андрій К.",
                    location: "Харків"
                },
                {
                    description: "Допомогли мені вирішити всі документи,<br> які були потрібні для роботи за кордоном.<br> Дуже вдячна Олександру за професіоналізм і терпіння!",
                    name: "Наталія В.",
                    location: "Львів"
                },
                {
                    description: "Теперь я уверен, что есть к кому обратиться,<br> если понадобится. <br>Спасибо, ребята!",
                    name: "Сергей Р.",
                    location: "Київ"
                },
                {
                    description: "Не могу поверить,<br> насколько легко прошло оформление. <br>Всё просто, без лишних нервов.",
                    name: "Антон Б.",
                    location: "Луцьк"
                },
                {
                    description: "Всі питання вирішувались швидко, <br>а документи були готові навіть раніше, <br>ніж очікувала! <br>Залишилася дуже задоволена і обов’язково рекомендую цей сервіс всім!",
                    name: "Людмила Т.",
                    location: "Київ"
                },
                {
                    description: "Задоволений на всі сто відсотків.",
                    name: "Михайло С.",
                    location: "Одеса"
                },
                {
                    description: "Очень благодарна за помощь с оформлением документов. <br>Не думала, что это можно сделать так быстро и легко.",
                    name: "Галина З.",
                    location: "Київ"
                },
                {
                    description: " Все Круто!",
                    name: "Ігор Л.",
                    location: "Запоріжжя"
                },
                {
                    description: "Найкращий сервіс, який я зустрічала! <br>Якщо вам потрібні документи,<br> не шукайте більше ніде – тут допоможуть швидко та професійно.",
                    name: "Світлана Р.",
                    location: "Вінниця"
                },
                {
                    description: "Відчуваю себе впевнено, <br>знаючи, що є кому довіряти!!!",
                    name: "Ірина П.",
                    location: "Львів"
                }
            ],
            slidesMobile: [
                // {
                //     description: "Мене приємно здивувала якість їхніх послуг <br>Дуже професійно і безперешкодно.",
                //     name: "Олександр П.",
                //     location: "Київ"
                // },
                {
                    description: "Рекомендую всім,<br> хто шукає надійний сервіс.",
                    name: "Марія І.",
                    location: "Одеса"
                },
                {
                    description: "Не ожидал,<br> что все пройдет так<br> быстро и без лишней суеты.",
                    name: "Иван С.",
                    location: "Київ"
                },
                {
                    description: "Все супер!<br> Буду обращаться снова,<br> если понадобится. <br>Спасибо большое!",
                    name: "Андрій К.",
                    location: "Харків"
                },
                {
                    description: "Дуже вдячна Олександру<br> за професіоналізм і терпіння!",
                    name: "Наталія В.",
                    location: "Львів"
                },
                {
                    description: "Теперь я уверен,<br> что есть к кому обратиться,<br> если понадобится. <br>Спасибо, ребята!",
                    name: "Сергей Р.",
                    location: "Київ"
                },
                {
                    description: "Всё просто, <br>без лишних нервов.",
                    name: "Антон Б.",
                    location: "Луцьк"
                },
                {
                    description: "Всі питання вирішувались швидко, <br>а документи були готові навіть раніше, <br>ніж очікувала",
                    name: "Людмила Т.",
                    location: "Київ"
                },
                {
                    description: "Задоволений <br>на всі сто відсотків.",
                    name: "Михайло С.",
                    location: "Одеса"
                },
                {
                    description: "Не думала,<br> что это можно сделать так быстро и легко.",
                    name: "Галина З.",
                    location: "Київ"
                },
                {
                    description: " Все Круто!",
                    name: "Ігор Л.",
                    location: "Запоріжжя"
                },
                {
                    description: "Найкращий сервіс,<br> який я зустрічала!",
                    name: "Світлана Р.",
                    location: "Вінниця"
                },
                {
                    description: "Відчуваю себе впевнено, <br>знаючи, що є кому довіряти!!!",
                    name: "Ірина П.",
                    location: "Львів"
                },
                {
                    description: "Рекомендую всім,<br> хто шукає надійний сервіс.",
                    name: "Марія І.",
                    location: "Одеса"
                },
                {
                    description: "Не ожидал,<br> что все пройдет так<br> быстро и без лишней суеты.",
                    name: "Иван С.",
                    location: "Київ"
                },
                {
                    description: "Все супер!<br> Буду обращаться снова,<br> если понадобится. <br>Спасибо большое!",
                    name: "Андрій К.",
                    location: "Харків"
                },
                {
                    description: "Дуже вдячна Олександру<br> за професіоналізм і терпіння!",
                    name: "Наталія В.",
                    location: "Львів"
                },
                {
                    description: "Теперь я уверен,<br> что есть к кому обратиться,<br> если понадобится. <br>Спасибо, ребята!",
                    name: "Сергей Р.",
                    location: "Київ"
                },
                {
                    description: "Всё просто, <br>без лишних нервов.",
                    name: "Антон Б.",
                    location: "Луцьк"
                },
                {
                    description: "Всі питання вирішувались швидко, <br>а документи були готові навіть раніше, <br>ніж очікувала",
                    name: "Людмила Т.",
                    location: "Київ"
                },
                {
                    description: "Задоволений <br>на всі сто відсотків.",
                    name: "Михайло С.",
                    location: "Одеса"
                },
                {
                    description: "Не думала,<br> что это можно сделать так быстро и легко.",
                    name: "Галина З.",
                    location: "Київ"
                },
                {
                    description: " Все Круто!",
                    name: "Ігор Л.",
                    location: "Запоріжжя"
                },
                {
                    description: "Найкращий сервіс,<br> який я зустрічала!",
                    name: "Світлана Р.",
                    location: "Вінниця"
                },
                {
                    description: "Відчуваю себе впевнено, <br>знаючи, що є кому довіряти!!!",
                    name: "Ірина П.",
                    location: "Львів"
                },
                {
                    description: "Рекомендую всім,<br> хто шукає надійний сервіс.",
                    name: "Марія І.",
                    location: "Одеса"
                },
                {
                    description: "Не ожидал,<br> что все пройдет так<br> быстро и без лишней суеты.",
                    name: "Иван С.",
                    location: "Київ"
                },
                {
                    description: "Все супер!<br> Буду обращаться снова,<br> если понадобится. <br>Спасибо большое!",
                    name: "Андрій К.",
                    location: "Харків"
                },
                {
                    description: "Дуже вдячна Олександру<br> за професіоналізм і терпіння!",
                    name: "Наталія В.",
                    location: "Львів"
                },
                {
                    description: "Теперь я уверен,<br> что есть к кому обратиться,<br> если понадобится. <br>Спасибо, ребята!",
                    name: "Сергей Р.",
                    location: "Київ"
                },
                {
                    description: "Всё просто, <br>без лишних нервов.",
                    name: "Антон Б.",
                    location: "Луцьк"
                },
                {
                    description: "Всі питання вирішувались швидко, <br>а документи були готові навіть раніше, <br>ніж очікувала",
                    name: "Людмила Т.",
                    location: "Київ"
                },
                {
                    description: "Задоволений <br>на всі сто відсотків.",
                    name: "Михайло С.",
                    location: "Одеса"
                },
                {
                    description: "Не думала,<br> что это можно сделать так быстро и легко.",
                    name: "Галина З.",
                    location: "Київ"
                },
                {
                    description: " Все Круто!",
                    name: "Ігор Л.",
                    location: "Запоріжжя"
                },
                {
                    description: "Найкращий сервіс,<br> який я зустрічала!",
                    name: "Світлана Р.",
                    location: "Вінниця"
                },
                {
                    description: "Відчуваю себе впевнено, <br>знаючи, що є кому довіряти!!!",
                    name: "Ірина П.",
                    location: "Львів"
                },
            ]
        };
    },
    computed: {
        repeatedSlides() {
            return this.isMobileView ? this.slidesMobile : this.slides;
        },
        currentScrollSpeed() {
            return this.isMobileView ? 180 :400;
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.isMobileView = window.innerWidth <= 768;
        }
    }
};
</script>

    
<style lang="scss" scoped>
.marquee {
    padding: 40px 0;
    background-color: #111314;
    color: #e5e3dd;
    overflow: hidden;

    &__wrapper {
        padding: 0 120px;
        margin-bottom: 52px;
    }

    &__title {
        color: var(--Light-Background---Dark-Headlines, #E5E3DD);
        font-family: "SangBleu Sunrise";
        font-size: 64px;
        font-weight: 400;
        line-height: 120%;
    }

    &__container {
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        display: flex;
    }

    &__track {
        display: flex;
        flex-shrink: 0;
        min-width: 200%;
        animation: scroll linear infinite;
    }

    &__track--duplicate {
        display: flex;
        flex-shrink: 0;
    }

    &__card {
        height: 100%;
        padding: 35px;
    }

    &__card-description {
        color: var(--Dark-Body, #ACACAD);
        font-family: "SangBleu Sunrise";
        font-size: 24px;
        line-height: 132%;
    }

    &__card-author {
        color: var(--Light-Background---Dark-Headlines, #E5E3DD);
        font-family: "MacPaw Fixel Display";
        font-size: 18px;
        font-style: italic;
        margin-top: 24px;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-100%);
        }
    }
}

@media (max-width: 1440px) {
    .marquee {
        
        &__wrapper {
            padding: 0 48px;
        }

        &__title {
            font-size: 48px;
        }
    }
}
@media (max-width: 767px) {
    .marquee {
        
        &__wrapper {
            padding: 0 24px;
        }

        &__title {
            font-size: 32px;
            margin-bottom: 32px;
        }
    }
}

</style>
