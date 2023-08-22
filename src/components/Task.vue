<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    task: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div>
        <h2>{{ task.id }}</h2>
        {{ task.task }}
    </div>
</template>