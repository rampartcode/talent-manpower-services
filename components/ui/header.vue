<template>
  <header class="bg-white">
    <ui-header-cta />
    <div class="custom-shadow">
      <nav class="max-w-screen-xl mx-auto">
        <div class="h-16 flex justify-between items-center">
          <h1 class="text-2xl text-PRIMARY font-semibold">TMPS</h1>

          <ul class="flex gap-8">
            <li>
              <nuxt-link to="/">Inicio</nuxt-link>
            </li>
            <li>
              <nuxt-link to="sobre-nos">Sobre</nuxt-link>
            </li>
            <li>
              <nuxt-link to="vagas-disponiveis">Vagas Disponíveis</nuxt-link>
            </li>
            <li>
              <nuxt-link to="contacto">Contacto</nuxt-link>
            </li>
          </ul>

          <div class="inline-flex gap-10">
            <button>
              <Icon name="heroicons:magnifying-glass" />
            </button>

            <button>PT</button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply text-PRIMARY font-bold;
}
</style>
