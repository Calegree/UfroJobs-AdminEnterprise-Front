<template>
  <!-- Sidebar -->
  <aside class="w-64 bg-white border-r flex flex-col">
    <div class="flex items-center gap-3 px-4 py-6 border-b">
      <div class="bg-blue-600 text-white p-2 rounded-lg">
        <!-- Usa tu icono aquí -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
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
        <h1 class="text-lg font-bold text-gray-900 leading-tight">
          UFRO Laboral
        </h1>
        <p class="text-xs text-gray-500">Panel de Administración</p>
      </div>
    </div>
    <nav class="flex-1 px-2 py-4">
      <p class="text-xs text-gray-500 px-2 mb-2">Navegación Principal</p>
      <ul class="space-y-1">
        <li>
          <a
            @click.prevent="router.push('/admin/dashboard')"
            class="flex items-center px-3 py-2 rounded-lg hover:bg-blue-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chart-line-icon lucide-chart-line"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a
            @click.prevent="router.push('/admin/usuarios')"
            class="flex items-center px-3 py-2 rounded-lg hover:bg-blue-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round-icon lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            Usuarios
          </a>
        </li>
        <li>
          <a
            @click.prevent="router.push('/admin/empresas')"
            class="flex items-center px-3 py-2 rounded-lg hover:bg-blue-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-building2-icon lucide-building-2"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              <path d="M10 6h4" />
              <path d="M10 10h4" />
              <path d="M10 14h4" />
              <path d="M10 18h4" />
            </svg>
            Empresas
          </a>
        </li>
        <li>
          <a
            @click.prevent="router.push('/admin/solicitudes')"
            class="flex items-center px-3 py-2 rounded-lg hover:bg-blue-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check-icon lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Solicitudes
          </a>
        </li>
      </ul>
    </nav>
    <div class="p-4 border-t mt-auto">
      <button
        class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border text-white hover:bg-red-700 bg-red-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
        Cerrar Sesión
      </button>
    </div>
  </aside>
</template>
<script setup>
import { ref } from 'vue';  
import { useRouter } from 'vue-router';
const router = useRouter();

</script>