<template>
  <section class="mx-auto mt-4 max-w-2xl rounded-xl border-4 border-amber-800 bg-amber-50/40 p-4 shadow-sm">
    <header class="border-b-2 border-amber-200 p-4">
      <h2 class="mt-1 text-xl font-bold text-gray-900">
        Мои задачи
      </h2>
    </header>

    <ul v-if="todos.length" class="space-y-3 p-4">
      <li v-for="todo in todos" :key="todo.id">
        <TodoItem :todo="todo" @toggle="toggleTodo" @remove="removeTodo" />
      </li>
    </ul>
    <p v-else class="p-4 text-sm text-gray-600">
      Список пуст. Добавьте задачу из редактора ниже.
    </p>

    <section class="mx-4 mb-4 space-y-3 rounded-lg border-2 border-amber-800 bg-white p-4">
      <TodoEditor v-model:title="draftTitle" v-model:done="draftDone" />
      <p class="text-sm text-gray-700">
        Черновик:
        <strong class="text-amber-900">{{ draftTitle || '—' }}</strong>
        / {{ draftDone ? 'готово' : 'в работе' }}
      </p>
      <button
        type="button"
        class="rounded-md bg-amber-800 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
        :disabled="!draftTitle.trim()"
        @click="addTodo"
      >
        Добавить задачу
      </button>
    </section>

    <div class="px-4 pb-4">
      <RatingWidget :value="rating" @select="onRatingSelect" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoEditor from './TodoEditor.vue'
import RatingWidget from './RatingWidget.vue'

let nextId = 3

const todos = ref([
  { id: 1, title: 'Изучить props', done: false },
  { id: 2, title: 'Сделать emits', done: true },
])

const draftTitle = ref('Новая задача')
const draftDone = ref(false)
const rating = ref(0)

const toggleTodo = (id) => {
  const item = todos.value.find((todo) => todo.id === id)
  if (item) item.done = !item.done
}

const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

const addTodo = () => {
  const title = draftTitle.value.trim()
  if (!title) return

  todos.value.push({
    id: nextId++,
    title,
    done: draftDone.value,
  })
  draftTitle.value = 'Новая задача'
  draftDone.value = false
}

const onRatingSelect = (value) => {
  rating.value = value
}
</script>
