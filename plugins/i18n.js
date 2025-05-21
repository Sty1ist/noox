import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: 'uk', 
    strategy: 'prefix_except_default',
    fallbackLocale: 'uk',
    locales: [
        { code: 'uk', iso: 'uk-UA', name: 'Українська' },
        { code: 'ru', iso: 'ru-RU', name: 'Русский' }
      ],
    messages: {
      uk: {
        posterContent: {
          title: "Your gateway is ready",
          subtitle: "All we need is your Telegram handle",
          // imageSrc: require('@/assets/images/poster-image-2.jpg'),
          // imageAlt: "Зображення постера"
        },
        footerContent: {
          footerText: "© 2025 Nodex. All rights reserved.",
          contactUs: "Write to us"
        },
        pasportContent: {
          title: "Документи",
          description: "Необхідні документи для оформлення закордонного паспорта:",
          items: [
            {
              // img: require('@/assets/images/information/film-camera.svg'),
              title: "Фото на документ",
              description: "Фото у форматі TIFF або RAW"
            },
            {
              // img: require('@/assets/images/information/contract.svg'),
              title: "Ідентифікаційний код (ІПН)",
              description: "Скан-копія у форматі PDF або PNG"
            },
            {
              // img: require('@/assets/images/information/pasport.svg'),
              title: "Паспорт громадянина України",
              description: "Усі сторінки у форматі PDF"
            },
            {
              // img: require('@/assets/images/information/travel.svg'),
              title: "Чинний закордонний паспорт",
              description: "Скан-копія у форматі PDF"
            },
            // {
            //   img: require('@/assets/images/information/video-call.svg'),
            //   title: "Відео",
            //   description: "Відео з поворотом голови праворуч та ліворуч"
            // }
          ]
        },
        driverLicenseContent: {
          title: "Документи для водійських прав",
          description: "Необхідні документи для оформлення водійських прав міжнародного зразка:",
          items: [
            {
              // img: require('@/assets/images/information/film-camera.svg'),
              title: "Фото на документ",
              description: "Фото у форматі TIFF або RAW"
            },
            {
              // img: require('@/assets/images/information/contract.svg'),
              title: "Ідентифікаційний код (ІПН)",
              description: "Скан-копія у форматі PDF або PNG"
            },
            {
              // img: require('@/assets/images/information/pasport.svg'),
              title: "Паспорт громадянина України",
              description: "Усі сторінки у форматі PDF"
            },
          ]
        },
        reviewsContent: {
          title: "Відгуки клієнтів:" 
        },
        aboutPasportContent: {
          title: "Видача",
          description1: "Паспортний стіл Бердянськ, Нова Каховка, Мелітополь, Енергодар вересень 2021 — січень 2022 року.",
          // description2Title: "Деталі передоплати:",
          // description2: [
          //   "Паспорт - Предоплата 60% = 1560$"
          // ],
          stats: [
            { number: "10 років", label: "Термін дії паспорта" },
            { number: "1700$", label: "Вартість" },
            { number: "Обмежена", label: "Пропозиція" }
          ],
          // imageSrc: require('@/assets/images/about-pasport-3.jpeg'),
          imageAlt: "Про клуб"
        },
        stepForm: {
          q1: "Do you have experience in this field?",
          q2: "How old are you?",
          q3: "Your TG username",
          q4: "Where did you hear about us?",
          success: "Done! Your data has been sent.",
          options: {
            yes: "Yes",
            no: "No",
            age1: "Under 18",
            age2: "18–30",
            age3: "30+",
            source1: "Telegram",
            source2: "Facebook",
            source3: "Google",
            source4: "Yandex",
            source5: "VK, OK, Mail.ru"
          },
          next: "Next",
          back: "Back"
        },
        pravaContent: {
          title: "Application sent successfully!",
          btn: "Write to the manager",
        },
        aboutPravaContent: {
          title: "Видача",
          description1: "Можливе окреме отримання довідки про дійсність раніше отриманих прав (фото прав, паспорт, код).",
          description2Title: "Деталі передоплати:",
          description2: [
            "Права - Повна передоплата",
            "Довідка - Повна передоплата",
            "Паспорт - Передоплата 30% = 500$"
          ],
          stats: [
            { number: "1700$", label: "Паспорт" },
            { number: "500$", label: "Довідка" },
            { number: "1000$", label: "Права з довідкою" }
          ],
          // imageSrc: require('@/assets/images/driver-6.png'),
          imageAlt: "Про клуб"
        },
        contactContent: {
          title: "Contact us",
          description: "Write to Telegram to get started with the process",
          button: {
            buttonText: "Write to us",
            buttonLink: ""
          },
          image: {
            imageSrc: require('@/assets/images/5.jpg'),
            imageAlt: "Зображення Telegram"
          }
        }
      },
      ru: {
        posterContent: {
          title: "Вход открыт",
          subtitle: "Нужен только твой Telegram",
          // imageSrc: require('@/assets/images/poster-image-2.jpg'),
          // imageAlt: "Изображение постера"
        },
        footerContent: {
          footerText: "© 2025 NODEX. Все права защищены.",
          contactUs: "Написать нам"
        },
        reviewsContent: {
          title: "Отзывы клиентов:" 
        },
        driverLicenseContent: {
          title: "Документы для водительских прав",
          description: "Необходимые документы для оформления водительских прав международного образца:",
          items: [
          {
            // img: require('@/assets/images/information/film-camera.svg'),
            title: "Фото на документ",
            description: "Фото в формате TIFF или RAW"
          },
          {
            // img: require('@/assets/images/information/contract.svg'),
            title: "Идентификационный код (ИНН)",
            description: "Скан-копия в формате PDF или PNG"
          },
          {
            // img: require('@/assets/images/information/pasport.svg'),
            title: "Паспорт гражданина Украины",
            description: "Все страницы в формате PDF"
          },
        ]
      },
        pasportContent: {
          title: "Документы",
          description: "Необходимые документы для оформления загранпаспорта:",
          items: [
            {
              // img: require('@/assets/images/information/film-camera.svg'),
              title: "Фото на документ",
              description: "Фото в формате TIFF или RAW"
            },
            {
              // img: require('@/assets/images/information/contract.svg'),
              title: "Идентификационный код (ИНН)",
              description: "Скан-копия в формате PDF или PNG"
            },
            {
              // img: require('@/assets/images/information/pasport.svg'),
              title: "Паспорт гражданина Украины",
              description: "Все страницы в формате PDF"
            },
            {
              // img: require('@/assets/images/information/travel.svg'),
              title: "Действующий загранпаспорт",
              description: "Скан-копия в формате PDF"
            },
            // {
            //   img: require('@/assets/images/information/video-call.svg'),
            //   title: "Видео",
            //   description: "Видео с поворотом головы направо и налево"
            // }
          ]
        },
        aboutPasportContent: {
          title: "Выдача",
          description1: "Паспортный стол Бердянск, Новая Каховка, Мелитополь, Энергодар сентябрь 2021 — январь 2022 года.",
          // description2Title: "Детали предоплаты:",
          // description2: [
          //     "Паспорт - Предоплата 60% = 1560$"
          // ],
          stats: [
            { number: "10 лет", label: "Срок действия паспорта" },
            { number: "1700$", label: "Стоимость" },
            { number: "Ограниченное", label: "Предложение" }
          ],
          // imageSrc: require('@/assets/images/about-pasport-3.jpeg'),
          imageAlt: "О клубе"
        },
        stepForm: {
          q1: "Есть ли опыт в этой сфере?",
          q2: "Сколько вам лет?",
          q3: "Ваш TG username",
          q4: "Откуда вы о нас узнали?",
          success: "Готово! Данные отправлены.",
          options: {
            yes: "Да",
            no: "Нет",
            age1: "до 18",
            age2: "18–30",
            age3: "30+",
            source1: "Телеграм",
            source2: "Фейсбук",
            source3: "Гугл",
            source4: "Яндекс",
            source5: "VK, OK, Mail.ru"
          },
          next: "Далее",
          back: "Назад"
        },
        pravaContent: {
          title: "Заявка успешно отправлена!",
          btn: "Написать менеджеру",
        },
        aboutPravaContent: {
          title: "Выдача",
          description1: "Возможно отдельное получение справки о действительности ранее полученных прав (фото прав, паспорт, код).",
          description2Title: "Детали предоплаты:",
          description2: [
              "Права - Полная предоплата",
              "Справка - Полная предоплата",
              "Паспорт - Предоплата 30% = 500$"
          ],
          stats: [
            { number: "1700$", label: "Паспорт" },
            { number: "500$", label: "Справка" },
            { number: "1000$", label: "Права со справкой" }
          ],
          // imageSrc: require('@/assets/images/driver-6.png'),
          imageAlt: "О клубе"
        },
        contactContent: {
          title: "Свяжитесь с нами",
          description: "Напишите в Telegram, чтобы начать процесс",
          button: {
            buttonText: "Написать нам",
            buttonLink: ""
          },
          image: {
            imageSrc: require('@/assets/images/5.jpg'),
            imageAlt: "Изображение Telegram"
          }
        },
      }
    }
  });
};
