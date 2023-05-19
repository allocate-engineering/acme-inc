<template>
    <div class="products_view">
        <div
            class="products_view__product"
            :key="product.id"
            v-for="(product, index) in products"
            :class="{ odd: isOdd(index) }"
        >
            <img class="products_view__card-image" :src="getImgUrl(`${product.id}`)" :alt="product.name" />

            <div class="products_view__details">
                <div class="products_view__card-title">{{ product.name }}</div>
                <div class="products_view__card-price">{{ currency(product.price) }}</div>
                <div class="products_view__card-description">{{ product.description }}</div>
                <div class="products_view__card-footer">
                    <button
                        :style="{
                            backgroundColor: product.outOfStock
                                ? 'red'
                                : !basketStore.basketItems.some(bproduct => bproduct.id === product.id)
                                ? 'aquamarine'
                                : 'gray'
                        }"
                        @click="addProductToBasket(product.name)"
                    >
                        {{
                            product.outOfStock
                                ? "Out of Stock"
                                : !basketStore.basketItems.some(bproduct => bproduct.id === product.id)
                                ? "+ Add to Cart"
                                : ""
                        }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import productData from "@/data/products.json";
import { useBasketStore } from "../store/basketStore";
import isOddNumber from "is-odd";
import currencyFormatter from "currency-formatter";

function getImgUrl(id) {
    // const images = import.meta.glob("../assets/*.png");
    // console.log(images);
    // return images["../assets/" + id + ".png"];
    return new URL(`../assets/${id}.png`, import.meta.url).href;
}

const products = ref(productData.products);
const isOdd = isOddNumber;

const basketStore = useBasketStore();

function addProductToBasket(productName) {
    const product = products.value.find(product => product.name === productName);
    if (product.outOfStock) {
        return;
    }
    const store = useBasketStore();
    store.basketItems.push(product);
}

function currency(value) {
    return currencyFormatter.format(value, { code: "USD", precision: 0 });
}
</script>

<style scoped>
.products_view {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    position: relative;
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

.odd {
    background-color: gainsboro;
}

.products_view__card-price {
    position: absolute;
    top: -20px;
    right: -20px;
    background-color: yellow;
    font-weight: 600;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 20px;
}
</style>
