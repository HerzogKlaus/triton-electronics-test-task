<template>
  <div class="wrapper">
    <router-link to="/busket" class="checkout-btn">
      <img src="../assets/checkout.png" alt="В корзину" />
      <div class="checkout-counter">{{ counter }}</div>
    </router-link>
    <div class="catalog">
      <product-item
        v-for="(product, idx) in products"
        :key="product.id"
        :counter="counter"
        @add-prod="addProd(idx)"
      >
        <template #image>
          <img
            :src="product.image"
            alt="Изображение товара"
            class="catalog__item-image"
          />
        </template>

        <template #name>
          <p class="catalog__item-name">{{ product.name }}</p>
        </template>

        <template #price>
          <span class="catalog__item-price"
            >{{ product.price.toLocaleString() }} ₽</span
          >
        </template>
      </product-item>
    </div>
  </div>
</template>


<script>
import ProductItem from "../components/ProductItem";

export default {
  components: {
    ProductItem,
  },

  data() {
    return {
      products: this.$store.getters.allProducts,
      counter: this.$store.getters.counter,
    };
  },

  methods: {
    addProd(idx) {
      this.$store.commit("addProduct", idx);
      this.counter++;
    },
  },
};
</script>

<style>
.checkout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 80px;
  top: 20px;
  background-color: #43bd87;
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.checkout-counter {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d05757;
  position: absolute;
  bottom: 0;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
}

.catalog {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 150px 80px 150px 80px;
  width: 90%;
}
</style>