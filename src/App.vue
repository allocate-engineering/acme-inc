<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <header>
        <a href="/">
            <img src="./components/icons/simple_rocket.svg" class="logo" />
        </a>
        <h1>Acme Inc</h1>
        <a href="/basket">
            <img src="./components/icons/basket.svg" class="basket" />
        </a>
    </header>

    <RouterView />

    <footer>&copy; ACME Inc. 2022</footer>
</template>

<style scoped>
header {
    background-color: #e6e6e6;
    min-width: 100%;
    min-height: 80px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 20px;
    gap: 20px;
}

.logo {
    width: 60px;
    height: auto;
}

footer {
    text-align: center;
    padding: 10px;
    background: #e6e6e6;
    font-size: 14px;
    text-transform: uppercase;
}
</style>

<style>
button {
    background-color: #e6e6e6;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
</style>
