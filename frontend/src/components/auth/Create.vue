<!-- frontend/src/components/auth/Create.vue -->
<template>
    <div class="text-center">
        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Создать аккаунт
        </h2>
        <p class="mt-2 text-sm text-gray-600">
            Заполните данные для регистрации
        </p>
    </div>

    <form class="mt-8 space-y-6 w-3xl mx-auto" @submit.prevent="handleRegister">
        <div class="space-y-4">
            <!-- Имя -->
            <div>
                <label for="name" class="sr-only">Имя</label>
                <input id="name" v-model="form.name" name="name" type="text" autocomplete="name" required
                    class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ваше имя" />
            </div>

            <!-- Username -->
            <div>
                <label for="username" class="sr-only">Имя пользователя</label>
                <input id="username" v-model="form.username" name="username" type="text" autocomplete="username"
                    required
                    class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Логин" />
            </div>

            <!-- Email -->
            <div>
                <label for="email" class="sr-only">Email адрес</label>
                <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required
                    class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Email адрес" />
            </div>

            <!-- Пароль -->
            <div>
                <label for="password" class="sr-only">Пароль</label>
                <input id="password" v-model="form.password" name="password" type="password" autocomplete="new-password"
                    required minlength="6"
                    class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Пароль" />
            </div>

            <!-- Подтверждение пароля -->
            <div>
                <label for="confirmPassword" class="sr-only">Подтвердите пароль</label>
                <input id="confirmPassword" v-model="form.confirmPassword" name="confirmPassword" type="password"
                    autocomplete="new-password" required minlength="6"
                    class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Подтвердите пароль" />
            </div>
        </div>

        <div>
            <button type="submit" :disabled="isLoading"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed">
                {{ isLoading ? 'Регистрация...' : 'Зарегистрироваться' }}
            </button>
        </div>
    </form>

    <p v-if="errorMessage" class="mt-2 text-center text-sm text-red-600">{{ errorMessage }}</p>
    <p v-if="successMessage" class="mt-2 text-center text-sm text-green-600">{{ successMessage }}</p>
</template>

<script setup>
import router from '@/router'
import { ref, reactive } from 'vue'

const form = reactive({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
})

const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const handleRegister = async () => {
    errorMessage.value = ''
    successMessage.value = ''

    // Валидация username
    if (!form.username || form.username.length < 3) {
        errorMessage.value = 'Логин должен содержать минимум 3 символа'
        return
    }
    if (!/^[a-zA-Z0-9_-]{3,20}$/.test(form.username)) {
        errorMessage.value = 'Логин может содержать только латиницу, цифры, _ и -'
        return
    }

    // Простая клиентская валидация паролей
    if (form.password !== form.confirmPassword) {
        errorMessage.value = 'Пароли не совпадают'
        return
    }
    if (form.password.length < 6) {
        errorMessage.value = 'Пароль должен содержать минимум 6 символов'
        return
    }

    isLoading.value = true

    const token = import.meta.env.VITE_STRAPI_API_PUBLIC

    try {
        const res = await fetch('http://localhost:1337/api/auth/local/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                username: form.username,
                email: form.email,
                password: form.password
            })
        })

        const data = res.json()

        console.log(data)
        successMessage.value = 'Регистрация успешна! Перенаправляем на вход...'

        form.name = ''; form.username = '', form.email = '', form.password = '', form.confirmPassword = ''
        router.push('/')
    } catch (error) {
        errorMessage.value = 'Ошибка сервера. Попробуйте снова.'
        console.error(error)
    } finally {
        isLoading.value = false
    }
}
</script>