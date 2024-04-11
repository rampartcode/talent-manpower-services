<script setup lang="ts"></script>

<template>
  <section class="py-24">
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-4">
          <img src="../assets/imgs/faq.jpg" alt="" class="rounded-3xl" />
        </div>
        <div class="col-span-8">
          <h2 class="text-4xl font-semibold mb-6">Perguntas frequentes</h2>

          <div>
            <div class="divide-y divide-slate-200">
              <ui-acordion
                v-for="(faq, index) in FAQs"
                :key="index"
                :title="faq.title"
                :active="faq.active"
                :id="`faqs-${index}`"
              >
                {{ faq.text }}
              </ui-acordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
