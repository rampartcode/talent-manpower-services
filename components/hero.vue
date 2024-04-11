<template>
  <section class="w-full h-full min-h-[calc(100vh-104px)] glass">
    <div class="max-w-screen-xl h-full min-h-[calc(100vh-104px)] mx-auto flex items-center justify-between">
      <div class="max-w-lg flex flex-col gap-20">
        <div>
          <h1 class="text-4xl font-semibold mb-4">
            Alcance novos patamares <br />em sua carreira!
          </h1>
          <p class="text-neutral-700 mb-9">
            Descubra oportunidades empolgantes em nosso site de recrutamento.
            Encontre o emprego dos seus sonhos e dê o próximo passo em sua jornada
            profissional. Comece a explorar agora mesmo!
          </p>
          <div class="w-[90%] bg-white px-4 py-3 rounded-[10px] hero-shadow flex gap-4">
            <input
            type="text"
            placeholder="Vaga de Analista de sistemas"
            class="flex-1 focus:border-none focus:outline-none"
            />
            <button class="px-4 py-2 bg-PRIMARY text-white flex items-center gap-2 rounded-lg">
              <Icon name="heroicons:magnifying-glass" />
              Pesquisar
            </button>
          </div>
        </div>

        <div class="w-8 h-11 border-[1.5px] border-neutral-800 rounded-full flex items-center justify-center">
          <Icon name="heroicons:arrow-down" size="18" />
        </div>
      </div>

      <hero-svg />
    </div>
  </section>
</template>
