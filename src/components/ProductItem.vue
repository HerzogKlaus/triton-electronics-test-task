<template>
  <div class="catalog__item">
    <slot name="image"></slot>
    <slot name="name"></slot>
    <slot name="price"></slot>
    <button class="catalog__item-add" @click="$emit('add-prod')">
      Добавить
    </button>
  </div>
</template>

<script>
export default {
  emits: ["add-prod"],
};
</script>

<style scoped>
.catalog__item {
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ececec;
  margin: 25px;
  padding: 15px;
  border-radius: 20px;
}

.catalog__item-add {
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