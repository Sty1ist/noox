<template>
<footer class="footer">
    <div class="footer__content">
        <div class="footer__logo">
            <img src="~/assets/logo/logo.svg" alt="Nodex Logo" />
        </div>
        <p class="footer__text">{{ $t('footerContent.footerText') }}</p>
        <div class="footer__socials">
            <a href="mailto:ukrpassua@protonmail.com" class="footer__social-link footer__social-link--email">{{ $t('footerContent.contactUs') }}</a>
        </div>
    </div>
</footer>
</template>

  
<script>
export default {
    name: "Footer",
};
</script>

  
<style lang="scss" scoped>
.footer {
    background-color: #100e1a;
    color: #e5e3dd;
    padding: 40px 0;
    text-align: center;

    &__content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__logo {
        margin-bottom: 20px;

        img {
            width: 52px;
            transition: opacity 0.3s;
        }
    }

    &__text {
        color: var(--variant-23-light-grey, #E5E3DD);
        text-align: center;
        // font-family: "MacPaw Fixel Display";
        font-size: 18px;
        font-style: normal;
        // font-weight: 500;
        // font-family: 'Orbitron', sans-serif;
        font-family: 'Orbitron', 'Russo One', sans-serif;
        font-weight: 500;
        line-height: 200%;
        text-transform: uppercase;
        margin-bottom: 10px;
        pointer-events: none;
        user-select: none;
    }

    &__socials {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    &__social-link {
        text-decoration: none;
        color: var(--Dark-Body, #ACACAD);
        // font-family: "MacPaw Fixel Display";
        // font-family: 'Orbitron', sans-serif;
        font-family: 'Orbitron', 'Russo One', sans-serif;
        font-weight: 700;
        font-size: 16px;
        font-style: normal;
        // font-weight: 400;
        line-height: 140%;

        &:hover {
            text-decoration: underline;
        }

        &--facebook:hover {
            color: #3b5998;
        }

        &--instagram:hover {
            color: #e4405f;
        }

        &--twitter:hover {
            color: #1da1f2;
        }
    }
}

@media (max-width: 1440px) {
    .footer {
        &__text {
            font-size: 16px;
        }

        &__socials {
            font-size: 16px;
        }

        &__social-link {
            font-size: 16px;
        }
    }

}

@media (max-width: 767px) {
    .footer {
        &__text {
            font-size: 16px;
        }

        &__socials {
            font-size: 16px;
        }

        &__social-link {
            font-size: 16px;
        }
    }
}
</style>
