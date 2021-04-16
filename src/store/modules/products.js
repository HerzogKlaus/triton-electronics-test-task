export default {
  state: {
    counter: 0,

    products: [
      {
        id: 1,
        image: "https://via.placeholder.com/150",
        name: "Товар 1",
        price: 5000,
        count: 0
      },

      {
        id: 2,
        image: "https://via.placeholder.com/150",
        name: "Товар 2",
        price: 3600,
        count: 0
      },

      {
        id: 3,
        image: "https://via.placeholder.com/150",
        name: "Товар 3",
        price: 14500,
        count: 0
      },

      {
        id: 4,
        image: "https://via.placeholder.com/150",
        name: "Товар 4",
        price: 21000,
        count: 0
      },

      {
        id: 5,
        image: "https://via.placeholder.com/150",
        name: "Товар 5",
        price: 800,
        count: 0
      }
    ]
  },

  getters: {
    allProducts(state) {
      return state.products;
    },

    allProductsBusket(state) {
      return state.products.filter(product => product.count > 0);
    },

    counter(state) {
      return state.counter;
    }
  },

  mutations: {
    addProduct(state, payload) {
      state.products[payload].count++;
      state.counter++;
    },

    minusProduct(state, payload) {
      state.products[payload].count--;
      state.counter--;
    },

    removeProduct(state, payload) {
      state.counter -= state.products[payload].count
      state.products[payload].count = 0
    }
  }
};
