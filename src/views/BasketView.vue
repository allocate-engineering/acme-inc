<script setup>
import { useBasketStore } from "../store/basketStore";
const basketStore = useBasketStore();

function getImgUrl(id) {
    // const images = import.meta.glob("../assets/*.png");
    // console.log(images);
    // return images["../assets/" + id + ".png"];
    return new URL(`../assets/${id}.png`, import.meta.url).href;
}

function removeFromBasket(productName) {
    const productIndex = basketStore.basketItems.findIndex(bproduct => bproduct.name === productName);
    basketStore.basketItems.splice(productIndex, 1);
}

function totalPrice() {
    var total = 0;
    basketStore.basketItems.forEach(product => {
        total = total + product.price;
    });
    return total;
}
</script>

<template>
    <h2>My Basket</h2>
    <p v-if="basketStore.basketItems.length === 0">No items in your basket</p>
    <div v-else>
        <div class="products_view__product" :key="product.id" v-for="product in basketStore.basketItems">
            <img class="products_view__card-image" :src="getImgUrl(`${product.id}`)" :alt="product.name" />

            <div class="products_view__details">
                <div class="products_view__card-title">{{ product.name }}</div>
                <div class="products_view_card-price">${{ product.price }}</div>
                <div class="products_view__card-footer">
                    <button @click="removeFromBasket(product.name)">Remove</button>
                </div>
            </div>
        </div>
    </div>
    <div class="basket_view__total">Total ${{ totalPrice() }}</div>
</template>

<style scoped>
.products_view {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    padding: 40px 100px;
}

.products_view__product {
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid black;
    width: 30%;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
}
.products_view__details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 20px;
}
.products_view__card-image {
    width: 100px;
}
.products_view__card-title {
    font-weight: bold;
}

.basket_view__total {
    font-weight: bold;
    font-size: 20px;
}
</style>
