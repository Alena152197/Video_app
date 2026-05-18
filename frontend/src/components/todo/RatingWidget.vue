<template>
  <div class="rounded-lg border-2 border-amber-800 bg-white p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-amber-900">Оценка</h3>
    <p class="mt-1 text-sm text-gray-600">
      Текущая оценка:
      <strong class="text-amber-900">{{ props.value }}</strong>
      из {{ max }}
    </p>
    <div class="mt-3 flex gap-1">
      <button
        v-for="star in max"
        :key="star"
        type="button"
        class="rounded px-2 py-1 text-2xl transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-600"
        :class="star <= props.value ? 'text-amber-600' : 'text-gray-300'"
        @click="emit('select', star)"
      >
        ★
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 5,
  },
})

const emit = defineEmits(['select'])
</script>
