<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Task from './Task.vue'

const store = useStore()

const tasks = computed( () => store.state.tasks.all)

//console.log(tasks)
const taskCount = computed(() => store.getters['tasks/taskCount'])

</script>

<template>
    <div v-if="taskCount > 0">
        <task
            v-for="(task, index) in tasks"
            :key="task.id"
            :task="task"
        />
    </div>
    <div v-else>
        You currently have no task
    </div>
</template>

<style scoped></style>