<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
    <RouterView />
  </main>
  
</template>

<style scoped>
</style>
