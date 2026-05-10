<template>
    <h1 class="flex text-3xl">Авторизация</h1>
    <Login v-if="authStatus" />
    <Create v-else />
    <button 
    class="flex items-center justify-center w-full"
    @click="authStatus = !authStatus">
        {{ authStatus ? "Создать аккаунт" : "Войти" }}
    </button>
</template>

<script setup>
import { ref } from 'vue';
import Create from '@/components/auth/Create.vue';
import Login from '@/components/auth/Login.vue';


const authStatus = ref(true)
</script>