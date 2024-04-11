<script setup lang="ts"></script>

<template>
  <footer class="bg-gradient-to-b from-[#1F3A3D] to-[#52959B] py-16">
    <div class="max-w-screen-xl mx-auto flex flex-col gap-14">
      <div class="flex text-white/70">
        <div class="w-1/4">
          <h3 class="text-PRIMARY_LIGHT_2 text-xl font-semibold mb-2">TMPS</h3>
          <p>
            Somos uma empresa especializada em consultoria de recursos humanos,
            recrutamento e seleção.
          </p>
        </div>
        <div class="w-1/4">
          <h3 class="text-PRIMARY_LIGHT_2 text-xl font-semibold mb-2">
            Contactos
          </h3>
          <ul class="flex flex-col gap-2">
            <li class="flex items-center gap-2 leading-tight">
              <Icon name="heroicons:phone" size="20" />
              <span class="flex-1"> +244 929 040 487 </span>
            </li>
            <li class="flex items-center gap-2 leading-tight">
              <Icon name="heroicons:envelope" size="20" />
              <span class="flex-1"> tania.silva@tmps.ao </span>
            </li>
            <li class="flex items-start gap-2 leading-tight">
              <Icon name="heroicons:map-pin" size="20" />
              <span class="flex-1">
                Rua Sesinando Marques nº 22 <br>Bairro de Alvalade, Maianga
              </span>
            </li>
          </ul>
        </div>
        <div class="w-1/4">
          <h3 class="text-PRIMARY_LIGHT_2 text-xl font-semibold mb-2">
            Acesso rápido
          </h3>
          <ul>
            <li><nuxt-link to="#">Inicio</nuxt-link></li>
            <li><nuxt-link to="#">Sobre nós</nuxt-link></li>
            <li><nuxt-link to="#">Parceiros</nuxt-link></li>
            <li><nuxt-link to="#">Vagas Disponíveis</nuxt-link></li>
            <li><nuxt-link to="#">Contacto</nuxt-link></li>
          </ul>
        </div>
        <div class="w-1/4">
          <h3 class="text-PRIMARY_LIGHT_2 text-xl font-semibold mb-2">
            Newsletter
          </h3>
          <p class="mb-4">
            Subscreva à nossa newsletter para receber novidades de vagas
          </p>

          <div
            class="h-11 flex items-center border border-PRIMARY_LIGHT_2 rounded-lg py-2 pr-2"
          >
            <input
              type="text"
              placeholder="exemplo@dominio.com"
              class="bg-transparent h-full pl-2 flex-1 focus:border-none focus:outline-none text-white placeholder:text-white/70"
            />
            <button
              class="w-8 h-8 bg-PRIMARY_LIGHT_1 text-white flex justify-center items-center rounded-lg"
            >
              <Icon name="heroicons:paper-airplane" size="22" />
            </button>
          </div>
        </div>
      </div>
      <div class="text-center text-white pt-6 border-t border-white/60">
        <p class="text-sm">©All rights reserved - TMPS 2024</p>
      </div>
    </div>
  </footer>
</template>
