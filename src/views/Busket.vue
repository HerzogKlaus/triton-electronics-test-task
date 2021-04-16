<template>
  <div class="wrapper">
    <router-link to="/" @click="$store.commit('clearCardInfo')" class="go-back">
      Вернуться назад
    </router-link>
    <card></card>
    <card-form></card-form>

    <div class="busket">
      <busket-item
        v-for="(product, idx) in products"
        :key="product.id"
        @minus-prod-count="minusCount(idx)"
        @plus-prod-count="plusCount(idx)"
        @remove-prod="removeProduct(idx)"
      >
        <template #name>
          <p class="busket__item-name">{{ product.name }}</p>
        </template>

        <template #count>
          <span>{{ product.count }}</span>
        </template>

        <template #price>
          <p class="busket__item-price">
            {{ (product.price * product.count).toLocaleString() }}
          </p>
        </template>
      </busket-item>

      <div class="busket__price">
        <span>Сумма: {{ sumPrice.toLocaleString() }} ₽</span>
        <button class="busket__price-btn">Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
import CardForm from "../components/CardForm";
import BusketItem from "../components/BusketItem";
import Card from "../components/Card";
export default {
  components: {
    CardForm,
    BusketItem,
    Card,
  },

  data() {
    return {
      products: this.$store.getters.allProductsBusket,
    };
  },

  computed: {
    sumPrice() {
      return this.products.reduce((total, product) => {
        return (total += product.price * product.count);
      }, 0);
    },
  },

  methods: {
    minusCount(idx) {
      let index = this.$store.getters.allProducts.findIndex(
        (product) => product.id === this.products[idx].id
      );
      this.$store.commit("minusProduct", index);
      if (this.products[idx].count == 0) {
        this.products.splice(this.products.indexOf(this.products[idx]), 1);
      }
    },

    plusCount(idx) {
      let index = this.$store.getters.allProducts.findIndex(
        (product) => product.id === this.products[idx].id
      );
      this.$store.commit("addProduct", index);
    },

    removeProduct(idx) {
      let index = this.$store.getters.allProducts.findIndex(
        (product) => product.id === this.products[idx].id
      );
      this.products.splice(this.products.indexOf(this.products[idx]), 1);
      this.$store.commit("removeProduct", index);
    },
  },
};
</script>

<style>
.go-back {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  border-radius: 10px;
  font-size: 14px;
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 30px;
  min-height: 50px;
  min-width: 130px;
  background-color: #43bd87;
  color: #fff;
}

.busket {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: min-content;
  background-color: #ececec;
  border-radius: 15px;
  padding-top: 30px;
}

.busket__price {
  width: 80%;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.busket__price span {
  font-weight: bold;
  font-size: 20px;
}

.busket__price-btn {
  height: 50px;
  width: 150px;
  background-color: #43bd87;
  color: #fff;
  border: 0;
  border-radius: 15px;
  font-size: 16px;
  margin: 15px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
}
</style>
