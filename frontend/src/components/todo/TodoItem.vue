<template>
  <article
    class="flex flex-wrap items-center justify-between gap-3 rounded-lg border-2 border-amber-800 bg-white p-4 shadow-sm"
  >
    <p class="flex-1 text-gray-900">
      <span :class="props.todo.done ? 'line-through text-gray-400' : 'font-medium'">
        {{ props.todo.title }}
      </span>
      <span class="ml-2 text-sm text-amber-800">
        — {{ props.todo.done ? 'готово' : 'в работе' }}
      </span>
    </p>
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class="rounded-md border border-amber-800 bg-amber-100 px-3 py-1.5 text-sm font-medium text-amber-900 hover:bg-amber-200"
        @click="emit('toggle', props.todo.id)"
      >
        Сменить статус
      </button>
      <button
        type="button"
        class="rounded-md border border-red-300 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-800 hover:bg-red-100"
        @click="emit('remove', props.todo.id)"
      >
        Удалить
      </button>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['toggle', 'remove'])
</script>
