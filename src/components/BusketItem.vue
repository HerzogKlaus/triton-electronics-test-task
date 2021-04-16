<template>
  <div class="busket__item">
    <slot name="name"></slot>
    <div class="busket__item-count">
      <button class="busket__item-btn" @click="$emit('minus-prod-count')">-</button>
      <slot name="count"></slot>
      <button class="busket__item-btn" @click="$emit('plus-prod-count')">+</button>
    </div>
    <slot name="price"></slot>
    <button class="busket__item-btn" @click="$emit('remove-prod')">&#10060;</button>
  </div>
</template>

<script>
export default {
  emits: ['minus-prod-count', 'plus-prod-count']
}
</script>

<style>
.busket__item {
  width: 80%;
  background-color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
}

.busket__item-name {
  padding-right: 245px;
}

.busket__item-btn {
  margin-right: 10px;
  margin-left: 10px;
  border: 0;
  color: #fff;
  background-color: #43bd87;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}
</style>