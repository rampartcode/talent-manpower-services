<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";
</script>

<template>
  <section class="min-h-[480px] h-full py-24">
    <div class="max-w-screen-xl mx-auto text-center mb-12">
      <h1 class="text-3xl font-semibold">
        As melhores empresas estão aqui oferendo vagas de emprego
      </h1>
    </div>
    <div class="mb-4">
      <Marquee direction="left" className="" innerClassName="">
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/bai.png" alt="" class="w-full" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/isptec.png" alt="" class="" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/total.png" alt="" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/unitel.png" alt="" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/bai.png" alt="" class="w-full" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/isptec.png" alt="" class="" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/unitel.png" alt="" />
        </div>
      </Marquee>
    </div>
    <div class="mb-14">
      <Marquee :reverse="true" direction="left" className="" innerClassName="">
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/bai.png" alt="" class="w-full" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/isptec.png" alt="" class="" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/total.png" alt="" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/unitel.png" alt="" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/bai.png" alt="" class="w-full" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/isptec.png" alt="" class="" />
        </div>
        <div
          class="min-w-52 h-16 flex items-center justify-center grayscale transition-all hover:grayscale-0"
        >
          <img src="../assets/imgs/unitel.png" alt="" />
        </div>
      </Marquee>
    </div>
    <div class="text-center">
      <nuxt-link to="#" class="bg-PRIMARY px-5 py-3 text-white font-medium rounded-lg">
        Veja todas as empresas parceiras 
        <Icon name="heroicons:arrow-right" />
      </nuxt-link>
    </div>
  </section>
</template>
