<template>
  <section class="bg-[#F0F9FA] py-28">
    <div class="max-w-screen-xl w-full mx-auto">
      <div class="max-w-md mb-10">
        <h2 class="text-4xl font-semibold mb-4">Nossos Serviços</h2>
        <p>Lorem ipsum dolor amet a rabzer ameit dolor teste sobre a secção</p>
      </div>

      <div class="w-full grid grid-cols-12 gap-6 xl:gap-14 items-start">
        <div
          class="col-span-12 lg:col-span-6 xl:col-span-5 grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-3"
        >
          <div
            v-for="service in services"
            :key="service.title"
            class="_card"
            :class="`${
              selected == service.id
                ? '!bg-[#cdf0f4] outline-offset-2 outline outline-PRIMARY_LIGHT_2'
                : ''
            }`"
            @click="() => handleSelected(service.id)"
          >
            <div class="w-14 h-14 bg-PRIMARY_LIGHT_1 rounded-lg mb-2">
              <!-- <img :src="service.img" /> -->
            </div>
            <span class="block leading-tight">{{ service.title }}</span>
          </div>
        </div>
        <div class="content-wrapper">
          <div v-show="selected == 1">
            <div>
              <h3 class="text-2xl font-medium mb-6">
                Consultoria e Legislação
              </h3>
              <p class="text-neutral-600">
                Oferecemos serviços completos de consultoria em recursos humanos
                e legislação para empresas. Nossa equipe de especialistas está
                preparada para auxiliar na legalização interna e externa,
                garantindo que sua empresa esteja em conformidade com todas as
                normas e regulamentos.
              </p>
              <p class="text-neutral-600">
                Desde a análise e implementação de políticas internas até a
                assessoria em questões legais complexas, estamos aqui para
                oferecer suporte em todas as etapas do processo. Conte conosco
                para fornecer soluções personalizadas que atendam às suas
                necessidades específicas e promovam o sucesso do seu negócio.
              </p>
            </div>
          </div>
          <div v-show="selected == 2">
            <div>
              <h3 class="text-2xl font-medium mb-6">
                Recrutamento e Seleção
              </h3>
              <p class="text-neutral-600">
                Oferecemos serviços completos de consultoria em recursos humanos
                e legislação para empresas. Nossa equipe de especialistas está
                preparada para auxiliar na legalização interna e externa,
                garantindo que sua empresa esteja em conformidade com todas as
                normas e regulamentos.
              </p>
              <p class="text-neutral-600">
                Desde a análise e implementação de políticas internas até a
                assessoria em questões legais complexas, estamos aqui para
                oferecer suporte em todas as etapas do processo. Conte conosco
                para fornecer soluções personalizadas que atendam às suas
                necessidades específicas e promovam o sucesso do seu negócio.
              </p>
            </div>
          </div>
          <div v-show="selected == 3">
            <div>
              <h3 class="text-2xl font-medium mb-6">
                Headhunting
              </h3>
              <p class="text-neutral-600">
                Oferecemos serviços completos de consultoria em recursos humanos
                e legislação para empresas. Nossa equipe de especialistas está
                preparada para auxiliar na legalização interna e externa,
                garantindo que sua empresa esteja em conformidade com todas as
                normas e regulamentos.
              </p>
              <p class="text-neutral-600">
                Desde a análise e implementação de políticas internas até a
                assessoria em questões legais complexas, estamos aqui para
                oferecer suporte em todas as etapas do processo. Conte conosco
                para fornecer soluções personalizadas que atendam às suas
                necessidades específicas e promovam o sucesso do seu negócio.
              </p>
            </div>
          </div>
          <div v-show="selected == 4">
            <div>
              <h3 class="text-2xl font-medium mb-6">
                Serviços Offshore
              </h3>
              <p class="text-neutral-600">
                Oferecemos serviços completos de consultoria em recursos humanos
                e legislação para empresas. Nossa equipe de especialistas está
                preparada para auxiliar na legalização interna e externa,
                garantindo que sua empresa esteja em conformidade com todas as
                normas e regulamentos.
              </p>
              <p class="text-neutral-600">
                Desde a análise e implementação de políticas internas até a
                assessoria em questões legais complexas, estamos aqui para
                oferecer suporte em todas as etapas do processo. Conte conosco
                para fornecer soluções personalizadas que atendam às suas
                necessidades específicas e promovam o sucesso do seu negócio.
              </p>
            </div>
          </div>
          <div v-show="selected == 5">
            <div>
              <h3 class="text-2xl font-medium mb-6">
                Liquidação e Processamento Salarial
              </h3>
              <p class="text-neutral-600">
                Oferecemos serviços completos de consultoria em recursos humanos
                e legislação para empresas. Nossa equipe de especialistas está
                preparada para auxiliar na legalização interna e externa,
                garantindo que sua empresa esteja em conformidade com todas as
                normas e regulamentos.
              </p>
              <p class="text-neutral-600">
                Desde a análise e implementação de políticas internas até a
                assessoria em questões legais complexas, estamos aqui para
                oferecer suporte em todas as etapas do processo. Conte conosco
                para fornecer soluções personalizadas que atendam às suas
                necessidades específicas e promovam o sucesso do seu negócio.
              </p>
            </div>
          </div>
          <div v-show="selected == 6">
            <div>
              <h3 class="text-2xl font-medium mb-6">
                Formações
              </h3>
              <p class="text-neutral-600">
                Oferecemos serviços completos de consultoria em recursos humanos
                e legislação para empresas. Nossa equipe de especialistas está
                preparada para auxiliar na legalização interna e externa,
                garantindo que sua empresa esteja em conformidade com todas as
                normas e regulamentos.
              </p>
              <p class="text-neutral-600">
                Desde a análise e implementação de políticas internas até a
                assessoria em questões legais complexas, estamos aqui para
                oferecer suporte em todas as etapas do processo. Conte conosco
                para fornecer soluções personalizadas que atendam às suas
                necessidades específicas e promovam o sucesso do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { services, selected, handleSelected } = useService();
</script>

<style scoped>
.card-wrapper {
  @apply col-span-12 lg:col-span-6 xl:col-span-5 grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-3;
}
._card {
  @apply w-full h-40 rounded-xl border border-PRIMARY_LIGHT_2 overflow-hidden p-2 lg:p-4 cursor-pointer;
}
.content-wrapper {
  @apply col-span-12 lg:col-span-6 xl:col-span-7 leading-snug;
}

.content-wrapper p {
  margin-bottom: 8px;
}
</style>
