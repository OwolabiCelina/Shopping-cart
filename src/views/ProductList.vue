<template>
    <h1 class="text-4xl font-bold text-[#a829a8] text-center mt-8">Product</h1>
    <div class="grid md:grid-cols-3 gap-6 text-center p-10 m-6">
        <RouterLink :to="`/Products/${product.id}`" v-for="product in Products" class="text-[#a829a8] shadow-2xl border-solid border-2 md:flex md:flex-col items-center p-10 rounded-2xl ">
            <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Add</button>
            <img :src="product.picture" alt="" class="w-[20rem]">
            <h1>{{ product.name }}</h1>
            <p>{{ product.price }}</p>
            <p class="">{{ product.description }}</p>
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
    import Products from "../assets/Products"
</script>