<template>
     <header class="bg-blue-600 text-white shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <div class="bg-white text-blue-600 p-2 rounded-lg">
                <!-- Ícono igual al SidebarAdmin -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect
                    x="3"
                    y="7"
                    width="18"
                    height="13"
                    rx="2"
                    fill="white"
                    stroke="#2563eb"
                    stroke-width="2"
                  />
                  <rect x="7" y="3" width="10" height="6" rx="2" fill="#2563eb" />
                </svg>
              </div>
              <div>
                <h1 class="text-xl font-bold">UFRO Laboral</h1>
                <p class="text-sm opacity-90">Portal de Empleos</p>
              </div>
            </div>
          </div>
          <nav class="hidden md:flex items-center space-x-6">
            <!--<a @click.prevent="router.push('/empresa/listaOfertasEmpresa')" class="hover:text-blue-200 transition-colors">Inicio</a> -->
            <a @click.prevent="router.push('/empresa/listaOfertas')"  class="hover:text-blue-200 transition-colors"
              >Ofertas Laborales</a
            >
            <a  @click.prevent="router.push('/empresa/perfil')" class="hover:text-blue-200 transition-colors"
              >Mi Perfil</a
            >
            <img class="h-8 w-auto w-20 h-20" src="https://www.ufro.cl/wp-content/uploads/2025/03/02-logo-UFRO-blanco-vertical.png" alt="logo UFRO">
            
          </nav>    
        </div>
      </div>
    </header>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>