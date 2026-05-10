<template>
    <div class="flex justify-between">
        <RouterLink to="/" class="flex items-center text-2xl font-bold">
            Media<span class="bg-amber-600 text-white p-1.5 rounded">
                bobr
            </span>
        </RouterLink >
        <form class="flex" @submit.prevent="">
            <input class="w-3xl border border-r-0 border-amber-800 rounded-1 p-1.5" type="search" placeholder="Поиск...">
            <input class="bg-amber-800 hover:bg-amber-700 text-white cursor-pointer px-3 py-1.5 rounded -translate-x-4" type="submit" value="Поиск">
        </form>
        <!-- для гостя -->
        <nav v-if="true">
            <RouterLink class="text-xl" to="/auth">Войти</RouterLink>
        </nav>

        <!-- для пользователя -->
         <nav v-else>
            <RouterLink class="text-xl" to="/profile">Профиль</RouterLink>
            <button class="text-xl">Выйти</button>
         </nav>
    </div>
    
</template>

<script setup>

</script>