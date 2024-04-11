<script setup lang="ts">
const { data: VAGAS, error } = await useFetch('/api/v1/vagas');

console.log(VAGAS.value);
</script>

<template>
  <section>
    <h1>INDEX</h1>
    {{ VAGAS }}
  </section>
</template>