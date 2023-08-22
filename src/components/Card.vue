<script setup>
    import { defineProps, defineEmits } from 'vue'

    const emit = defineEmits(['complete', 'delete', 'edit'])
</script>

<template>
    <div class="card">
        <section>
            <div>
                <slot name="header" />
            </div>
            <div>
                <button @click="click('edit')">Edit</button>
                <button @click="click('delete')">Delete</button>
                <button @click="click('complete')">Completed</button>
            </div>
        </section>
        <section>
            <slot name="content" />
        </section>
    </div>
</template>