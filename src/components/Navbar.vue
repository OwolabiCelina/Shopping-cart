<!-- <template>
    <div>

        <ul v-for="nav in nav_links" @click="toggleButton">
            <li>{{ nav.name }} </li>
            
        </ul>

    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const open = ref(false)

    const nav_links = [
        {
            name: 'Home'
        },
        {
            name: 'About'
        },
    ]

    const toggleButton = () =>{
        open.value = !open.value
    }

</script> -->


<template>
    <div
      class="bg-gray-900 text-white h-[5rem] p-4 md:flex md:items-center justify-between px-4"
    >
      <div class="logo text-2xl text-white font-bold cursor-pointer">
        <RouterLink to="/">Shopping Cart</RouterLink>
      </div>
      <span class="text-white md:hidden text-4xl absolute right-6 top-5 cursor-pointer">
        <button class="bg-white text-black p-3 text-xl rounded-full" @click="toggleButton">{{ open ? "close" : "open" }}</button>
      </span>
      <ul
        class="md:flex gap-5 items-center absolute md:static bg-gray-900 w-full md:w-auto pb-10 md:pb-0 px-6 md:px-0 top-14 duration-500 mt-5"
        :class="[open ? 'left-0' : 'left-[-100%]']"
      >
        <li v-for="tag in nav_links" class="py-4 md:my-0 hover:text-green-500 duration-300 text-xl">
          <a href="#">{{ tag.name }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import {RouterLink} from "vue-router"
  import { ref } from "vue";
  
  const open = ref(false);
  
  const nav_links = [
    { name: "Home" },
    { name: "About" }
  ];
  
  const toggleButton = ()=>{
    open.value = !open.value;
  }
  </script>