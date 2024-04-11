<template>
  <section class="bg-[#1D8D94] py-16">
    <div class="max-w-screen-xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-3xl text-white font-semibold mb-4">
          Oportunidades para sua carreira
        </h2>
        <p class="text-white/80">
          Veja algumas oportunidades de trabalho disponível na nossa
          plataforma!!
        </p>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <ui-card-vagas v-for="i in 12" :key="i" />
      </div>
    </div>
  </section>
</template>
