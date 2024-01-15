<template>
    
    <h1 class="text-4xl font-bold text-[#2b29a8] text-center mt-10">Products</h1>
    <div class="grid md:grid-cols-3 gap-6 text-center p-10 m-6">
        <RouterLink :to="`/Products/${product.id}`" v-for="product in Products" class="text-[#4b29a8] shadow-2xl border-solid border-2 md:flex md:flex-col items-center p-10 rounded-2xl ">
            <img :src="`/src/assets/${product.picture}`" alt="" class="w-[10rem]">
            <h1>{{ product.name }}</h1>
            <p>{{ product.price }}</p>
            <p class="">{{ product.description }}</p>
            <button type="button" class="text-black-70 border border-black-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 dark:text-purple-400">Add to cart</button>
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
    import Products from "../assets/Products"
</script>