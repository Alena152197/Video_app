<!-- компонент авторизации -->
<template>
    <div class="text-center">
        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Войти в аккаунт
        </h2>
        <p class="mt-2 text-sm text-gray-600">
            Введите свои данные ниже
        </p>
    </div>

    <form class="mt-8 space-y-6 w-3xl mx-auto" @submit.prevent="handleLogin">
        <div class="-space-y-px rounded-md shadow-sm">
            <div>
                <label for="email" class="sr-only">Email адрес</label>
                <input id="email" v-model="email" name="email" type="email" autocomplete="email" required
                    class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Email адрес" />
            </div>
            <div>
                <label for="password" class="sr-only">Пароль</label>
                <input id="password" v-model="password" name="password" type="password" autocomplete="current-password"
                    required
                    class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Пароль" />
            </div>
        </div>

        <div>
            <button type="submit"
                class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors"
                :disabled="isLoading">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <!-- Иконка замка (Heroicon) -->
                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" fill="currentColor"
                        viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                            clip-rule="evenodd" />
                    </svg>
                </span>

                {{ isLoading ? 'Вход...' : 'Войти' }}
            </button>
        </div>

        <!-- Сообщение об ошибке -->
        <div v-if="errorMessage" class="text-red-600 text-sm text-center">
            {{ errorMessage }}
        </div>

    </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
    isLoading.value = true
    errorMessage.value = ''

    try {
        // Имитация задержки API
        await new Promise(resolve => setTimeout(resolve, 1000))

        console.log('Попытка входа:', {
            email: email.value,
            password: password.value 
        })
    } catch (error) {
        errorMessage.value = 'Неверный логин или пароль'
        console.error(error)
    } finally {
        isLoading.value = false
    }
}
</script>