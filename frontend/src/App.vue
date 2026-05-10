<template>
<header class="p-4">
    <Header />
</header>

<main class="p-4">
    <RouterView />
</main>

<footer class="p-4">
    <Footer />
</footer>
</template>


<script setup>
import Footer from './components/common/Footer.vue';
import Header from './components/common/Header.vue';

</script>