<template>
  <div class="card">
    <img
      class="card__image"
      :src="bankLogo"
      alt="Иконка банка"
      v-show="bankLogo"
    />
    <p class="card__number">{{cardNumber}}</p>
    <div class="card__footer">
      <p class="card__holder">{{$store.getters.cardHolder}}</p>
      <span class="card__expires"> {{cardExpires}} </span>
      <img
        class="card__brand"
        :src="brandLogo"
        alt="Иконка платежной системы"
        v-show="brandLogo"
      />
    </div>
  </div>
  <card-form></card-form>
</template>

<script>
export default {
  computed: {
    bankLogo() {
      return this.$store.getters.cardInfo?.bankLogoSmallOriginalSvg;
    },

    brandLogo() {
      return this.$store.getters.cardInfo?.brandLogoOriginalSvg;
    },

    cardNumber() {
      return this.$store.getters.cardNumber
    },

    cardHolder() {
      return this.$store.getters.cardHolder
    },

    cardExpires() {
      return this.$store.getters.cardExpires
    }
  },
};
</script>

<style>
.card {
  background-color: #b6d7a8;
  border: 2px solid #000;
  min-height: 260px;
  width: 400px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 55px;
}

.card__number {
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 30%;
}

.card__footer {
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 15px;
}

.card__holder,
.card__expires {
  font-weight: bold;
  font-size: 16px;
}

.card__image {
  position: absolute;
  top: -0.3em;
  right: 0;
  padding: 1.3em;
  width: 25%;
  height: 5em;
}

.card__brand {
  width: 100px;
  height: 50px;
}
</style>