export default {
  //d92e1fa36b03bf6bc66c7e320099b6f3

  state: {
    cardInfo: null,
    cardNumber: null,
    cardHolder: null,
    cardExpires: null
  },

  getters: {
    cardInfo(state) {
      return state.cardInfo;
    },

    cardNumber(state) {
      return state.cardNumber;
    },

    cardHolder(state) {
      return state.cardHolder;
    },

    cardExpires(state) {
      return state.cardExpires;
    }
  },

  mutations: {
    updateCardInfo(state, payload) {
      state.cardInfo = payload;
    },

    clearCardInfo(state) {
      state.cardInfo = null;
      state.cardNumber = null;
      state.cardHolder = null;
      state.cardExpires = null;
    },

    updateCardNumber(state, payload) {
      state.cardNumber = payload;
    },

    updateCardHolder(state, payload) {
      state.cardHolder = payload;
    },

    updateCardExpires(state, payload) {
      state.cardExpires = payload;
    }
  },

  actions: {
    async fetchCardInfo({ commit }, payload) {
      const res = await fetch(
        `https://api.cardinfo.online?input=${payload}&apiKey=d92e1fa36b03bf6bc66c7e320099b6f3`
      );
      const cardInfo = await res.json();
      this.cardInfo = cardInfo;
      await commit("updateCardInfo", cardInfo);
    }
  }
};
