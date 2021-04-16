<template>
  <div class="card-wrapper">
    <form class="card__form">
      <div class="card__form-line">
        <label for="card-number" class="card__form-line-title"
          >Номер карты</label
        >
        <input
          type="text"
          id="card-number"
          name="card-number"
          class="card__form-line-input"
          placeholder="0000 0000 0000 0000"
          v-model="cardNumber"
          @keyup="getCardInfo"
        />
      </div>

      <div class="card__form-line">
        <label for="card-holder" class="card__form-line-title"
          >Имя владельца</label
        >
        <input
          type="text"
          id="card-holder"
          name="card-holder"
          class="card__form-line-input"
          placeholder="IVAN IVANOV"
          v-model="cardHolder"
          @keyup="$store.commit('updateCardHolder', cardHolder)"
        />
      </div>
      <div class="card__form-line-double">
        <div class="card__form-line">
          <label for="card-expires" class="card__form-line-title"
            >Срок действия</label
          >
          <input
            type="text"
            id="card-expires"
            name="card-expires"
            class="card__form-line-input"
            placeholder="MM/YY"
            v-model="cardExpires"
            @keyup="$store.commit('updateCardExpires', cardExpires)"
          />
        </div>

        <div class="card__form-line">
          <label for="card-cvv" class="card__form-line-title">CVV</label>
          <input
            type="password"
            id="card-cvv"
            name="card-cvv"
            class="card__form-line-input"
            placeholder="123"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: this.$store.getters.cardNumber,
      cardHolder: this.$store.getters.cardHolder,
      cardExpires: this.$store.getters.cardExpires
    };
  },

  computed: {
    cardInfo() {
      return this.$store.getters.cardInfo
    },
  },

  methods: {
    getCardInfo() {
      this.$store.dispatch("fetchCardInfo", this.cardNumber);
      this.$store.commit('updateCardNumber', this.cardNumber)
    },
  },
};
</script>

<style>
.card-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 50px;
}

.card__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  background-color: #ececec;
  padding-bottom: 30px;
  border-radius: 15px;
  padding-top: 70px;
}

.card__form-line {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 20px;
}

.card__form-line-input {
  border: 0;
  height: 35px;
  border-radius: 20px;
  padding-left: 15px;
  font-size: 16px;
  outline: none;
}

.card__form-line-double {
  width: 60%;
  display: flex;
  justify-content: space-between;
}

.card__form-line-double .card__form-line {
  width: 30%;
}
</style>
