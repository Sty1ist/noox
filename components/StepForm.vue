<template>
<div :class="['step-form', { 'step-form--fullscreen': step === 'done' }]">
    <transition name="fade" mode="out-in">
        <div :key="step" class="step-form__step">
            <div v-if="step === 1">
                <h2 class="step-form__title">{{ $t('stepForm.q1') }}</h2>
                <label v-for="option in ['yes', 'no']" :key="option">
                    <input type="radio" v-model="form.experience" :value="$t(`stepForm.options.${option}`)" />
                    {{ $t(`stepForm.options.${option}`) }}
                </label>
            </div>

            <div v-else-if="step === 2">
                <h2 class="step-form__title">{{ $t('stepForm.q2') }}</h2>
                <label v-for="option in ['age1', 'age2', 'age3']" :key="option">
                    <input type="radio" v-model="form.age" :value="$t(`stepForm.options.${option}`)" />
                    {{ $t(`stepForm.options.${option}`) }}
                </label>
            </div>

            <div v-else-if="step === 3">
                <h2 class="step-form__title">{{ $t('stepForm.q3') }}</h2>
                <input v-model="form.username" class="tg-input" type="text" placeholder="@yourname" />
            </div>

            <div v-else-if="step === 4">
                <h2 class="step-form__title">{{ $t('stepForm.q4') }}</h2>
                <label v-for="option in ['source1', 'source2', 'source3', 'source4', 'source5']" :key="option">
                    <input type="radio" v-model="form.source" :value="$t(`stepForm.options.${option}`)" />
                    {{ $t(`stepForm.options.${option}`) }}
                </label>
            </div>

            <div v-else-if="step === 'done'">
                <div class="step-form__success">
                    <p>{{ $t('stepForm.success') }}</p>
                </div>
            </div>

            <div class="step-form__controls" v-if="step !== 'done'">
                <button class="poster__button" @click="prevStep" :disabled="step === 1">
                    {{ $t('stepForm.back') }}
                </button>
                <button class="poster__button" @click="nextStep">
                    {{ $t('stepForm.next') }}
                </button>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name: 'StepForm',
    props: {
        content: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            step: 1,
            form: {
                experience: '',
                age: '',
                username: '',
                source: ''
            }
        };
    },
    methods: {
        nextStep() {
            if (!this.validateCurrentStep()) return;
            if (this.step === 4) {
                this.sendToTelegram();
                this.step = 'done';
                this.$emit('submitted');
            } else {
                this.step++;
            }
        },
        prevStep() {
            if (this.step > 1) this.step--;
        },
        validateCurrentStep() {
            switch (this.step) {
                case 1:
                    return !!this.form.experience;
                case 2:
                    return !!this.form.age;
                case 3:
                    return !!this.form.username.trim();
                case 4:
                    return !!this.form.source;
                default:
                    return false;
            }
        },
        async sendToTelegram() {
            this.$emit('submitted');
            const message = `Новий відповідач:
            Крипто: ${this.form.experience}
            Вік: ${this.form.age}
            TG: ${this.form.username}
            Джерело: ${this.form.source}`;

            const TOKEN = '7774437746:AAE4rEzA0cmDKt_r4tQWLGdfBFuckgVPnZ8';
            const CHAT_IDS = [7538727898, 6550281440, 5038612487, 7822391067]; // ← додай свої ID сюди

            for (const chatId of CHAT_IDS) {
                await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
                });
            }
        },

        // async sendToTelegram() {
        //     this.$emit('submitted');
        //     console.log('SUBMITED 1')
        //     const message = `Новий відповідач:
        //     Крипто: ${this.form.experience}
        //     Вік: ${this.form.age}
        //     TG: ${this.form.username}
        //     Джерело: ${this.form.source}`;

        //     const TOKEN = '7774437746:AAE4rEzA0cmDKt_r4tQWLGdfBFuckgVPnZ8';
        //     const CHAT_ID = 7538727898; // ← заміни на свій реальний chat_id

        //     await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             chat_id: CHAT_ID,
        //             text: message
        //         })
        //     });
        // }
    }
    // async sendToTelegram() {
    //   const message = `Новий відповідач:
    //     Крипто: ${this.form.experience}
    //     Вік: ${this.form.age}
    //     TG: ${this.form.username}
    //     Джерело: ${this.form.source}`;
    //         const TOKEN = '<YOUR_BOT_TOKEN>';
    //         const CHAT_ID = '<YOUR_CHAT_ID>';
    //         await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ chat_id: CHAT_ID, text: message })
    //         });
    //         }
    // }
};
</script>

<style scoped>
.full {
    width: 100%;
    max-width: 100%;
}


.step-form__success {
    font-size: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.tg-input {
    padding: 18px !important;
}

.step-form {
    background: rgba(17, 19, 20, 0.4);
    backdrop-filter: blur(20px);
    padding: 32px;
    border-radius: 16px;
    color: #e5e3dd;
    font-family: 'Orbitron', 'Russo One', sans-serif;
    font-weight: 400;
    width: 100%;
    border: 1px solid rgba(53, 56, 56, 0.4);
}

.step-form {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

/* Ефект світла, що "біжить" по контуру */
.step-form::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(90deg, 
    rgba(121, 3, 156, 0) 0%, 
    #960fb8 50%, 
    rgba(221, 120, 241, 0) 100%);
  border-radius: 18px;
  z-index: -1;
  animation: run-light 4s linear infinite;
  background-size: 200% 100%;
  pointer-events: none;
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  padding: 3px;
}




.step-form__step {
    transition: all 0.3s ease;
}

.step-form__title {
    font-family: 'Orbitron', 'Russo One', sans-serif;
    font-size: 36px;
    margin-bottom: 26px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 400;
}

label {
    display: block;
    margin-bottom: 24px;
    letter-spacing: 1px;
}

input {
    margin-right: 8px;
    max-width: -webkit-fill-available;

}

label {
    display: flex;
    font-size: 18px;
    font-weight: normal;
}

label input {
    width: 22px;
    height: 22px;
    cursor: pointer;
    padding: 24px;

}

input[type="text"] {
    padding: 10px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e5e3dd;
    background-color: transparent;
    color: #fff;
    margin-bottom: 16px;
}

.step-form__controls {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
}

button {
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #e5e3dd;
    background-color: transparent;
    color: #e5e3dd;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #e5e3dd;
    color: #111314;
}

.step-form__success {
    /* text-align: center; */
    font-size: 20px;
    padding: 20px;
    font-weight: normal;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.poster__button {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 240px;
    width: 100%;
    border-radius: 40px;
    background: var(--Light-Background---Dark-Headlines, #E5E3DD);
    color: var(--Dark-Background---Light-Headlines, #111314);
    /* text-align: center; */
    font-family: 'Orbitron', sans-serif;
    /* font-weight: 400;     */
    /* font-family: "MacPaw Fixel Display";
    font-family: 'Orbitron', sans-serif; */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
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
    color: white;
    max-width: 30%;
}

@media (max-width: 1440px) {
    .step-form {
        width: 100%;
        max-width: 100%;
    }
}

@media (max-width: 768px) {
    .step-form {
        width: 100%;
        max-width: 100%;
    }

    .step-form__title {
        font-size: 32px;
        margin-bottom: 36px;
    }

    .poster__button {
        max-width: 40%;
        margin: 0;
    }
}

@keyframes run-light {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}


</style>
