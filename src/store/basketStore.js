import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", () => {
    const basketItems = ref([]);
    const total = computed(() =>
        basketItems.value.reduce((total, item) => {
            return total + item.price;
        }, 0)
    );

    return { basketItems, total };
});
