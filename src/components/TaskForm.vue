<script setup>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'

const form = reactive({
  id: 0,
  task: "",
  description: "",
  deadline: null,
  completed: false
})

const store = useStore()

const lastElementId = computed(() => store.getters['tasks/lastElementId'])

 const submit = (event) => {
  //console.log(`Task count is: ${taskCount.value}`)

  //console.log(`Last element ID is: ${Object.entries(lastElementId)}`)
  form.id = lastElementId.value + 1
  //console.log(toString(lastElementId))
  //console.log('New ID:')
  //console.log(JSON.stringify(form))
  const data = {...form}
  store.dispatch('tasks/addTask', data)
  //console.log(event)
  event.target.reset()
 }
</script>

<template>

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
</template>

<style scoped></style>