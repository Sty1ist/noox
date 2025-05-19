<template>
  <transition name="fade">
    <div class="popup-overlay" v-if="visible">
      <div class="popup-content">
        <button class="popup-close" @click="$emit('close')">×</button>
        <h2 class="step-form__title"> {{ content.title }}</h2>
        <!-- <p>Ми зв’яжемось з вами найближчим часом.</p> -->
        <button class="poster__button full" @click="writeToManager">{{ content.btn }}</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    content: {
        type: Object,
        required: true
    }
  },
  methods: {
    writeToManager() {
      window.open('https://t.me/sensetiv812', '_blank');
    }
  }
}
</script>

<style scoped lang="scss">
.popup-overlay {
  position: fixed;
  inset: 0;
//   background: rgba(17, 19, 20, 0.9);
  backdrop-filter: blur(30px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.popup-content {
//   background: #1e1e1e;
  color: #e5e3dd;
  padding: 48px;
  border-radius: 16px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  position: relative;

  border: 1px solid rgba(53, 56, 56, 0.4); /* напівпрозорий бордер */
    // background: rgba(17, 19, 20, 0.4); /* чорний фон з прозорістю */
    background: rgba(17, 19, 20, 0.4); /* чорний фон з прозорістю */
    backdrop-filter: blur(20px); /* блюр основного фону */
    -webkit-backdrop-filter: blur(20px); /* підтримка для Safari */
}

.popup-close {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 28px;
  background: transparent;
  color: #e5e3dd;
  border: none;
  cursor: pointer;
  transition: 0.3 ease color;

  :hover {
    color: #2c1757;
  }
}

.step-form__title {
    // font-family: 'Orbitron', sans-serif;
  font-weight: 400;
  font-size: 48px;
  margin-bottom: 26px;
//   font-family: 'Orbitron', sans-serif;
font-family: 'Orbitron', 'Russo One', sans-serif;
//   font-weight: 700;
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
    // font-family: 'Orbitron', sans-serif;
    font-family: 'Orbitron', 'Russo One', sans-serif;
    font-weight: 700;    
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
    // max-width: 30%;
    width: 100%;
    max-width: 100%;
    font-weight: 400;

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
            color: black;

            svg {
                g {
                    fill: #111314;
                    stroke: #111314;
                }
            }
        }
}

@media (max-width: 768px) {
  .step-form__title {
    font-size: 32px;
    
    }

    .popup-content {
        margin: 8px;
    }
}
</style>
