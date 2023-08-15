<script setup>
import { computed, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex'

import HelloWorld from './components/HelloWorld.vue'

const form = reactive({
  task: "",
  description: "",
  deadline: null,
  completed: false
})

const store = useStore()

const tasks = computed( () => store.state.tasks.all)

console.log(tasks)
const taskCount = computed(() => store.getters['tasks/taskCount'])

 const submit = () => {
  const data = {...form}
  store.dispatch('tasks/addTask', data)
 }
</script>

<template>
  <header>
    <div>
      Tasklist
    </div>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Tasks</RouterLink>
        <RouterLink to="/about">New Tasks</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <section>
      <form @submit.prevent="submit">
        <div>
          <label for="task">
            Task
          </label>
          <input type="text" v-model="form.task">
        </div>

        <div>
          <label for="description">
            Description
          </label>
          <textarea v-model="form.description" id="description" cols="30" rows="10"></textarea>
        </div>

        <div>
          <label for="deadline">
            Description
          </label>
          <input id="deadline" type="date" v-model="form.deadline">
        </div>

        <button type="submit">Add</button>

      </form>
    </section>
    <section>
      <div v-if="taskCount > 0">
        <div
          v-for="(task, index) in tasks"
          :key="index"
        >
          {{ task.task }}
        </div>
      </div>
      <div v-else>
        You currently have no task
      </div>
    </section>
  </main>
  <RouterView />
</template>

<style scoped>
</style>
