<template>
    <h1 class="text-3xl">Главная</h1>
    <div>
        <p v-for="u in store.user" >
            {{ u }}
        </p>
    </div>
</template>


<script setup>
import { useUserStore } from '@/stores/counter';

const store = useUserStore()

</script>