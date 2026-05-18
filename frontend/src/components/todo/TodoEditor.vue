<template>
  <div class="space-y-3 rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
    <h3 class="text-lg font-semibold text-amber-900">Редактор задачи</h3>
    <input
      v-model="title"
      type="text"
      placeholder="Название задачи"
      class="block w-full rounded-md border border-amber-800 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
    />
    <label class="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
      <input
        v-model="done"
        type="checkbox"
        class="size-4 rounded border-amber-800 text-amber-800 focus:ring-amber-600"
      />
      Выполнено
    </label>
  </div>
</template>

<script setup>
const title = defineModel('title')
const done = defineModel('done')
</script>
