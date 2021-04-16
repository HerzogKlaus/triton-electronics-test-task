import { createStore } from 'vuex'
import products from './modules/products'
import card from './modules/card'

export default createStore({
  modules: {
    products,
    card
  }
})
